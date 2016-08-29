---
title: note
layout: markdown
summary: javascript 知识点 新接触到的
permalink: javascript/note
private: true
---

# javascript 笔记

## querySelector  && querySelectorAll

querySelector只返回匹配的第一个元素，如果没有匹配项，返回null。
2、querySelectorAll返回匹配的元素集合，如果没有匹配项，返回空的nodelist(节点数组)。
3、返回的结果是静态的，之后对document结构的改变不会影响到之前取到的结果。

这两个方法都可以接受三种类型的参数：id(#)，class(.)，标签，很像jquery的选择器。

```js
var obj = document.querySelector("#id");var obj = document.querySelector(".classname");
var obj = document.querySelector("div");
var el = document.body.querySelector("style[type='text/css'], style:not([type])");
var elements = document.querySelectorAll("#score>tbody>tr>td:nth-of-type(2)");
var elements = document.querySelectorAll("#id1, #id2, .class1, class2, div a, #list li img");
```

```js
var i= document. querySelectorAll(" p"). iterator();
var e;
while( e= i. next()){
 //对 每个 选中 的 元素 进行 操作
 console. log( e);
}
```
