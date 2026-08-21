# dsh-plugin-rtk

A DeepSeek Harness plugin that delegates shell-command rewriting and output compaction to the official [RTK project](https://github.com/rtk-ai/rtk).

> Status: implementation is in progress. The repository is not yet installable as a DSH plugin.

## Goals

- Preserve DSH sandbox, approval, timeout, workdir, background-process, and exit-code semantics.
- Delegate supported shell syntax to the active RTK binary through `rtk rewrite`.
- Browse every public RTK GitHub Release, including stable, prerelease, and historical releases.
- Require an official platform asset, SHA-256 verification, and compatibility tests before activation.
- Keep RTK versions and history databases isolated so updates can roll back safely.
- Show estimated handled and saved Tokens in a draggable DSH Web overlay.
- Keep all data local and disable RTK telemetry.

## Development

Prerequisites:

- Node.js 20.19 or later
- pnpm 11.22.0
- Git

```sh
pnpm install --frozen-lockfile
pnpm run check
```

The quality pipeline enforces formatting, linting, a 400-line hard limit for hand-maintained files, dependency boundaries, unused-code checks, duplication limits, strict TypeScript, coverage, bundling, and package metadata.

## Project status

Implementation follows the approved Chinese plans in [`docs/开发计划.md`](docs/开发计划.md). Each stage is verified, committed, pushed to `origin/main`, and checked against the remote SHA before the next stage starts.

## Privacy and safety

The plugin will not run `rtk init`, install global hooks, modify shell profiles, or upload command history. DSH remains the sole permission authority. See [SECURITY.md](SECURITY.md) for vulnerability reporting.

## Documentation

- [中文说明](README.zh.md)
- [Development plan](docs/开发计划.md)
- [Architecture and runtime](docs/架构与运行时.md)
- [Data and interface](docs/数据与界面.md)
- [Engineering rules](docs/工程规范.md)
- [Implementation and acceptance](docs/实施与验收.md)

## License

[MIT](LICENSE)
