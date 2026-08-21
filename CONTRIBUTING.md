# Contributing

## 开发环境

1. 安装 Node.js 20.19 或更高版本。
2. 使用 Corepack 或官方 pnpm 安装 pnpm 11.22.0。
3. 执行 `pnpm install --frozen-lockfile`。
4. 修改前阅读 `docs/工程规范.md` 和对应 Owner 文档。

## 质量门禁

提交前必须执行：

```sh
pnpm run check
pnpm pack --dry-run
```

所有手工维护文件最多 400 个物理行。生产函数最多 60 行、圈复杂度最多 10、嵌套最多 4 层、参数最多 5 个。禁止循环依赖和跨 Owner 深路径导入。

## 注释

维护型源码使用中文文件级、函数级和关键语句级注释。注释解释边界、失败语义和设计原因，不逐句翻译代码。

## 提交

- 使用清晰的中文主题和正文。
- 正文说明行为、验证和兼容性边界。
- 精确暂存当前任务文件。
- 禁止提交 RTK binary、数据库、coverage、截图、构建目录或本机路径。
- 禁止 force push。

## Pull Request

PR 必须说明：

- 修改的唯一 Owner。
- 用户可观察行为。
- 已运行的命令和结果。
- 未覆盖的风险。
- 是否影响 Release 更新、数据格式、权限或清理边界。
