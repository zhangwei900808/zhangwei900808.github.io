---
layout: post
title: eslint和editorconfig教程
date: 2017-01-10 11:20
categories: eslint editorconfig
---

# EditorConfig

EditorConfig是一套用于统一代码格式的解决方案，很多项目都有用到，比如Bootstrap、jQuery、Underscore和Ruby等等。官方网站说的很简明，为了方便大家快速上手，我做了简单的翻译。

## EditorConfig是什么？

EditorConfig可以帮助开发者在不同的编辑器和IDE之间定义和维护一致的代码风格。EditorConfig包含一个用于定义代码格式的文件和一批编辑器插件，这些插件可以让编辑器读取配置文件并依此格式化代码。EditorConfig的配置文件十分易读，并且可以很好的在VCS（Version Control System）下工作。

# ESLint

ESLint 是在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具，它的目标是保证代码的一致性和避免错误。在许多方面，它和 JSLint、JSHint 相似，除了少数的例外：

```
ESLint 使用 Espree 解析 JavaScript。
ESLint 使用 AST 去分析代码中的模式
ESLint 是完全插件化的。每一个规则都是一个插件并且你可以在运行时添加更多的规则。
```

> [EditorConfig介绍](http://www.alloyteam.com/2014/12/editor-config/)

> [EditorConfig官网](http://editorconfig.org/)

> [详解 ESLint 规则，规范你的代码](http://blog.guowenfh.com/2016/08/07/ESLint-Rules/)

> [enforce the consistent use of either backticks, double, or single quotes (quotes)](http://eslint.org/docs/rules/quotes)

> [EditorConfig 介绍](http://www.jianshu.com/p/712cea0ef70e)
