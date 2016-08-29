---
layout: markdown
title: express 备忘录
summary: express 是 一个nodejs http server. 本文记录了基于express开发过程中设计到的相关知识.
permalink: node/express
---

# express[4x](http://www.expressjs.com.cn/4x/api.html) 备忘录

* TOC
{:toc}

## request

* req.baseUrl

The URL path on which a router instance was mounted. For example:

```
var greet = express.Router();

greet.get('/jp', function (req, res) {
  console.log(req.baseUrl); // /greet
  res.send('Konichiwa!');
});

app.use('/greet', greet); // load the router on '/greet
```

* req.ip

The remote IP address of the request.

* req.ips

When the trust proxy setting is true, this property contains an array of IP addresses specified in the “X-Forwarded-For” request header. Otherwise, it contains an empty array.

For example, if “X-Forwarded-For” is “client, proxy1, proxy2”, req.ips would be  \["client", "proxy1", "proxy2"], where “proxy2” is the furthest downstream.

For more information on the trust proxy setting, see app.set.

* req.originalUrl

This property is much like req.url; however, it retains the original request URL, allowing you to rewrite req.url freely for internal routing purposes. For example, the “mounting” feature of app.use() will rewrite req.url to strip the mount point.


* req.subdomains

An array of subdomains in the domain name of the request.

```
// Host: "tobi.ferrets.example.com"
req.subdomains
// => ["ferrets", "tobi"]
```

* req.xhr

A Boolean value that is true if the request’s “X-Requested-With” header field is “XMLHttpRequest”, indicating that the request was issued by a client library such as jQuery.

```
req.xhr
// => true
```

