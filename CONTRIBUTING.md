# Contributing

## Setup

```bash
git clone https://github.com/Dawid-Femin/Material-UI-Storybook.git
cd Material-UI-Storybook
pnpm install
pnpm storybook
```

## Commit convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new component
fix: correct button padding
docs: update README
chore: bump dependencies
```

## Adding a component

1. Add the export to the relevant group in `src/components/<group>/index.ts`
2. Add a story in `src/components/<group>/<Component>.stories.tsx`
3. Run `pnpm storybook` to verify it looks correct
4. Run `pnpm build` and `pnpm publint` to verify the build

## Releasing

```bash
pnpm changeset   # describe your changes
pnpm version     # bump package version + update CHANGELOG
pnpm release     # build + publish to npm
```
