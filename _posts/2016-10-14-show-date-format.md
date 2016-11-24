---
layout: post
title: js根据秒数显示指定格式的字符串
date: 2016-10-14 11:33
categories: js 
---

#### 公司开发过程中，遇到好多公用的js，比如这个,根据秒数显示指定格式的字符串，以备日后使用。

{% highlight javascript %}
function formatSeconds(value) {
	var second = parseInt(value);// 秒
	var minute = 0;// 分
	var hour = 0;// 时
	if (second > 60) {
		minute = parseInt(second / 60);
		second = parseInt(second % 60);
		if (minute > 60) {
			hour = parseInt(minute / 60);
			minute = parseInt(minute % 60);
		}
	} else {
		if (second < 10) {
			return "00:0" + second;
		} else {
			return "00:" + second;
		}
	}

	var result;
	if (hour > 0) {
		if (second < 10) {
			second = "0" + second;
		}
		if (minute < 10) {
			minute = "0" + minute;
		}
		result = hour + " : " + minute + " : " + second;
		return result;
	}
	if (minute > 0) {
		if (second < 10) {
			second = "0" + second;
		}
		if (minute < 10) {
			minute = "0" + minute;
		}
		return result = minute + " : " + second;
	}
	if (second < 10) {
		second = "0" + second;
	}
	return second;
}
{% endhighlight %}

![](http://cdn.awbeci.com/images/awbeci-xyz/blog/2016-10-14-js-date-format.png)
