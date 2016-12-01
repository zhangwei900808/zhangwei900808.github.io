---
layout: post
title: transition结合transform制作出3D效果
date: 2016-12-01 11:20
categories: css3
---

今天看到看到网上一个[博客](http://imhaoran.wang/)，上面有个功能特别吸引我，就是点击链接会展开一个侧边栏，而那个侧边栏有动画效果，当然你也可以通过jquery来做，不过有CSS3不用jquery也可以。

下面这段代码你们可以试试：

```js
    transform: translate3d(300px,0,0);
    transition: all .2s ease-in;
```


## CSS3中Transform,Transition,Animation的区别

### Transform：对元素进行变形；

### Transition：对元素某个属性或多个属性的变化，进行控制（时间等），类似flash的补间动画。但只有两个关键贞。开始，结束。

### Animation：对元素某个属性或多个属性的变化，进行控制（时间等），类似flash的补间动画。可以设置多个关键贞。

### Transition与Animation:

> transition需要触发一个事件 ,而animation在不需要触发任何事件的情况下也可以显式的随着时间变化来改变元素css的属性值，从而达到一种动画的效果。

参考：
1. <http://www.w3cplus.com/css3/css3-3d-transform.html>
