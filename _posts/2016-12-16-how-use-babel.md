---
layout: post
title: 如何使用ES6  (Babel)
date: 2016-12-16 10:00
categories: ES6 babel
---

ES6已经敲定，但并不是所有的浏览器都完全支持，详见：http://kangax.github.io/compat-table/es6/。要使用ES6，需要一个编译器例如：babel。你可以把它作为一个独立的工具使用，也可以把它放在构建中。grunt，gulp和webpack中都有可以支持babel的插件。

这是一个gulp案列，安装gulp-babel插件：

js 代码:

```
$ npm install --save-dev gulp-babel
```

在gulpfile.js中，定义一个任务build，放入src/app.js，并且编译它进入构建文件中。

js 代码:

```js
var gulp = require('gulp'),
  babel = require('gulp-babel');
gulp.task('build', function () {
  return gulp.src('src/app.js')
    .pipe(babel())
    .pipe(gulp.dest('build'));
})
```
