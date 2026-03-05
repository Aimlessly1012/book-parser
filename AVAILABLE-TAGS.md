# AnyNovel API 可用标签列表

从 API 获取的所有可用标签：

## 标签列表

1. **Alpha** - Alpha 角色
2. **Beta** - Beta 角色
3. **Contemporary** - 当代题材
4. **Girl Power** - 女性力量
5. **Hate to Love** - 欢喜冤家
6. **Hombre lobo** - 狼人（西班牙语）
7. **Lovers Reunion** - 旧情复燃
8. **Mafia** - 黑帮题材
9. **Regret** - 后悔/遗憾
10. **Romance** - 浪漫
11. **Urban** - 都市题材
12. **Warrior** - 战士
13. **Werewolf** - 狼人

## 使用方法

```bash
# 单标签查询
./query-ads Romance
./query-ads Werewolf
./query-ads Mafia

# 多标签组合（AND 逻辑）
./query-ads Romance Contemporary
./query-ads Alpha Warrior
```

## 注意事项

- 标签区分大小写
- 多标签是 AND 逻辑（同时满足）
- 很多书籍没有标签，可能需要其他筛选方式
- 目前没有 "Military" 或 "Navy" 标签

## 相关标签组合建议

### 军人浪漫题材
- `Warrior` - 战士（可能包含军人）
- `Alpha` - 强势角色（可能包含军人）
- `Contemporary` - 当代题材（现代军人）

### 禁忌之恋
- `Hate to Love` - 欢喜冤家
- `Regret` - 后悔/遗憾
- `Lovers Reunion` - 旧情复燃

### 霸总题材
- `Alpha` - 强势角色
- `Mafia` - 黑帮（类似霸总）
- `Urban` - 都市题材

### 狼人题材
- `Werewolf` - 狼人
- `Alpha` - Alpha 狼
- `Beta` - Beta 狼
