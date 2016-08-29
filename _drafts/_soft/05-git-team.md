---
layout: markdown
title: git 团队使用攻略
summary: git 团队使用攻略
permalink: soft/git
---

# git 版本管理 [bqxu](http://github.com/bqxu)

* TOC
{:toc}

## 开始一个新的项目


  方案一、  ```git clone https://github.com/syngentech/van.git```
  在 当前目录  /Users/xxx/project 的 下面 新建一个 van 文件夹
  然后 我们
  cd van 开始编码;

  方案二、 ```git remote add origin https://github.com/syngentech/van.git```
  在 当前目录  /Users/xxx/project 的 下面 新建一个 van 文件夹

## git branch
查看分支

### git branch -a
加上-a参数可以查看远程分支，远程分支会用红色表示出来（如果你开了颜色支持的话）

## git fetch

### git fetch -p
删除不存在对应远程分支的本地分支

## git push

### git push origin --delete <branchName>
删除远程分支

### git push origin --delete tag <tagname>
删除tag

### get rest --hard HEAD^
重置本地
