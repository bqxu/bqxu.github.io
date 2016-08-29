---
layout: markdown
title: github-page
summary: 搭建 gh-pages 提升你的逼格.
permalink: soft/github-page
---

# gh-pages by jekyll [bqxu](http://github.com/bqxu)
搭建一个 github 主页吧.. 提升你的逼格.

## ruby

### gem
由于国内的网络环境，导致 rubygems.org 存放在 Amazon S3 上面的资源文件间歇性连接失败，因此使用gem或bundle时常常会遇到长久无响应的情况.移除旧源，改用新源即可。

```
$ gem sources --remove https://rubygems.org/
$ gem sources -a http://ruby.taobao.org/
$ gem sources -l
*** CURRENT SOURCES ***
http://ruby.taobao.org
# 请确保只有 ruby.taobao.org
$ gem install 你想安装的gem
```

### Bundle

```
source 'http://ruby.taobao.org/'
gem 'rails', '4.0.2'
```
### Ruby 源代码镜像

使用 RVM，可以改用淘宝为下载源：

```
$ sed -i 's!cache.ruby-lang.org/pub/ruby!ruby.taobao.org/mirrors/ruby!' $rvm_path/config/db
```


## jekyll[#](http://jekyllrb.com/)

官网地址:[http://jekyllrb.com/](http://jekyllrb.com/)
中文地址:[http://jekyll.bootcss.com/](http://jekyll.bootcss.com/)
中文译文地址:[http://jekyll.bootcss.com/](http://jekyll.bootcss.com/)
tips:目前看来. 中文译文地址 比 中文地址更新更快哦..

## gh-pages[#](pages.github.com)





