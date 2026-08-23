# Evidence Bundle Draft

## 已提交基线

- 阶段 0 SHA：`a47830e09f61ce57217a8a797c9b90b2768cfb45`。
- 阶段 0 CI run `32449585110`：Windows/macOS/Linux × Node 20/24 六任务通过。
- 第五版文档 SHA：`d06c5a1dcc85adac2330507b52085b14bfb5ed2e`。
- 第五版文档 CI run `32463194830`：Windows/macOS/Linux × Node 20/24 六任务通过。
- Repository：`https://github.com/SeireiA/dsh-plugin-rtk.git`，公开、非 fork、`main`。

## Stage 1 Retirement Evidence

- TaskStartSnapshot：12 个 tracked delta、15 个 untracked 实验文件；无 staged delta、Git operation、stash 使用或第二 worktree。
- Tracked restore：`.dependency-cruiser.cjs`、README、manifest、lock/workspace、package checks、`src/index.ts`、Stage 0 tests、tsconfig 和 tsdown config 精确恢复。
- Untracked retirement：第四版 Typert projection/generator、executor replacement、Client、composition 和专用 tests/config 精确删除。
- Prohibited commands：未使用 `git reset --hard`、`git clean`、force push 或历史改写。
- Receipt：清理后 `git status --porcelain=v2 --branch` 只有 branch header；HEAD 与 `origin/main` 都是 `d06c5a1dcc85adac2330507b52085b14bfb5ed2e`，divergence `0/0`。
- Research cleanup：校验 `E:\Projects\test\.dsh-plugin-rtk-stage1-research\.owner` 精确匹配任务标记后，递归删除该 task-owned 临时目录并确认不存在；未删除任何 DSH/Profile/RTK/用户目录。

## DSH Version Evidence

- npm dist-tags：初次研究为 `latest=0.1.0-rc.7`、`next=0.1.1-rc.1`；2026-08-21 第 1 个续行轮次复核时两者均已指向 `0.1.1-rc.1`。该变化不改变 rc.7 最低兼容要求。
- `@deepseek-ai/dsh-typert-generator`、protocol、loader、registry、gateway、Client runtime/modules/theme 等目标包均有 rc.7/rc.1 发布。
- 两版本 generator `package.json` 没有 `bin`；`dsh plugin` tagged implementation 仅转发 pnpm 并 reconciliation bundle list。
- Public generator exports 包含 analyzer、emitter、`WorkspaceTypertGenerator` 和 `./tsdown` plugin。
- Public `typertPlugin(options)` 只有 `mode: 'package' | 'workspace'` 与 `faces` 参数；没有 standalone root package 配置项。
- 第 1 个续行轮次重新读取 rc.7/rc.1 generator 与 Client modules exports，surface 未变化；`@deepseek-ai/dsh-client-build`、`@deepseek-ai/dsh-plugin-build`、`@deepseek-ai/dsh-build` 均未发布，upstream issue 搜索未发现 standalone Typert 或 Client builder 的修复记录。

## Typert Standalone Probe

分别在 task-owned research root 创建真实 standalone package manifest、`tsconfig.host.json` 和空 `lib`，安装对应官方 package 后执行：

```text
node --input-type=module -e "import { typertPlugin } from '@deepseek-ai/dsh-typert-generator/tsdown'; const p=typertPlugin({faces:['host']}); p.writeBundle({dir: process.cwd() + '/lib'});"
```

有效结果：

```text
rc7 artifacts=0
rc1 artifacts=0
```

命令均以 exit code 0 完成，但没有生成 `typert.host.*` 或 `typert.remote-client.*`。这证明两个 public tsdown integrations 对当前 standalone 根 package 拓扑都不能产生 Stage 1 必需 artifact。

## Diagnostic Source Evidence

- 两版本发布 `tsdown-plugin.js` 的 package mode 在向上查找 package manifest 时不把 workspace root 本身作为 package contributor。
- 两版本发布 `analyzer.js` 的 `loadRegistrations()` 只接受 aggregate project references，且 package root 必须位于 `<root>/packages/**`。
- 两版本 tagged `tsdown-plugin.spec.ts` 的 contributor fixtures 全部由 `join(root, 'packages', directory)` 创建。
- 上述内容解释实测失败，只作为诊断证据，不提升为公共兼容 contract。
- 直接调用 public analyzer/emitter/generator 拼装自定义流程，或改变成 DSH 风格假 workspace，都违反第五版禁止项。

## Client Bundle Evidence

- 官方 Client modules 文档说明 loader 扫描 `dsh.client` 并消费预构建 `exports['./client']`。
- Runtime artifact 必须是注册 `window.__ModuleLoader__.load({ id, factory })` 的 classic lazy-CJS bundle。
- 两个 tag 的 monorepo helper 位于 source-only `packages/client/tsdown.client.ts`。
- `@deepseek-ai/dsh-client-modules` exports 没有 build helper；registry/web search 未找到 qualifying official third-party builder/CLI。
- 复制 source helper 或维护本地等价配置会形成计划禁止的 source/build mirroring。

## Runtime Surface Evidence

