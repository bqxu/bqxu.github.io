---
layout: blog
title: charts 源码 commonjs 打包方式
tags: 日常 echarts
---

# charts 源码 commonjs 打包方式

# 背景

项目需要修改echarts2.0源码进行定制。修改后的代码，打包成commonjs的包

# 过程

## 阶段一

echarts 最新版本已到3.x 版本，

2.0 源码的打包方式，只支持amd打包，用的 echarts-optimizer

3.0 可以使用webpack打包，试过用3.0的方式，打包2.0:

首先，amd2common.js 将 amd 的源码转成 commonjs 的lib

在用webpack 打包的时候，问题出现了，内部变量未定义，出错了。。。

所以， 没有继续使用 webpack 的方式 去 打commonjs 的包

## 阶段二

找amd 转 commonjs 的工具，require2commonjs , 在 concat 成一个，时间问题未进行。。。。

## 阶段三

一个星期以后的今天

参看 [http://ecomfe.github.io/echarts-builder-web/](http://ecomfe.github.io/echarts-builder-web/) 的源码 [https://github.com/ecomfe/echarts-builder-web](https://github.com/ecomfe/echarts-builder-web)

一种新的思路，在浏览器中进行require，在build

so 现在的结果 [https://github.com/imethod/echarts](https://github.com/imethod/echarts)

### 具体使用方法

* ``` browser-sync start --config bs-config.js ``` 启动

* 访问 ``` http://localhost:3000/builder-web ```  进行选择，在build


### 总结

一种新的思路，amd 的 项目，打包成 commonjs 的包

