---
layout: blog
title: 前端各大框架，浏览器支持
tags: 日常 前端
---

#  前端各大框架，浏览器支持

* TOC
{:toc}

## angularJs

the latest versions of Chrome, Firefox, Safari, and Safari for iOs, as well as Internet Explorer versions 9-11.

* AngularJS 1.3 has dropped support for IE8

* AngularJS 1.2 will continue to support IE8

* the core team does not plan to spend time addressing issues specific to IE8 or earlier.

###  for IE

>     To ensure your Angular application works on IE please consider:
    Use ng-style tags instead of style="{{ someCss }}". The latter works in Chrome and Firefox but does not work in Internet Explorer <= 11 (the most recent version at time of writing).
    For the type attribute of buttons, use ng-attr-type tags instead of type="{{ someExpression }}". If using the latter, Internet Explorer overwrites the expression with type="submit" before Angular has a chance to interpolate it.
    For the value attribute of progress, use ng-attr-value tags instead of value="{{ someExpression}}". If using the latter, Internet Explorer overwrites the expression with value="0" before Angular has a chance to interpolate it.
    For the placeholder attribute of textarea, use ng-attr-placeholder tags instead of placeholder="{{ someExpression }}". If using the latter, Internet Explorer will error on accessing the nodeValue on a parentless TextNode in Internet Explorer 10 & 11 (see issue 5025).

*  使用 ng-style 代替 style="{{ someCss }}" 。
*  对于 type 属性 ，使用 ng-attr-type 而不是 type="{{ someExpression }}" 。
*  对于 value 属性，使用 ng-attr-value 而不是 value="{{ someExpression}}" 。
*  对于 textarea 的 placeholder 属性 ，使用 ng-attr-placeholder 而不是 placeholder="{{ someExpression }}" 。


## bootStrap

坚决支持这些浏览器的最新版本，在 Windows 平台 Internet Explorer 8-11

OS  | Chrome  | Firefox  | Internet Explorer  | Opera  | Safari
Android	  | 支持  | 支持  | N/A  | 不支持  | N/A
iOS  | 支持  | N/A	  | 不支持	  | 支持
Mac OS X  | 	 支持	  |  支持	  |  支持	  |  支持
Windows	  |  支持	  |  支持	  |  支持	  |  支持	  |  不支持

### Internet Explorer 8 和 9

