# Task Intent Draft

## 目标

严格执行 `docs/开发计划.md` 已批准的阶段 0 至阶段 9，完成公开仓库、DSH RTK 插件、全量验证、GitHub Release 和受 ownership guard 约束的最终清场。

## 批准与停止条件

- 用户批准时间：2026-08-21。
- 当前允许动作：阶段 0 开始后的源码、工程配置、Git 初始化、GitHub 建仓和逐阶段推送。
- 最终停止条件：阶段 9 清理验证通过，插件保持未安装，并向用户交付正式包、SHA-256 和手动安装命令。
- 阻断条件：任一阶段验证失败、远端 SHA 不一致、权限/归属不明确或清理 guard 失败。

## TaskStartSnapshot

- Root：`E:\Projects\test\dsh-plugin-rtk`。
- Git：未初始化，无 HEAD、branch、upstream、staged/unstaged delta 或进行中的 Git operation。
- Worktree：不适用；项目尚无 Git repository。
- 初始文件：仅 `docs` 下 5 份已批准计划文档。
- GitHub：`SeireiA/dsh-plugin-rtk` 不存在。
- GitHub 身份：活动账号 `SeireiA`，Git protocol 为 HTTPS。
- 工具链：Node `v24.16.0`、pnpm `11.22.0`、Git `2.54.0.windows.1`、DSH `0.1.0-rc.7`。

## Baseline Read Set

- `docs/开发计划.md`
- `docs/架构与运行时.md`
- `docs/数据与界面.md`
- `docs/工程规范.md`
- `docs/实施与验收.md`
- 当前 DSH checkout 中相关 package、composition、Service、Event、Remote 和 Slot 契约，按阶段最小读取。
- 官方 RTK Release/API/CLI 行为，按候选功能最小读取。

## Baseline Usage

- Required refs：五份计划文档全部必读。
- Acknowledged refs：五份计划已读取并通过第四版一致性检查。
- Missing refs：阶段 1 之前仍需读取 DSH composition 与 plugin packaging 契约；阶段 2/3 之前仍需读取官方 RTK 当前源码与 Release 资产细节。
- Decision：阶段 0 只建立工程门禁，不提前猜测后续运行时契约。

## Impact Statement

这是高复杂度、跨 Host/Client、网络、子进程、持久化、权限、发布和清理边界的长期任务。唯一 Owner、版本化数据、强制测试、逐阶段 Git 门禁和清理归属证明都属于完成条件，不能以 UI 演示或单平台通过代替。

## Execution Readiness View

- Intent lock：present，与批准计划一致。
- Scope fence：阶段 0 至阶段 9，不修改 DSH 核心、不安装全局 RTK、不修改用户 shell。
- Baseline lock：present，初始工作区无 Git 和源码。
- TDD Route：Mode `off`，Decision `skipped`，Strict authority `not applicable`。
- Test posture：每阶段最小实现后运行针对性验证和完整阶段门禁。
- Architecture review：阶段 1、3、5、6、7、8 必须执行。
- Git owner：仅协调者执行 Git mutation；subagent 不提交、不推送。
- Cleanup authority：只删除本任务 ownership guard 证明的状态。

## 当前 Slice Card

- Goal：完成阶段 0 公共仓库与标准工程。
- Parent plan/spec：`docs/实施与验收.md` 第 2 节。
- Files：根工程配置、质量脚本、最小源码/测试、社区文档、CI 和本工作记录。
- Boundary：不实现 DSH/RTK 业务逻辑，不创建 Release。
- Verification：format、lint、lines、deps、unused、duplication、typecheck、coverage、bundle、package、三平台 CI 配置静态检查。
- Stop：阶段 0 提交已推送且本地/远端 SHA 一致。
