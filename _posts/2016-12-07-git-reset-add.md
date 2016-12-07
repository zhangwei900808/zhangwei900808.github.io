---
layout: post
title: 解决Git 删除已经 add 的文件
date: 2016-12-07 15:15
categories: git
---

用版本库内容清空暂存区

如果一个文件已经add到暂存区，还没有 commit，此时如果不想要这个文件了，有两种方法：

1. 用版本库内容清空暂存区

```
git reset HEAD
```

2. 只把特定文件从暂存区删除

```
git rm --cached xxx
```

参考：

> [git 删除已经 add 的文件](http://blog.csdn.net/yang3wei/article/details/9399723)
