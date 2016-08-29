---
layout: blog
title: css3 background 新特性实践
---

# background


* TOC
{:toc}

## 属性

### background-repeat

设置是否及如何重复背景图像。默认地，背景图像在水平和垂直方向上重复。

#### 可能的值

值 | 描述
repeat  |	默认。背景图像将在垂直方向和水平方向重复。
repeat-x  |	背景图像将在水平方向重复。
repeat-y  |	背景图像将在垂直方向重复。
no-repeat |	背景图像将仅显示一次。
inherit |	规定应该从父元素继承 background-repeat 属性的设置。

### background-image

会在元素的背景中设置一个图像。

根据 background-repeat 属性的值，图像可以无限平铺、沿着某个轴（x 轴或 y 轴）平铺，或者根本不平铺。

### background-position

设置背景图像的起始位置。

设置背景原图像（由 background-image 定义）的位置，背景图像如果要重复，将从这一点开始。


可能的值
值	描述
top left
top center
top right
center left
center center
center right
bottom left
bottom center
bottom right
如果您仅规定了一个关键词，那么第二个值将是"center"。
默认值：0% 0%。
x% y%
第一个值是水平位置，第二个值是垂直位置。
左上角是 0% 0%。右下角是 100% 100%。
如果您仅规定了一个值，另一个值将是 50%。
xpos ypos
第一个值是水平位置，第二个值是垂直位置。
左上角是 0 0。单位是像素 (0px 0px) 或任何其他的 CSS 单位。
如果您仅规定了一个值，另一个值将是50%。
您可以混合使用 % 和 position 值。

## css3 新增

### background-size

规定背景图片的尺寸。

在 CSS3 之前，背景图片的尺寸是由图片的实际尺寸决定的。在 CSS3 中，可以规定背景图片的尺寸，这就允许我们在不同的环境中重复使用背景图片。
您能够以像素或百分比规定尺寸。如果以百分比规定尺寸，那么尺寸相对于父元素的宽度和高度

```style
div{
background:url(bg_flower.gif);
-moz-background-size:63px 100px; /* 老版本的 Firefox */
background-size:63px 100px;
background-repeat:no-repeat;
}
```

### background-origin

规定背景图片的定位区域。

背景图片可以放置于 content-box、padding-box 或 border-box 区域。


