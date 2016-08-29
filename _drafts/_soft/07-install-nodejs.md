---
layout: markdown
title: 安装 nodeJs
summary:  安装 nodeJs 环境
permalink: soft/install-nodejs
---

#

## Enterprise Linux and Fedora

Run as root on RHEL, CentOS or Fedora, for Node.js v4 LTS Argon:

```bash
curl --silent --location https://rpm.nodesource.com/setup_4.x | bash -
```

Alternatively for Node.js v6:

```bash
curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
```

Alternatively for Node.js 0.10:

```bash
curl --silent --location https://rpm.nodesource.com/setup | bash -
```

Then install, as root:

```bash
yum -y install nodejs
```

Optional: install build tools

To compile and install native addons from npm you may also need to install build tools:

```bash
yum install gcc-c++ make
# or: yum groupinstall 'Development Tools'
```
