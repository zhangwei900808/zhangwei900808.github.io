---
layout: post
title: 在Windows环境中添加laravel homestead虚拟机教程
date: 2016-12-22 17:00
categories: laravel homestead
---

准备工作：

1. [安装好visual box软件](https://www.virtualbox.org/)

2. [安装好vagrant软件](https://www.vagrantup.com/downloads.html)

2. [安装好git软件](http://git-scm.com/)

### 安装命令：

```
vagrant box add laravel/homestead
```
如果上面的命令运行失败，你可以下载先下载好 [virtualbox.box](https://atlas.hashicorp.com/laravel/boxes/homestead/versions/1.0.1/providers/virtualbox.box) 然后再添加metadata.json文件(和你box在同一目录):

```
{
    "name": "laravel/homestead",
    "versions": [{
        "version": "1.0.1",   //注意替换成你的版本
        "providers": [{
            "name": "virtualbox",
            "url": "file://E://visualbox//virtualbox.box"   //注意替换成你的box的文件名
        }]
    }]
}
```

然后再执行：

```
$ vagrant box add metadata.json
$ vagrant box list
laravel/homestead               (virtualbox, 1.0.1)
```

## 删除指定版本号的box

```
vagrant box remove --box-version your-box-version your-box-name
```

后面的过程就请参考 [laravel 安装homestead文档](https://laravel.com/docs/5.3/homestead)

**注意：**

如果你在 Homestead box 配置之后更改了 sites 属性，那么应该重新运行,来更新 Nginx 配置到虚拟机上。

```
vagrant reload --provision
```

### 参考：

> [使用Homestead搭建开发环境](https://solarhell.com/post/2016/04/homestead)
