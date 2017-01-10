---
layout: post
title: Atom编辑器配置
date: 2017-01-10 09:30
categories: atom
---

Atom 是 Github 专门为程序员推出的一个跨平台文本编辑器。具有简洁和直观的图形用户界面，并有很多有趣的特点：支持CSS，HTML，JavaScript等网页编程语言。它支持宏，自动完成分屏功能，集成了文件管理器。
本文将通过简单实用的方法来带你学习 Atom 编译器的使用。

## 常用的插件

1. emmet: 提高开发效率
2. atom-ternjs: JS代码智能提示补全
3. file-icons: 文件图标
4. linter-jscs: jscs验证插件

### linter-jscs的配置:

1. 打开设置【win:ctrl+,】【mac:commond+,】 2.点击packages,里面就是已经安装好的插件

插件自带按jscs格式化的功能,保存的时候自动格式化,非常方便.如果团队没有自己的代码规范的话插件默认自带了一些规范可供选择其中有airbnb、google、jquery、grunt等代码规范可选。
如果配置了自己的jscs配置文件，Preset需要设置为none,不然需要保存两次才格式化当前文件。

**注意：3.4.8版本的linter-jscs插件没有none选项但是可以自己修改，插件会保存在用户目录的.atom目录的packages目录里面，找到linter-jscs/src/linter-jscs.js文件在代码的19行添加一个<none>选项重启Atom即可**

1. docblockr: 快速写注释文档的插件，支持的语言很多 前端涉及的TypeScript CoffeeScript ActionScript Javascript Haxe等语言都支持
2. minimap:小地图

## 打开设置快捷键

【win:ctrl+,】【mac:commond+,】
装完插件之后我的Atom有379个快捷键，要记这么多快捷键肯定很麻烦。可以通过设置的Keybindings里面查找。

## 设置编辑器tab键4个空格
可以在config.cson（file-> Open Your Config）里面配置

```
"*":
    editor:
        tabLength: 4
```

也可以直接在设置用配置也可以在settings里面的Editor Settings里面的Tab Length设置

## jscs验证错误

这个错误是换行是LF还是CRLF
notepad++中打开这个地方可以看到

在Atom中它在编辑器的右下角

点击CRLF/LF即可切换。换成JSCS配置的就可以了


## 分屏默认快捷键
ctrl+k up ctrl+k down ctrl+k left ctrl+k right
Atom支持组合按键，分屏快捷键的按键方法是同时按ctrl+k然后松手再按up/down/left/right
关闭分屏的快捷键ctrl+k ctrl+w(应该知道怎么玩了吧)

## 搜索
ctrl+shift+f搜索
按Esc关闭搜索框

## Ignored Names配置
打开setting:【win:ctrl+,】【mac:commond+,】
找到Ignored Names，格式是.svn, fis3, dev, .node_temp
.svn 不仅仅会过滤掉所有的.svn目录。
如果希望在左边的文件列表里也隐藏这些文件夹可以操作下面的步骤： 在settings里面找到packages，搜索tree-view,点击settings

勾选Hide Ignored Names，在文件列表里面就消失了

## 几个有用的链接

1. Atom 编辑器使用者手册
2. Atom官方网站
3. Atom github地址

> [Atom编辑器配置](http://imweb.io/topic/56c12f7e5c49f9d377ed8f1e?utm_source=tuicool&utm_medium=referral)