- Host bundle patch、Cordis Service、Typert Gateway、Client module consumption 与 Slot API 分别公开存在。
- Current rc.7 Inspect 确认 Client `slots.register(registration, Component)` 返回 disposer。
- `shell.overlay` 是 root-scoped additive list slot，registration 必须提供唯一 `id`。
- 这些 runtime surface 无法替代缺失的 Typert/Client build artifact，因此没有继续 install/start/Remote/Slot probe。

## Project Verification And Cleanup

- 首次 `pnpm run check` 在 `knip` 发现 ignored 的旧 `lib/index.d.ts` 仍引用第四版 Remote 依赖；这证明 tracked cleanup 之外还有派生产物 retirement 未闭合。
- `.gitignore` 与 `scripts/clean-derived.mjs` 共同确认 `lib` 是项目拥有、可重建的 allowlist 目录；使用 `pnpm run clean` 删除旧 bundle，没有修改检查规则。
- 清理后完整 `pnpm run check` 通过：Prettier、ESLint、400 行、dependency-cruiser、knip、jscpd、TypeScript、Vitest、coverage、tsdown 和 package gate 全绿。
- Vitest：1 个文件、2 个 Stage 0 tests 通过；statements/branches/functions/lines 均为 100%。
- 新 bundle 仅含 `packageIdentity` 的 4 个 Stage 0 artifact，不再含 Remote/Client/Typert 文件；验证后再次运行 owner clean 删除 `lib`、coverage 等派生产物。
- DSH Profile manifest 扫描未发现 `dsh-plugin-rtk`，进程扫描未发现插件相关进程；项目保持未安装。

## Goal Continuation Rechecks

1. Round 1：npm `latest`/`next` 漂移到 rc.1；重新读取 rc.7/rc.1 generator 与 Client modules exports，未增加 CLI/build export；三个可能的官方 build-helper 包均未发布。证据提交 `e07c1a1fa49203b15a5869e7bc54dcb89ae0cb3a` 及 CI `32469437304` 通过。
2. Round 2：检查 current master `528c682e061696f5a160f363f236ecbf53cbd006`。Generator root discovery、`<root>/packages/**` filter 和 nested-only tests 未变化；Client helper 仍是 source-only `packages/client/tsdown.client.ts`，官方插件仍使用仓库相对 import。
3. Round 3：重新读取四个目标 npm tarball 的 integrity、tarball URL、`bin` 和 exports；immutable target surfaces 未变化。Master、dist-tags、批准 stop condition、本地/远端、CI、清场和未安装状态均再次核对。
4. 独立 current-upstream falsifier 返回 `BLOCKER_PERSISTS`；当前 master 就是 rc.1 release merge，在本轮检查的 current master、公开 issue/PR 检索和目标版本 surfaces 中，未发现可用于两个目标版本的 qualifying build path。
5. 同一具体阻断条件已连续存在 3 个 goal rounds，满足持久 goal 的 blocked policy；结果只能是 `blocked`，不能是 `complete`。
6. Final closure 时调用当前 Aegis workspace helper：`bundle` 因缺少 `task-intent-draft.json` 失败；独立 `check` 因缺少 `docs/aegis/{adr,baseline,specs,plans}` 与 `README.md`、`INDEX.md`、`BASELINE-GOVERNANCE.md` scaffold 失败。两者均未写入文件。此 Markdown-only 旧记录的结构检查未通过，作为 residual risk 披露，不作为产品 blocker 已解除或 whole-task complete 的证据。

## Independent Review

- Official bridge research subagent verdict：`BLOCKED`。
- Findings-first spec reviewer verdict：`APPROVE_BLOCKER`。
- Current-upstream falsifier verdict：`BLOCKER_PERSISTS`。
- Reviewer 纠正：不能声称没有 public generator API；准确表述是没有适用于当前 topology 的官方 standalone build integration。
- Reviewer 结论：mandatory generated artifacts 是严格前置，继续 profile install/Remote/Slot 测试不能改变 blocker。
- 不把公开不可核验或解析到无关 Discussion 的 PR 编号作为证据。

## Stop-Gate Decision

1. rc.7 失败，不能抬高最低版本规避。
2. rc.1 同样失败，升级到当前 `latest`/`next` 不能解决。
3. custom generator、fake workspace、source mirroring 与 Host-only 均被批准计划禁止。
4. 结果记录为 `blocked-official-api`。
5. Stage 1 最小骨架未实现；Stage 2 至 Stage 9 未启动；没有 plugin install、RTK install、Release 或用户数据需要业务清理。
6. 三轮持续性复核后，持久 goal 应标记为 `blocked`，不得标记 `complete`。
7. 重新评估只接受新的官方 standalone Typert/Client build 能力，或用户明确批准修订现有架构边界。

## 第六版历史 supersession 标记

- 2026-08-23 用户批准第六版并授权从 Stage 1H 开始实施；本证据仍只证明第五版 Client/Remote/Slot blocker。
- 第六版没有宣称 Stage 1C 已解决，也没有把本记录的 blocker 证据当作 Host enforcement 运行证据。
- 后续 Stage 1H 证据必须在新的执行记录中记录真实 rc.7/rc.1 scheduler、receipt、guard、lifecycle 和副作用验证。
