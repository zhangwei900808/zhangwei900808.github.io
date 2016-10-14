---
layout: post
title: 移动端绑定手机页面
date: 2016-10-14 9:35
categories: mobile
---

### 写这个博客的目的就是为了以后如果遇到相同的需求可以直播复制这段代码。

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

![]((http://cdn.awbeci.xyz/images/awbeci-xyz/blog/2016-10-14-mobile-bind-1.png))

![]((http://cdn.awbeci.xyz/images/awbeci-xyz/blog/2016-10-14-mobile-bind-2.png))

![]((http://cdn.awbeci.xyz/images/awbeci-xyz/blog/2016-10-14-mobile-bind-3.png))

