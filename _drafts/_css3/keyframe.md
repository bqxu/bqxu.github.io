---
layout: markdown
title: css3动画
summary: css3基础知识animation动画
permalink: css3/keyframe
---

# CSS3 动画


<style>
iframe{
border: none;
width: 100%;
height: 100px
}
</style>

<script src='./iframe.js'></script>


@keyframes 规则用于创建动画。在 @keyframes 中规定某项 CSS 样式，就能创建由当前样式逐渐改为新样式的动画效果。

Internet Explorer 10、Firefox 以及 Opera 支持 @keyframes 规则和 animation 属性。

Chrome 和 Safari 需要前缀 -webkit-。

Internet Explorer 9，以及更早的版本，不支持 @keyframe 规则或 animation 属性。

## animation

```
animation: name duration timing-function delay iteration-count direction;

默认值：	none 0 ease 0 1 normal
```

<iframe src='./demo/10'></iframe>

值 | 描述
animation-name | 规定需要绑定到选择器的 keyframe 名称。。
animation-duration | 规定完成动画所花费的时间，以秒或毫秒计。
animation-timing-function | 规定动画的速度曲线。
animation-delay | 规定在动画开始之前的延迟。
animation-iteration-count | 规定动画应该播放的次数。
animation-direction | 规定是否应该轮流反向播放动画。
