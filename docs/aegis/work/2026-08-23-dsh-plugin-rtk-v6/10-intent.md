# 第六版执行意图

## 用户目标

用户已于 2026-08-23 批准第六版候选，要求提交、推送并开始阶段性编码，持续执行到可达任务完成；问题使用 Context7 或联网检索确认。

## 当前目标

先提交并推送五份第六版权威文档和第五版历史 supersession 标记，再从 Stage 1H 实现 DSH rc.7/rc.1 Host enforcement。Stage 1C Client/Remote/Slot blocker 保持独立，不以 workaround 或 Host-only 正式发布规避。

## 成功证据

- 五份权威文档状态改为第六版已批准。
- 第五版 work record 只追加历史 supersession 标记，不改写 blocker 事实。
- 文档提交使用详细中文主题/正文，推送 origin/main，local/remote SHA 一致并有 CI 结果。
- Stage 1H 真实 rc.7/rc.1 probe 证明 exact bash/pwsh identity/schema、pre-execute waterfall、optional approval、terminal guard、registry-issued token、receipt 生命周期、draining/quiescence 和 raw side-effect absence。
- 每个阶段独立验证、提交、推送、SHA/CI 对账。

## 非目标与硬边界

- 不恢复 custom generator、假 workspace、源码/协议镜像、手写 codec、private import 或旧 executor replacement。
- 不修改 DSH/RTK 源码、全局 PATH/profile、用户数据或既有全局 RTK 安装。
- 不把 Host enforcement 误报为完整 GUI 发布；Stage 1C 仍阻断阶段 6-9 和正式 Release。

## TDD Route

Mode `off`；Decision `skipped`。实现使用最小测试后 focused regression 与阶段门禁，不执行 strict TDD 术语流程。

## 基线

- Root：`E:\Projects\test\dsh-plugin-rtk`
- Branch：`main`
- Baseline SHA：`ee026a8fc80ba4f498c8fe3fa03fe6f41b3b6c80`
- Upstream divergence：`0/0`
- Required docs：开发计划、架构与运行时、数据与界面、工程规范、实施与验收
- Compatibility：DSH `0.1.0-rc.7`、`0.1.1-rc.1`；RTK candidate contract evidence required

## 风险与停止条件

若公开 API、目标版本 scheduler、Tool identity/token、guard terminality 或 pipeline quiescence 无法由真实 rc.7/rc.1 证明，Stage 1H 立即记录 blocker 并停止后续依赖阶段。
