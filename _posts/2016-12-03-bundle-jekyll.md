---
layout: post
title: 'github-pages 未限定版本,导致 jekyll 启动不兼容'
date: 2016-12-03 20:21:00
categories: bundle jekyll
---

### 问题描述

根目录下 Gemfile 中 没有指定 github-pages 版本限制,导致在物理机安装时执行 bundle install 会安装低版本的 github-pages (39),并且其依赖 jekyll 2.4.0,最后会导致 某些依赖错误无法启动

### 解决办法

增加 github-pages 版本限制,比如 gem 'github-pages', '>= 104',这样 bundle install 后 jekyll 则会升级到 3.3,依赖也不会出现问题
参考地址：

> [github-pages 未限定版本,导致 jekyll 启动不兼容](https://github.com/mzlogin/mzlogin.github.io/issues/16)
