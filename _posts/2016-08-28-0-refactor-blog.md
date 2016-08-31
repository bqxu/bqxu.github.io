---
layout: blog
title: blog 重构
summary: 准备开始对blog 进行重构整理
---

# blog 重构

## 原因

之前的很长一段时间,我的git-page每次push 正常发布,感到很困惑。

因为用的是jekyll 搭建的,但是没有使用它本身的post ,而是一直以来,用的collection 特性
怀疑是在框架结构上出来问题。

同时对前端的样式不是很满意,so,决定对后台结构。和前端页面进行重构

后台修正成 _post 和 _drafts ,前端看到过几个顺眼的 blog,就"借鉴"一下啦,前端你懂的

## 参考样式

* 首页参考 [https://yuguo.us](https://yuguo.us) 应该是为大牛了,页面挺简洁的

* 内容页参考 [https://developer.gitbook.com/](https://developer.gitbook.com/) 这个我觉得是一个炫酷的主题,通常被用来写书,用来写blog 也不错

## 亮点 gitbook 样式

支持 更换主题,更换字体,修改字体大小