Internet Explorer 8 需要 [Respond.js](https://github.com/scottjehl/Respond) 配合才能实现对媒体查询（media query）的支持。


CSS3 特性 | Internet Explorer 8 | 	Internet Explorer 9
border-radius	 |  不支持	 |  支持
box-shadow	 |  不支持  | 	 支持
transform	 |  不支持	  | 支持，但是需要添加 -ms 前缀
transition	 |  不支持
placeholder	 |  不支持

### Internet Explorer 8 与 Respond.js

* Respond.js 与 跨域（cross-domain） CSS 的问题: 如果 Respond.js 和 CSS 文件被放在不同的域名或子域名下面（例如，使用CDN）时需要一些额外的设置。
* Respond.js 与 file:// 协议: 由于浏览器的安全机制，Respond.js 不能在通过 file:// 协议（打开本地HTML文件所用的协议）访问的页面上发挥正常的功能。
* Respond.js 与 @import 指令: Respond.js 不支持通过 @import

### Internet Explorer 8 与 box-sizing 属性

当 box-sizing: border-box; 与 min-width、max-width、min-height 或 max-height 一同使用时，IE8 不能完全支持 box-sizing 属相。

由于此原因，从 Bootstrap v3.0.1 版本开始，我们不再为 .container 赋予 max-width 属性。

### Internet Explorer 8 与 @font-face

### IE 兼容模式

Bootstrap 不支持 IE 古老的兼容模式。为了让 IE 浏览器运行最新的渲染模式下，建议将此 \<meta> 标签加入到你的页面中：

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

### 国产浏览器高速模式

国内浏览器厂商一般都支持兼容模式（即 IE 内核）和高速模式（即 webkit 内核），不幸的是，所有国产浏览器都是默认使用兼容模式

将下面的 \<meta> 标签加入到页面中，可以让部分国产浏览器默认采用高速模式渲染页面：

```html
<meta name="renderer" content="webkit">
```
目前只有360浏览器支持此 \<meta> 标签。


### Windows 8 中的 Internet Explorer 10

Internet Explorer 10 并没有对 屏幕的宽度 和 视口（viewport）的宽度 进行区分，这就导致 Bootstrap 中的媒体查询并不能很好的发挥作用。为了解决这个问题，你可以引入下面列出的这段 CSS 代码暂时修复此问题：

```css
@-ms-viewport       { width: device-width; }
```


然而，这样做并不能对 Windows Phone 8 Update 3 (a.k.a. GDR3) 版本之前的设备起作用，

由于这样做将导致 Windows Phone 8 设备按照桌面浏览器的方式呈现页面，而不是较窄的“手机”呈现方式，

为了解决这个问题，还需要加入以下 CSS 和 JavaScript 代码来化解此问题。

```css
@-webkit-viewport   { width: device-width; }
@-moz-viewport      { width: device-width; }
@-ms-viewport       { width: device-width; }
@-o-viewport        { width: device-width; }
@viewport           { width: device-width; }
```

```js
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}
```

### Safari 对百分比数字凑整的问题

OS X 上搭载的 v7.1 以前 Safari 和 iOS v8.0 上搭载的 Safari 浏览器的绘制引擎对于处理 .col-*-1 类所对应的很长的百分比小数存在 bug。

也就是说，如果你在一行（row）之中定义了12个单独的列（.col-*-1），你就会看到这一行比其他行要短一些。

除了升级 Safari/iOS 外，有以下几种方式来应对此问题：

* 为最后一列添加 .pull-right 类，将其暴力向右对齐

* 手动调整百分比数字，让其针对Safari表现更好（这比第一种方式更困难）

### 模态框、导航条和虚拟键盘

\<body> 元素在 iOS 和 Android 上对 overflow: hidden 的支持很有限。

结果就是，在这两种设备上的浏览器中，当你滚动屏幕超过模态框的顶部或底部时，\<body> 中的内容将开始随着滚动。

### 虚拟键盘

如果你正在使用 fixed 定位的导航条或在模态框上面使用输入框，还会遇到 iOS 在页面绘制上的 bug，

当触发虚拟键盘之后，其不会更新 fixed 定位的元素的位置。这里有几种解决方案，包括将 fixed 定位转变为 position: absolute 定位，

或者启动一个定时器手工修正组件的位置。这些没有加入 Bootstrap 中，因此，需要由你自己选择最好的解决方案并加入到你的应用中。

### 导航条上的下拉菜单

在 iOS 设备上，由于导航组件（nav）的复杂的 z-indexing 属性，.dropdown-backdrop 元素并未被使用。

因此，为了关闭导航条上的下拉菜单，必须直接点击下拉菜单上的元素（或者任何其他能够触发 iOS 上 click 事件的元素）。


### 浏览器的缩放功能

### 打印机的视口

即使在新版的浏览器上，打印功能仍然有问题。

具体来说，从 Chrome v32 版本开始，不管设置的边距（margin）是多少，打印页面时 Chrome 所用的视口（viewport）宽度都比实际的纸张此存窄很多。

这就导致 Bootstrap 激活并展示出针对超小屏幕设备的样式。请查看编号 #12078 的 Bug 详情。 我们建议的解决方案

Embrace the extra-small grid and make sure your page looks acceptable under it.

Customize the values of the @screen-* Less variables so that your printer paper is considered larger than extra-small.

Add custom media queries to change the grid size breakpoints for print media only.


### Android stock browser

#### Select menus

On \<select> elements, the Android stock browser will not display the side controls if there is a border-radius and/or border applied.


```js
<script>
$(function () {
  var nua = navigator.userAgent
  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
  if (isAndroid) {
    $('select.form-control').removeClass('form-control').css('width', '100%')
  }
})
</script>
```

#### Validators


## vueJs

### 支持所有兼容 ECMAScript 5 的浏览器。

### 不支持 IE8

Vue.js 不支持 IE8 及其以下版本，因为 Vue.js 使用了 IE8 不能实现的 ECMAScript 5 特性。


## jquery

### Desktop

Chrome: (Current - 1) and Current

Edge: (Current - 1) and Current

Firefox: (Current - 1) and Current

Internet Explorer: 9+

Safari: (Current - 1) and Current

Opera: Current

### Mobile

Stock browser on Android 4.0+

Safari on iOS 7+


### Internet Explorer 6-8, Opera 12.1x or Safari 5.1+

If you need to support older browsers like Internet Explorer 6-8, Opera 12.1x or Safari 5.1+, use jQuery 1.12.

## D3.js

### 浏览器支持

D3支持的主流浏览器不包括IE8及以前的版本。

D3测试了Firefox、Chrome、Safari、Opera和IE9。

D3的大部分组件可以在旧的浏览器运行。

D3核心库的最低运行要求：支持JavaScript和W3C DOM API。

#### 对于IE8

建议使用兼容性库Aight库。D3采用的是Selectors API的第一级标准，你要是考虑兼容性可以预加载Sizzle库。

你得使用主流的浏览器以便可以支持SVG和CSS3的转场特效。D3不是一个兼容的层，所以并不是所有的浏览器都支持这些标准。
