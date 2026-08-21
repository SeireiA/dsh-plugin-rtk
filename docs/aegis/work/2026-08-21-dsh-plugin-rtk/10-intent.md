# Task Intent Draft

## 原始目标

执行阶段 0 至阶段 9，完成公开仓库、DSH RTK 插件、全量验证、GitHub Release 和 ownership guard 清场。阶段 0 与第五版文档基线已完成。

## 当前目标

用户已明确要求清理旧本地变更并持续执行第五版。Stage 1 启动后已完成实验路径退休，但 rc.7/rc.1 官方双端闭环命中 `blocked-official-api`。当前 Slice 只固化阻断证据、清理研究状态、提交并推送证据；不得进入阶段 2。

## 当前批准与停止条件

- 已批准产品范围：直接 RTK wrapper、三标签 UI、跨已安装 Release gain、全公开 Release、RTK `v0.44.2` 支持边界。
- 已批准兼容范围：DSH rc.7 最低，rc.1 同时验证，完整 GUI 必须交付。
- 已执行退休：12 个 tracked delta 恢复、15 个 untracked 旧实验文件删除。
- 当前停止条件：官方 Typert/Client build 前置 artifact 无法为 standalone 根 package 生成。
- 当前禁止动作：自制 generator wrapper、假 workspace、协议/源码镜像、手写 codec、private import、Host-only 降级或启动阶段 2 至阶段 9。
- 重新评估条件：DSH 上游发布适用于 standalone 根 package 的官方 Typert 与 Client builder，或用户明确批准改变拓扑/禁止边界。

## Stage 1 TaskStartSnapshot

- Root：`E:\Projects\test\dsh-plugin-rtk`。
- Branch：`main`；upstream：`origin/main`；divergence：`0/0`。
- HEAD / remote：`d06c5a1dcc85adac2330507b52085b14bfb5ed2e`。
- Git operation：无；其他 worktree：无。
- Tracked delta：12 个，均属于第四版 Stage 1 实验。
- Untracked：15 个文件，均属于 Typert projection、executor replacement、Client 和专用测试实验。
- Retirement：精确 `git restore` 与精确文件删除；未使用 `reset --hard`、`git clean`、stash 或反向提交。
- Retirement receipt：清理后 `git status --porcelain=v2` 只有 branch header，本地/远端 SHA 一致。

## Baseline Read Set

- 第五版五份权威文档与本 work record。
- DSH `dsh-v0.1.0-rc.7`、`dsh-v0.1.1-rc.1` tagged publish、API Gateway、Client modules、Typert generator docs/source/tests。
- 两版本 npm package exports、类型声明、dist-tags 和 tarball。
- 当前 rc.7 Inspect Provider 的 Client services 与 `shell.overlay` contract。

## Baseline Usage

- Required refs：全部已读取并用于 stop gate。
- Public capability：bundle install、Host Service、Remote runtime、Client loader consumption 和 Slot registration 分别存在。
- Missing capability：standalone 根 package 的官方 Typert artifact build integration，以及官方文档化、可导出的第三方 lazy-CJS Client build path。
- Decision：`blocked-official-api`，whole-project-pause。

## Impact Statement

旧复杂 workaround 已完全退出工作树。没有添加替代 generator、兼容层或 Host-only 分支。产品范围未漂移，但实现无法跨越强制 Client/Remote 前置条件；因此阶段 1 最小骨架、RTK 业务和 UI 都没有进入编码。

## Execution Readiness View

- Intent lock：第五版保持不变。
- Scope fence：当前只允许阻断证据与研究状态清理。
- Baseline lock：`d06c5a1dcc85adac2330507b52085b14bfb5ed2e`。
- TDD Route：Mode `off`，Decision `skipped`。
- Compatibility：rc.7 与 rc.1 均命中相同缺口。
- Retirement：旧实验完成 delete-first，无 fallback 残留。
- Review：独立研究返回 `BLOCKED`；独立规格审查返回 `APPROVE_BLOCKER`。
- Completion：阶段 1 未完成；阶段 2 至阶段 9 未启动。

## 当前 Slice Card

- Goal：固化 Stage 1 官方 API 阻断证据并恢复无研究状态的仓库。
- Files：五份权威文档和三份 Aegis work record。
- Boundary：不新增产品代码、构建 workaround、Profile 安装或发布产物。
- Verification：Prettier、diff check、400 行、术语扫描、研究目录 ownership 清理、精确提交、push/SHA/CI。
- Stop：阻断证据提交后等待上游能力或用户批准修改计划，不自动继续阶段 2。
