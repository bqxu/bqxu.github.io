---
layout: markdown
title: linux下配置ODBC连接MySql
summary: oracle 异构, 使用dblink 方式查询mysql数据库,unixODBC,mysqlODBC
permalink: java/mysqlodbc
private: true
---

# mysqlodbc


## 安装 unixODBC

1. 源码安装 [http://www.unixodbc.org/](http://www.unixodbc.org/)

```sh
 tar -xzf unixODBC-2.3.0.tar.gz
 cd unixODBC-2.3.0
 ./configure --prefix=/usr/local/unixODBC --includedir=/usr/include --libdir=/usr/lib -bindir=/usr/bin --sysconfdir=/etc

 make
 make install

```

2. rpm 包安装

```sh
rpm -ivh unixODBC-2.2.11-7.1.i386.rpm unixODBC-devel-2.2.11-7.1.i386.rpm
```

3. yum 安装


```sh
yum install unixODBC
yum install unixODBC-devel
```

## 安装mysql-connector-odbc

1. rpm 包下载[http://dev.mysql.com/downloads/connector/odbc/](http://dev.mysql.com/downloads/connector/odbc/)

登陆成功后,右键复制地址,在Linux 中 wget 下载

```
rpm -ivh mysql-connector-odbc-5.1.8-1.rhel5.i386.rpm --nodeps
```

## 配置 odbc.ini odbcinst.ini

### 查看配置文件路径

```sh
#查看unixODBC安装情况
odbcinst -j
#查看定义的数据源
odbcinst -q -s
```

#### 执行 odbcinst -j

```sh
odbcinst -j
unixODBC 2.2.14
DRIVERS............: /etc/odbcinst.ini
SYSTEM DATA SOURCES: /etc/odbc.ini
FILE DATA SOURCES..: /etc/ODBCDataSources
USER DATA SOURCES..: /root/.odbc.ini
SQLULEN Size.......: 8
SQLLEN Size........: 8
SQLSETPOSIROW Size.: 8
```

DRIVERS 路径 可能是 /usr/local/etc/odbcinst.ini

SYSTEM DATA SOURCES 路径 可能是 /usr/local/etc/odbc.ini

以实际情况为准





