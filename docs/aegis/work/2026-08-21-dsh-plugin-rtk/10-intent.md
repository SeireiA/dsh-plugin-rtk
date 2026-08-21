# Task Intent Draft

## 原始目标

执行阶段 0 至阶段 9，完成公开仓库、DSH RTK 插件、全量验证、GitHub Release 和受 ownership guard 约束的最终清场。阶段 0 已完成；第四版后续实现已由第五版取代。

## 当前目标

第五版已于 2026-08-21 获用户逐项批准。本 Slice 只把批准结果写回五份权威文档和 Aegis 记录，不执行实验代码退休、编码、提交或推送。

## 当前批准与停止条件

- 已批准：Agent 直接调用 RTK wrapper；三标签 UI；跨已安装历史 Release 统计；RTK `v0.44.2` 支持边界；DSH rc.7/rc.1 双端门禁；实验路径退休。
- 当前允许动作：修改 `docs` 和执行只读研究/文档校验。
- 当前禁止动作：修改非 `docs` 文件、删除实验代码、继续 Stage 1、提交、推送或创建 Release。
- 当前停止条件：第五版权威文档和 Aegis 记录一致并通过文档校验。
- 实施恢复条件：用户在本次文档交付后明确要求开始阶段 1。
- 阻断条件：rc.7 或 rc.1 无法用官方公开 API 完成 Host/Client/Remote/Slot 闭环。

## TaskStartSnapshot（历史）

- Root：`E:\Projects\test\dsh-plugin-rtk`。
- Git：任务开始时未初始化，无 HEAD、branch、upstream 或工作树 delta。
- 初始文件：仅 `docs` 下 5 份第四版计划文档。
- GitHub：任务开始时 `SeireiA/dsh-plugin-rtk` 不存在。
- 工具链：Node `v24.16.0`、pnpm `11.22.0`、Git `2.54.0.windows.1`、DSH `0.1.0-rc.7`。

以上只记录任务启动历史。当前基线和工作树见 `20-checkpoint.md`。

## Baseline Read Set

- `docs/开发计划.md`
- `docs/架构与运行时.md`
- `docs/数据与界面.md`
- `docs/工程规范.md`
- `docs/实施与验收.md`
- DSH 官方 publish、shell、tools、shellEnv、Client modules 和 API Gateway 文档。
- DSH rc.7/rc.1 package exports、类型声明和 npm dist-tags。
- RTK 官方 direct use、install、gain、discover、telemetry、Hook 和 Release/API 资料。

## Baseline Usage

- Required refs：第五版五份权威文档全部必读。
- Acknowledged refs：用户已完成全部范围决策。
- Missing evidence：阶段 1 尚未在 rc.7/rc.1 实测官方外部 Typert 和 Client loader 闭环。
- Decision：docs-ready；implementation-waits-explicit-start。

## Impact Statement

第五版删除透明 rewrite、executor replacement、未命中标签页和复杂 Typert workaround；保留完整 GUI、全公开 Release 目录和跨已安装历史 Release 统计。RTK `>=0.44.2` 为保证兼容范围，更旧版本尽力兼容。DSH 最低 rc.7，同时验证 rc.1；双端门禁失败则暂停整个项目，不发布 Host-only 版本。

## Execution Readiness View

- Intent lock：第五版已批准。
- Scope fence：当前 Slice 仅 `docs`；阶段 1 尚未启动。
- Baseline lock：阶段 0 SHA `a47830e09f61ce57217a8a797c9b90b2768cfb45`。
- TDD Route：Mode `off`，Decision `skipped`。
- Approved behavior：wrapper、三标签、跨版本 gain、全 Release、`v0.44.2` 支持边界。
- Compatibility：DSH rc.7 最低，rc.1 同时验证。
- Retirement：旧实验路径 delete-first，但本 Slice 不执行。
- Stop gate：官方 Client/Remote/Slot 任一版本失败则暂停整个项目。
- Git owner：仅协调者执行 Git mutation；当前 Slice 禁止 Git mutation。
- Cleanup authority：只删除 ownership guard 证明的任务状态。

## 当前 Slice Card

- Goal：把第五版批准结果写回文档。
- Files：五份权威文档和三份 Aegis work record。
- Boundary：不修改代码、构建配置、DSH/RTK、Profile、Git 历史或远端。
- Verification：Prettier、`git diff --check`、400 行门禁、审批/兼容术语扫描和变更路径检查。
- Stop：文档验证通过后交付用户，不自动恢复 Stage 1。
