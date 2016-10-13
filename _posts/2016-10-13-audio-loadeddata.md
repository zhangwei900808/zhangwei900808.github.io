---
title: Html5 Audio事件loadeddata和addEventLister之间的特殊关系
layout: post
date: 2016-10-13 21:13
categories: audio loadeddata
---

#### 今天在项目中遇到一个很奇怪地问题，audio在页面上已经初始化好了，但是使用addEventListener添加loadeddata的时候进行测试，只有偶尔才进入这个事件里面，郁闷很久，找不出是什么原因，然后我分析了一下：可能是因为audio data已经在执行addEventListener之前已经加载数据了，那么添加这个事件也就没有意义了。之后我通过以下方法来验证我的观点：

#### 1、页面上去掉audio标签，然后，在js中构造一个audio Dom标签，然后给这个标签监听loadeddata事件，最后就是在Chrome上debug，通过测试发现，每次都进入这个事件了，因此，正如我上面分析的，一定要在数据加载之前监听这个事件，否则就没有意义！！！

![](http://cdn.awbeci.com/images/awbeci-xyz/blog/2.png)

> 参考：

> <http://acplayer.awbeci.xyz>

> <https://github.com/zhangwei900808/AcPlayer>
