---
layout: blog
title:  css3基础知识transition过渡
tags: css css3
---

# css3 过渡


* TOC
{:toc}

<style>
iframe{
border: none;
width: 100%;
height: 100px
}
</style>

<script src='/assets/iframe.js'></script>


 过渡是元素从一种样式逐渐改变为另一种的效果。

属性  | 描述
transition  | 简写属性，用于在一个属性中设置四个过渡属性。
transition-property  | 规定应用过渡的 CSS 属性的名称。
transition-duration  | 定义过渡效果花费的时间。默认是 0。
transition-timing-function  | 规定过渡效果的时间曲线。默认是 "ease"。
transition-delay  | 规定过渡效果何时开始。默认是 0。

## transition-property

Internet Explorer 10、Firefox、Opera 和 Chrome 支持 transition-property 属性。

Safari 支持替代的 -webkit-transition-property 属性。

Internet Explorer 9 以及更早版本的浏览器不支持 transition-property 属性。

transition-property 属性规定应用过渡效果的 CSS 属性的名称。（当指定的 CSS 属性改变时，过渡效果将开始）。

过渡效果通常在用户将鼠标指针浮动到元素上时发生。

请始终设置 transition-duration 属性，否则时长为 0，就不会产生过渡效果。

<iframe src='/assets/demo/08'></iframe>

## transition-timing-function

值 | 描述
linear | 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。
ease | 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。
ease-in | 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。
ease-out | 规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。
ease-in-out | 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。
cubic-bezier(n,n,n,n) | 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。

<iframe src='/assets/demo/09'></iframe>
