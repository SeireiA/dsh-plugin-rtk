# 第六版执行证据

## 文档阶段

- 基线：`ee026a8fc80ba4f498c8fe3fa03fe6f41b3b6c80`
- 审查：规格 `APPROVE_DOCS`；安全 `SAFETY_APPROVE`。
- 文档范围：五份权威 docs。
- 历史范围：第五版 work record 只追加 supersession 标记，旧 blocker 证据保持不变。
- 未执行：产品源码、Stage 1H、Profile 安装、RTK 安装、发布。

## Stage 1H 预期证据

必须使用真实 DSH rc.7/rc.1 记录 scheduler 顺序、exact shell identity/schema、DSH-issued token、receipt state、terminal guard、approval/process ordering、cancellation、draining/quiescence 和副作用 fixture。Fake rewrite executable 只能验证 gate contract，不替代真实 DSH probe。

## Stage 1C 预期证据

沿用第五版 blocker 事实；只有上游官方 standalone Typert/Client build path 或用户再次批准拓扑边界后重新评估。
