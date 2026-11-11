# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Automatic GitHub Pages publishing

The workflow in `.github/workflows/deploy-pages.yml` builds and publishes this
repository whenever its **default branch** changes. It can also be started from
**Actions → Publish portfolio to GitHub Pages → Run workflow**, selecting the
default branch. Feature branches are not deployed.

### One-time GitHub setup

1. Put this complete source project (including `.github`, `scripts`, `public`,
   `src`, `package.json`, and `bun.lock`) in **KeriGagnow/kerigagnow.github.io**.
   Replace the previously uploaded compiled files; keep a backup if wanted.
2. In that repository, open **Settings → Pages → Build and deployment** and
   choose **GitHub Actions** as the source.
3. Push a change to the default branch, or run the workflow manually.
4. Watch the run under **Actions**. A successful deployment updates
   **https://kerigagnow.github.io/**. No Lovable credits or personal access token
   are needed for these builds.

GitHub Pages publishes the repository containing the workflow, **not a separate
repository**. Use the repository named `kerigagnow.github.io` to keep your current
address. This configuration uses root-relative URLs and is intended for that
root-level user site (or a custom domain), not a `/repository-name/` project site.
Cross-repository publishing is not configured.

### Maintaining the portfolio

- Edit `src/routes/index.tsx` for your introduction, highlights, projects and skills.
- Edit `src/styles.css` for the appearance.
- Replace `public/resume-keri-gagnow.pdf` to update the résumé.
- Keep source images in `src/assets`.

For local editing, install Node 22 and Bun 1.3.13, run `bun install --frozen-lockfile`,
then `bun run dev`. Run `bun run test` to check the project.
`bun run build:pages` prerenders the portfolio, checks its local asset links,
and adds `.nojekyll` in `dist/client`. Only that browser folder is published;
no server, credentials, or dependencies are uploaded. Do not edit generated files
in `dist` or `src/routeTree.gen.ts`.

The GitHub Actions deployment itself must be verified on GitHub after the first
push; adding the workflow here does not change your repository's Pages settings.
