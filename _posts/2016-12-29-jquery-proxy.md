---
layout: post
title: JQuery.proxy使用方法
date: 2016-12-29 16:51
categories: jquery
---

`JQuery.proxy(function,context):`
使用context代替function中的context。
比如：

```
var you = {
  type: "person",
  test: function(event) {
    $("#log").append( this.type + " " );
  }
  ```

``$("#test").click(you.test);``调用这句只有相当于调用：

```
$("#test").click(function(event){
         $("#log").append( this.type + " " );
});
```

所以这里的this指的是`$("#test").`

如果这样调用：`$("#test").click($.proxy(you.test,you));`
此时的调用相当于：

```
$("#test").click(function(event){
         $("#log").append( you.type + " " );
});
```

虽然调用事件的对象是$("#test")，但是却可以使用$.proxy把事件执行内的对象改变为you。

`JQuery.proxy(context,functionname):`

第一个参数是你想proxy的对象，第二个参数为要改变的函数的名字。

参考：

> [jquery.proxy](http://www.css88.com/jqapi-1.9/jQuery.proxy/)
