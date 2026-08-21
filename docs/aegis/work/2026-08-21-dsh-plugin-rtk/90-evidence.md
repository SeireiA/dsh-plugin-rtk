# Evidence Bundle Draft

## 阶段 0 基线

- `pwd`：`E:\Projects\test\dsh-plugin-rtk`。
- `.git`：不存在。
- 初始文件数：5。
- GitHub active account：`SeireiA`。
- 目标 repository：不存在。
- Node：`v24.16.0`。
- pnpm：`11.22.0`。
- Git：`2.54.0.windows.1`。
- DSH：`0.1.0-rc.7`。

## 阶段 0 验证

- 初始本地 `pnpm install --frozen-lockfile`：通过；项目级 `allowBuilds` 只授权 `unrs-resolver`。
- 首次 CI：Node 24 的 Windows/macOS/Linux 全部通过；Node 20 因 pnpm 11 要求 Node 22.13 而在 setup 阶段失败。
- 修复决策：项目包管理器固定为 pnpm 10.34.5，运行时 `engines >=20.19` 不降级；修复后的六任务 CI 是阶段 0 最终门禁。
- `pnpm run check`：退出码 0。
- Format、ESLint、400 行、dependency-cruiser、knip、jscpd、TypeScript：全部通过。
- Vitest：1 个文件、2 个测试通过，statements/branches/functions/lines 均为 100%。
- tsdown：生成 `lib/index.js` 与 `lib/index.d.ts`，和 package exports 一致。
- `pnpm pack --dry-run`：通过；tarball 只包含 CHANGELOG、README、LICENSE、package metadata 与 `lib`。
- GitHub repository：公开、非 fork、Issues 开启。
- Topics：`dsh-plugin`、`deepseek-harness`、`rtk`、`token-saver`。
- origin：`https://github.com/SeireiA/dsh-plugin-rtk.git`。
- Author：`SeireiA <62344887+SeireiA@users.noreply.github.com>`。
- 阶段 SHA：提交无法自引用其自身 hash；以 push 后 `git rev-parse HEAD` 与远端 ref 对账 receipt 为准。

## 风险

阶段 0 只能证明工程门禁可运行，不能证明 DSH 或 RTK 功能；这些证据由阶段 1 至 8 逐步补齐。
