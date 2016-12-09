---
layout: post
title: 对比jekyll 和 bundle exec jekyll
date: 2016-12-09 14:00
categories: bundle jekyll
---

```
➜  zhangwei900808.github.io git:(master) ✗ jekyll --version
/usr/local/Cellar/ruby/2.3.1_2/lib/ruby/2.3.0/rubygems/core_ext/kernel_require.rb:55:in `require': cannot load such file -- bundler (LoadError)
    from /usr/local/Cellar/ruby/2.3.1_2/lib/ruby/2.3.0/rubygems/core_ext/kernel_require.rb:55:in `require'
    from /usr/local/lib/ruby/gems/2.3.0/gems/jekyll-3.3.1/lib/jekyll/plugin_manager.rb:34:in `require_from_bundler'
    from /usr/local/lib/ruby/gems/2.3.0/gems/jekyll-3.3.1/exe/jekyll:9:in `<top (required)>'
    from /usr/local/bin/jekyll:23:in `load'
    from /usr/local/bin/jekyll:23:in `<main>'
```

**参考**

> [Bundler's Purpose and Rationale](http://bundler.io/rationale.html)

> [jekyll vs bundle exec jekyll](https://github.com/jekyll/jekyll-help/issues/225)

> [利用GitHub Pages建立项目或个人网站](https://github.com/uolcano/blog/issues/11)
