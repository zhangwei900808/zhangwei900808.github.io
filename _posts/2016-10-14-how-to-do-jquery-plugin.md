---
layout: post
title: 如何制作jquery插件
date: 2016-10-14 10:56
categories: jquery plugin
---

### 这里有段jquery插件的典型代码，可以参考一下：

```js
;(function($,window,document,undefined){
    //我们的代码。。
    //blah blah blah...
})(jQuery,window,document);
```

### 再详细一点的代码：

```js
;(function($, window, document,undefined) {
    //定义Beautifier的构造函数
    var Beautifier = function(ele, opt) {
        this.$element = ele,
        this.defaults = {
            'color': 'red',
            'fontSize': '12px',
            'textDecoration': 'none'
        },
        this.options = $.extend({}, this.defaults, opt)
    }
    //定义Beautifier的方法
    Beautifier.prototype = {
        beautify: function() {
            return this.$element.css({
                'color': this.options.color,
                'fontSize': this.options.fontSize,
                'textDecoration': this.options.textDecoration
            });
        }
    }
    //在插件中使用Beautifier对象
    $.fn.myPlugin = function(options) {
        //创建Beautifier的实体
        var beautifier = new Beautifier(this, options);
        //调用其方法
        return beautifier.beautify();
    }
})(jQuery, window, document);
```
参考地址：

<http://www.cnblogs.com/Wayou/p/jquery_plugin_tutorial.html>
