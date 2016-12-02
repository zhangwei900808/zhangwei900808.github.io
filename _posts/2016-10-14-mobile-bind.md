---
layout: post
title: 移动端绑定手机页面
date: 2016-10-14 9:35
categories: mobile
---

### 写这个博客的目的就是为了以后如果遇到相同的需求可以直播复制这段代码。
html:

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="">
<meta name="keywords" content="">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<meta name="renderer" content="webkit">
<meta http-equiv="Cache-Control" content="no-siteapp" />
<title>故事包</title>
<link rel="icon" type="image/png" href="/resources/img/md_a1.png">
<link href="//cdn.bootcss.com/weui/0.4.3/style/weui.min.css" rel="stylesheet">
<link href="//cdn.bootcss.com/jquery-weui/0.8.1/css/jquery-weui.min.css" rel="stylesheet">
<link rel="stylesheet" href="/resources/css/mobileBind.css" media="screen" title="no title">
</head>
<body>
	<header class="logo">
		<img src="/resources/img/md_logo_84X37.png">
	</header>
	<div class="weui_cells weui_cells_form">
		<div class="weui_cell">
			<div class="weui_cell_hd">
				<label class="weui_label">手机号</label>
			</div>
			<div class="weui_cell_bd weui_cell_primary">
				<input id="tel" class="weui_input" type="number" placeholder="请输入手机号">
			</div>
		</div>
		<div class="weui_cell">
			<div class="weui_cell_hd">
				<label class="weui_label">验证码</label>
			</div>
			<div class="weui_cell_bd weui_cell_primary">
				<input class="weui_input" type="number" placeholder="请输入验证码">
			</div>
			<div class="weui_cell_ft">
				<a id="getCode" href="javascript:;" class="weui_btn weui_btn_mini weui_btn_warn">获取验证码</a>
			</div>
		</div>
	</div>
	<footer>
		<a href="javascript:;" class="weui_btn weui_btn_primary">完成</a>
	</footer>
	<script src="//cdn.bootcss.com/jquery/2.2.4/jquery.min.js"></script>
	<script src="//cdn.bootcss.com/jquery-weui/0.8.1/js/jquery-weui.min.js"></script>
```

javascript:

```js
$(function() {
			$('#tel').bind('input propertychange', function() {
				var this$ = $(this);
				/*if (this$.val().trim().length == 0) {
				this$.val('');
				$.alert("手机号码有误，请重填", "提示");
				return false;
				} */
				if (this$.val().length < 11) {

				} else if (this$.val().length == 11) {
					if (!(/^1[34578]\d{9}$/.test(this$.val()))) {
						$.alert("手机号码有误，请重填", "提示");
						this$.val('');
						return false;
					}
				} else if (this$.val().length > 11) {
					$.alert("手机号码有误，请重填", "提示");
					this$.val('');
					return false;
				}
			});

			//获取验证码状态
			var state = "no-get";
			$('#getCode').on('click', function(e) {
				if (!(/^1[34578]\d{9}$/.test($('#tel').val()))) {
					$.alert("手机号码有误，请重填", "提示");
					$('#tel').val('');
					return false;
				}
				if (state == "no-get") {
					var $this = $(this);
					var time = 60;//60秒后再次获取
					var clrTime = setInterval(function() {
						var txtTime = --time;
						if (txtTime == 0) {
							clearInterval(clrTime);
							$this.text('重新获取');
							state = "no-get"
						} else {
							$this.text(txtTime + 'S后获取');
							state = "geting";
						}
					}, 1000);
				}
			})
		})

		function isNumber(val) {
			var strRegex = /^[0-9]*[1-9][0-9]*$/;
			return strRegex.test(val);
		}
```

![](http://cdn.awbeci.com/images/awbeci-xyz/blog/2016-10-14-mobile-bind-1.png)

![](http://cdn.awbeci.com/images/awbeci-xyz/blog/2016-10-14-mobile-bind-2.png)

![](http://cdn.awbeci.com/images/awbeci-xyz/blog/2016-10-14-mobile-bind-3.png)
