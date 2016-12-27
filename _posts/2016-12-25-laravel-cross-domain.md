---
layout: post
title: Laravel中间件解决Ajax跨域问题
date: 2016-12-25 16:25
categories: laravel middleware controller
---

今天在学习沈逸老师的vuejs视频教程的时候出现一个问题，就是通过ajax访问laravel服务器的时候跨域的问题，网上已经有人遇到过类似的问题，所以解决起来也没什么遇到大的困难，反而让我弄清了middleware的工作原理，下面我就讲下我是如何解决的：

## 1、通过artisan添加middleware

```
php artisan make:middleware CrossDomain
```

## 2、在CrossDomain中添加handle方法

```
<?php

namespace App\Http\Middleware;

use Closure;

/**
 * 跨域中间件
 * Class CrossDomain
 * @package App\Http\Middleware
 */
class CrossDomain
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);
        $response->header('Access-Control-Allow-Origin', "*");
        $response->header('Access-Control-Allow-Headers', 'Origin, Content-Type, Cookie, Accept');
        $response->header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, OPTIONS');
        return $response;
    }
}
```

## 3、在/app/Http/Kernel.php中注册CrossDomain中间件

```
protected $routeMiddleware = [
        'auth' => \App\Http\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
        'vue' => \App\Http\Middleware\CrossDomain::class,
    ];
```

## 4、添加完成中就是在路由中使用CrossDomain中间件`/vue`

```
Route::group(['middleware' => 'vue'], function(){
    Route::get('/vue', 'VueController@test');
});
```

## 或者你也可以添加前缀的方法来适应不同的路由方法，`/vue/test`

```
Route::group(['prefix' => 'vue','middleware' => 'vue'], function(){
    Route::get('/test', 'VueController@test');
});
```

## 5、返回的json数据所使用的VueController代码：

```
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class VueController extends Controller
{

    public function test()
    {
        $arr = ["test1"=>"1","test2"=>"2ddd"];
        return $arr;
    }
```

## 6、最后vuejs实现的请求方法代码：

```
import Vue from "vue";

import userlogin from "../components/login/user-login.vue";
import usernews from "../components/login/user-news.vue";
import usernav from "../components/login/user-nav.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

Vue.use(VueRouter);
Vue.use(VueResource);

const router =new VueRouter({
  routes:[
    {
      path:'/news',component:usernews
    },
    {
      path:'/login',component:userlogin
    }
  ]
})

Vue.component('user-nav',usernav);

let myvue = new Vue({
  el:'#root',
  router:router,
  mounted(){
    //vue ajax
    this.$http.get('http://www.awbeci.app/vue').then(function(res){
      alert(res.body.test1)
    },function(res){

    })
  }
})

```

**注意：**
我后台的代码如果写成这样：

```
exit(json_encode($a));
```

**就会报错：**

```
XMLHttpRequest cannot load http://www.awbeci.app/vue/102. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8080' is therefore not allowed access.
```

**只要改成这样就OK了：**

```
return $a;
```

**路由代码：**

```
Route::group(['middleware' => 'vue'], function(){
    Route::resource('vue', 'VueController');
});
```

**laravel代码：**

```
class VueController extends Controller
{
    public function index()
    {
        $arr = ["test1"=>"1","test2"=>"2ddd"];
        return $arr;
    }

    public function show($id)
    {
        $arr = [
            [
                "newsid"=>102,
                "pubtime"=>"2016-10-2",
                "title"=>'新闻2',
                "desc"=>'描述2'
            ],[
                "newsid"=>101,
                "pubtime"=>"2016-10-1",
                "title"=>'新闻1',
                "desc"=>'描述1'
            ],[
                "newsid"=>103,
                "pubtime"=>"2016-10-3",
                "title"=>'新闻3',
                "desc"=>'描述3'
            ],[
                "newsid"=>104,
                "pubtime"=>"2016-10-4",
                "title"=>'新闻4',
                "desc"=>'描述4'
            ]
        ];
        foreach ($arr as $a){
            if($a["newsid"]==$id){
                return $a;
            }
        }
    }
```

总结：

1. 我在做第4步的时候卡壳了，因为我压根不知道如何结合middleware和controller，所以在网上找相关的代码参考下

2. 中间件通过创建=>注册=>使用，是非常方便的，如以后项目中通过中间件可以很好的解决判断用户权限之类的校验问题，根据判断的结果跳转到不同的路由上面

3. Laravel Controller返回的数组就是Json格式

参考：

> [dive-a-little-deep-into-laravel-5](https://www.laravist.com/series/dive-a-little-deep-into-laravel-5/episodes/3)

> [Laravel-5-1-enable-CORS](http://en.vedovelli.com.br/2015/web-development/Laravel-5-1-enable-CORS/)

> [Laravel学习笔记之Route,Middleware和Controller参数传递](https://segmentfault.com/a/1190000007227276)

> [Laravel 学习笔记——路由（中间件与路由组）](https://my.oschina.net/u/2444569/blog/511706)
