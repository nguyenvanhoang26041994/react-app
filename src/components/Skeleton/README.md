# Skeleton

Provide a placeholder while you wait for content to load, or to visualise content that doesn't exist yet.

Common shape:
- `rect` - rectangle | rectangle square
- `circle`
- `p` - paragraph
# API
| Props | Description | Type | Default | Semantic Prop |
|-|-|-|-|-|
| `rect` | If true, `Skeleton` have `rectangle` or `squares` depend on your width | `boolean` | | `shape` |
| `circle` | If true, `Skeleton` have circle shape | `boolean` | | `shape` |
| `p` | If true, `Skeleton` look like paragraph depend on your height | `boolean` | | `shape` |
| `shape` | `rect` or `circle` or `p` | `string` | | |
| `w` | `width` of `Skeleton` | `string` | | |
| `h` | `height` of `Skeleton` | `string` | | |
| `size` | Change Skeleton Size small to large, can be any valid `font-size` css | `string`| | |
| `style` | Inline style | `object` |||
| `...otherProps` | | | | |
