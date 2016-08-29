---
layout: markdown
title: git 版本管理
summary: record git 常用功能。
permalink: soft/git
---

# git 版本管理 [bqxu](http://github.com/bqxu)

* TOC
{:toc}

## git init
初始化一个 repository

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
