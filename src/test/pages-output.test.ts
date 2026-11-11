import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
// Build tooling runs in Node, independently of the application's server runtime.
// @ts-expect-error The standalone publishing script is plain JavaScript.
import { preparePages } from "../../scripts/prepare-pages.mjs";

const directories: string[] = [];
async function fixture() {
  const directory = await mkdtemp(join(tmpdir(), "portfolio-pages-"));
  directories.push(directory);
  await mkdir(join(directory, "assets"));
  await writeFile(join(directory, "assets/app.js"), "console.log('ready')");
  await writeFile(join(directory, "Keri Gagnow - Resume.pdf"), "resume fixture");
  await writeFile(join(directory, "index.html"), '<h1>Keri Gagnow</h1><script src="/assets/app.js"></script>');
  return directory;
}

afterEach(async () => {
  await Promise.all(directories.splice(0).map((directory) => rm(directory, { recursive: true, force: true })));
});

describe("GitHub Pages export", () => {
  it("prepares a standalone browser folder with Jekyll disabled", async () => {
    const directory = await fixture();
    expect(await preparePages(directory)).toBe(directory);
    expect(await readFile(join(directory, ".nojekyll"), "utf8")).toBe("");
  });

  it("rejects missing browser assets instead of publishing a broken site", async () => {
    const directory = await fixture();
    await rm(join(directory, "assets/app.js"));
    await expect(preparePages(directory)).rejects.toThrow();
  });

  it("rejects a missing résumé", async () => {
    const directory = await fixture();
    await rm(join(directory, "Keri Gagnow - Resume.pdf"));
    await expect(preparePages(directory)).rejects.toThrow();
  });

  it("rejects an unrendered document", async () => {
    const directory = await fixture();
    await writeFile(join(directory, "index.html"), '<div id="root"></div>');
    await expect(preparePages(directory)).rejects.toThrow("not prerendered");
  });
});