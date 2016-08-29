---
layout: markdown
title: nodejs api
summary: 常用 nodejs api
permalink: node/nodejs
---


# nodejs


* TOC
{:toc}

## path [#](https://nodejs.org/docs/latest/api/path.html)

* path.basename(p[, ext])

```
path.basename('/foo/bar/baz/asdf/quux.html')
// returns
'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html')
// returns
'quux'
```

* path.dirname(p)

```
path.dirname('/foo/bar/baz/asdf/quux')
// returns
'/foo/bar/baz/asdf'
```

* path.extname(p)

```
path.extname('index.html')
// returns
'.html'

path.extname('index.coffee.md')
// returns
'.md'

path.extname('index.')
// returns
'.'

path.extname('index')
// returns
''

path.extname('.index')
// returns
''
```

* path.format(pathObject)

```
path.format({
    root : "/",
    dir : "/home/user/dir",
    base : "file.txt",
    ext : ".txt",
    name : "file"
})
// returns
'/home/user/dir/file.txt'
```

* path.isAbsolute(path)

Posix examples:

```
path.isAbsolute('/foo/bar') // true
path.isAbsolute('/baz/..')  // true
path.isAbsolute('qux/')     // false
path.isAbsolute('.')        // false
```

Windows examples:

```
path.isAbsolute('//server')  // true
path.isAbsolute('C:/foo/..') // true
path.isAbsolute('bar\\baz')  // false
path.isAbsolute('.')         // false
```

* path.join(\[path1]\[, path2]\[, ...])

```
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
// returns
'/foo/bar/baz/asdf'

path.join('foo', {}, 'bar')
// throws exception
TypeError: Arguments to path.join must be strings
```

* path.normalize(p)

```
path.normalize('/foo/bar//baz/asdf/quux/..')
// returns
'/foo/bar/baz/asdf'
```

* path.parse(pathString)

An example on *nix:

```
path.parse('/home/user/dir/file.txt')
// returns
{
    root : "/",
    dir : "/home/user/dir",
    base : "file.txt",
    ext : ".txt",
    name : "file"
}
```

An example on Windows:

```
path.parse('C:\\path\\dir\\index.html')
// returns
{
    root : "C:\\",
    dir : "C:\\path\\dir",
    base : "index.html",
    ext : ".html",
    name : "index"
}
```

* path.relative(from, to)

```
path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb')
// returns
'..\\..\\impl\\bbb'

path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')
// returns
'../../impl/bbb'
```

* path.resolve([from ...], to)

```
path.resolve('/foo/bar', './baz')
// returns
'/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/')
// returns
'/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
// if currently in /home/myself/node, it returns
'/home/myself/node/wwwroot/static_files/gif/image.gif'
```

* path.sep

```
'foo/bar/baz'.split(path.sep)
// returns
['foo', 'bar', 'baz']
```

## url

Examples are shown for the URL 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'


href  |  The full URL that was originally parsed. Both the protocol and host are lowercased.
      |  Example: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
protocol | The request protocol, lowercased.
 | Example: 'http:'
slashes | The protocol requires slashes after the colon.
 | Example: true or false
host  |  The full lowercased host portion of the URL, including port information.
  |  Example: 'host.com:8080'
auth  |  The authentication information portion of a URL.
  |  Example  |  'user:pass'
hostname  |  Just the lowercased hostname portion of the host.
  |  Example: 'host.com'
port  |  The port number portion of the host.
  |  Example: '8080'
pathname  |  The path section of the URL, that comes after the host and before the query, including the initial slash if present. No decoding is performed.
  |  Example: '/p/a/t/h'
search  |  The 'query string' portion of the URL, including the leading question mark.
  |  Example: '?query=string'
path  |  Concatenation of pathname and search. No decoding is performed.
  |  Example: '/p/a/t/h?query=string'
query  |  Either the 'params' portion of the query string, or a querystring-parsed object.
  |  Example: 'query=string' or {'query':'string'}
hash  |  The 'fragment' portion of the URL including the pound-sign.
  |  Example: '#hash'


* url.format(urlObj)

Take a parsed URL object, and return a formatted URL string.


* url.parse(urlStr\[, parseQueryString]\[, slashesDenoteHost])

Take a URL string, and return an object.

* url.resolve(from, to)

Take a base URL, and a href URL, and resolve them as a browser would for an anchor tag. Examples:

