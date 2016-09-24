---
layout: blog-no-push
title: vueJs 2.0-rc 版本相对 vueJs 1.x 升级部分
tags: 日常
---

# vueJs 2.0-rc 版本相对 vueJs 1.x 升级部分

* TOC
{:toc}

>     背景: 之前用过一段时间的 vuejs 的 1.x 版本，vuejs 2.0-rc 也发布一段时间了。
    阅读[http://rc.vuejs.org/guide/migration.html](http://rc.vuejs.org/guide/migration.html)
    整理一下

## Every component must have exactly one root element

每个组件必需要有跟节点

* deprecated

```html
<p>foo</p>
<p>bar</p>
```

* recommended

```html
<div>
  <p>foo</p>
  <p>bar</p>
</div>
```

## Lifecycle-Hooks

### 'beforeCompile' deprecated

Use the 'created' hook instead.



### 'compiled' deprecated

Use the 'mounted' hook instead.



### 'attached' deprecated

Use the 'mounted' hook instead.

* deprecated

```js
attached: function () {
  doSomething()
}
```

* recommended

```js
mounted: function () {
  this.$nextTick(function () {
    doSomething()
  })
}
```

### 'detached' deprecated

* deprecated

```js
detached: function () {
  doSomething()
}
```

* recommended

```js
destroyed: function () {
  this.$nextTick(function () {
    doSomething()
  })
}
```

### 'init' deprecated

Use the 'beforeCreate' hook instead.

### 'ready' deprecated

Use the 'mounted' hook instead.

## v-for

* Argument Order for Arrays (value, index)

* Argument Order for Objects (key, value)

## $index and $key deprecated

## track-by deprecated

* deprecated

```html
<div v-for="item in items" track-by="id">
```

* recommended

```html
<div v-for="item in items" v-bind:key="item.id">
```

## 'coerce'  Prop Option  deprecated

* deprecated

```js
props: {
  username: {
    type: String,
    coerce: function (value) {
      return value
        .toLowerCase()
        .replace(/\s+/, '-')
    }
  }
}
```

* recommended

```js
props: {
  username: String,
},
computed: {
  normalizedUsername: function () {
    return this.username
      .toLowerCase()
      .replace(/\s+/, '-')
  }
}
```

## 'twoWay' Prop Option  deprecated

## v-bind with .once and .sync Modifiers deprecated
