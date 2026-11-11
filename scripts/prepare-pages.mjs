import { access, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

// Publish only the browser output; GitHub Pages cannot run the server bundle.
export async function preparePages(directory = "dist/client") {
  const root = resolve(directory);
  const html = await readFile(resolve(root, "index.html"), "utf8");
  if (!html.includes("Keri Gagnow") || !/<script\b[^>]*\bsrc=/.test(html)) {
    throw new Error("The portfolio was not prerendered with its browser scripts.");
  }

  // Catch missing styles, images, scripts and the résumé before publishing.
  for (const match of html.matchAll(/(?:src|href)=["']([^"']+)["']/g)) {
    const url = match[1];
    if (!url || /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(url)) continue;
    const file = decodeURIComponent(url.split(/[?#]/)[0]).replace(/^\/+/, "");
    const target = resolve(root, file);
    if (!target.startsWith(`${root}/`)) throw new Error(`Invalid asset path: ${url}`);
    await access(target);
  }
  await access(resolve(root, "Keri Gagnow - Resume.pdf"));
  await writeFile(resolve(root, ".nojekyll"), "");
  return root;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  await preparePages(process.argv[2]);
  console.log("GitHub Pages portfolio checked and ready in dist/client.");
}