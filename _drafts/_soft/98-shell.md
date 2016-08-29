---
layout: markdown
title: shell
summary: 简单的shell 命令简介
permalink: soft/shell
---

# Shell [bqxu](http://github.com/bqxu)
    我只是文字的搬运工

本文旨在对程序员日常工作做，涉及到的shell相关知识进简单的介绍。

[TOC]

* TOC
{:toc}

## 概念
Shell就是一个命令行解释器，它的作用就是遵循一定的语法将输入的命令加以解释并传给系统。
它为用户提供了一个向Linux发送请求以便运行程序的接口系统级程序，用户可以用Shell来启动、挂起、停止甚至是编写一些程序。
Shell本身是一个用C语言编写的程序，它是用户使用Linux的桥梁。Shell既是一种命令语言，又是一种程序设计语言(就是你所说的shell脚本)。
作为命令语言，它互动式地解释和执行用户输入的命令；
作为程序设计语言，它定义了各种变量和参数，并提供了许多在高阶语言中才具有的控制结构，包括循环和分支。
它虽然不是 Linux系统内核的一部分，但它调用了系统内核的大部分功能来执行程序、创建文档并以并行的方式协调各个程序的运行。

tips:Ken Thompson的sh是第一种Unix Shell，Windows Explorer是一个典型的图形界面Shell。

### Shell 环境
Linux的Shell种类众多，常见的有：

* Bourne Shell（/usr/bin/sh或/bin/sh）
* Bourne Again Shell（/bin/bash）
* C Shell（/usr/bin/csh）
* K Shell（/usr/bin/ksh）
* Shell for Root（/sbin/sh）

由于易用和免费，Bash在日常工作中被广泛使用,也就是 Bourne Again Shell。同时，Bash也是大多数Linux系统默认的Shell。
在一般情况下，人们并不区分 Bourne Shell 和 Bourne Again Shell，所以，像 #!/bin/sh，它同样也可以改为#!/bin/bash。
#!告诉系统其后路径所指定的程序即是解释此脚本文件的Shell程序。

```
#!/bin/bash
echo "Hello World !"
```


### 脚本

#### 传递参数
我们可以在执行 Shell 脚本时，向脚本传递参数，脚本内获取参数的格式为：$n。n 代表一个数字，1 为执行脚本的第一个参数，2 为执行脚本的第二个参数，以此类推……

我们向脚本传递三个参数，并分别输出：

```
#!/bin/bash
# author:bqxu
# url:bqxu.github.io

echo "Shell 传递参数实例！";
echo "第一个参数为：$1";
echo "第二个参数为：$2";
echo "第三个参数为：$3";
```

为脚本设置可执行权限，并执行脚本，输出结果如下所示：

```
$ chmod +x test.sh
$ ./test.sh 1 2 3
Shell 传递参数实例！
第一个参数为：1
第二个参数为：2
第三个参数为：3
```

另外，还有几个特殊字符用来处理参数



参数处理 | 	说明
$# |	传递到脚本的参数个数
$* |	以一个单字符串显示所有向脚本传递的参数
$$ |	脚本运行的当前进程ID号
$! |	后台运行的最后一个进程的ID号
$@ |	与$*相同，但是使用时加引号，并在引号中返回每个参数。
$- |	显示Shell使用的当前选项，与set命令功能相同。
$? |	显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误。

```
#!/bin/bash
# author:bqxu
# url:bqxu.github.io

echo "Shell 传递参数实例！";
echo "第一个参数为：$1";

echo "参数个数为：$#";
echo "传递的参数作为一个字符串显示：$*";
```

执行脚本，输出结果如下所示：

```
$ chmod +x test.sh
$ ./test.sh 1 2 3
Shell 传递参数实例！
第一个参数为：1
参数个数为：3
传递的参数作为一个字符串显示：1 2 3
```


#### 注释
以"#"开头的行就是注释，会被解释器忽略。
sh里没有多行注释，只能每一行加一个#号。只能像这样：

```
#--------------------------------------------
# 这是一个注释
# author：bqxu
# site：bqxu.github.io
#--------------------------------------------
```



## 语法

### 变量

#### 定义变量

定义变量时，变量名不加美元符号,变量名和等号之间不能有空格，变量名的命名须遵循如下规则：

* 首个字符必须为字母（a-z，A-Z）。
* 中间不能有空格，可以使用下划线（_）。
* 不能使用标点符号。
* 不能使用bash里的关键字（可用help命令查看保留关键字）。

除了显式地直接赋值，还可以用语句给变量赋值，如：

```
for file in `ls /etc`
```
以上语句将 /etc 下目录的文件名循环出来。


#### 使用变量

使用一个定义过的变量，只要在变量名前面加美元符号即可，如：

```
i_name="bqxu"
echo $i_name
echo ${i_name}
```

变量名外面的花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界，比如下面这种情况：

```
for skill in Ada Coffe Action Java do
    echo "I am good at ${skill}Script"
done
```
推荐给所有变量加上花括号，这是个好的编程习惯。
已定义的变量，可以被重新定义，如：

```
i_name="bqxu"
echo $i_name
i_name="god"
echo $i_name
```

这样写是合法的，但注意，第二次赋值的时候不能写$your_name="alibaba"，使用变量的时候才加美元符（$）

#### 只读变量

使用 readonly 命令可以将变量定义为只读变量，只读变量的值不能被改变。

```
i_name="bqxu"
readonly i_name
```
#### 删除变量

使用 unset 命令可以删除变量。语法：

```
unset i_name
```

变量被删除后不能再次使用。unset 命令不能删除只读变量。


#### 变量类型
运行shell时，会同时存在三种变量：

* 局部变量
局部变量在脚本或命令中定义，仅在当前shell实例中有效，其他shell启动的程序不能访问局部变量。

* 环境变量
所有的程序，包括shell启动的程序，都能访问环境变量，有些程序需要环境变量来保证其正常运行。必要的时候shell脚本也可以定义环境变量。

* shell变量
shell变量是由shell程序设置的特殊变量。shell变量中有一部分是环境变量，有一部分是局部变量，这些变量保证了shell的正常运行


### Shell 字符串
字符串是shell编程中最常用最有用的数据类型.除了数字和字符串，也没啥其它类型好用了），字符串可以用单引号，也可以用双引号，也可以不用引号。

#### 单引号

```
str='this is a string'
```

单引号字符串的限制：

* 单引号里的任何字符都会原样输出，单引号字符串中的变量是无效的；
* 单引号字串中不能出现单引号（对单引号使用转义符后也不行）。

#### 双引号

```
my_name='bqxu'
str="Hello, I know your are \"$my_name\"! \n"
```

双引号的优点：

* 双引号里可以有变量
* 双引号里可以出现转义字符


#### 拼接字符串

```
my_name="bqxu"
greeting="hello, "$my_name" !"
greeting_1="hello, ${my_name} !"
echo $greeting $greeting_1
```

#### 获取字符串长度

```
str="abcd"
echo ${#str} #输出 4
```

#### 提取子字符串

```
str="hello,bqxu"
echo ${str:1:4} #输出ello
```

#### 查找子字符串

```
str="hello,bqxu"
echo `expr index "$str" ,`
```

### 数组
bash支持一维数组（不支持多维数组），并且没有限定数组的大小。
数组元素的下标由0开始编号。获取数组中的元素要利用下标，下标可以是整数或算术表达式，其值应大于或等于0。

#### 定义数组
在Shell中，用括号来表示数组，数组元素用"空格"符号分割开。定义数组的一般形式为：

```数组名=(值1 值2 ... 值n)```

例如：

```array_name=(value0 value1 value2 value3)```

或者:

```
array_name=(
value0
value1
value2
value3
)
```
还可以单独定义数组的各个分量：

```
array_name[0]=value0
array_name[1]=value1
array_name[n]=valuen
```

可以不使用连续的下标，而且下标的范围没有限制。

####  读取数组

读取数组元素值的一般格式是：

```${数组名[下标]}```

```valuen=${array_name[n]}```

使用@符号可以获取数组中的所有元素

```echo ${array_name[@]}```

#### 获取数组的长度

获取数组长度的方法与获取字符串长度的方法相同，例如：


```
# 取得数组元素的个数
length=${#array_name[@]}
# 或者
length=${#array_name[*]}
# 取得数组单个元素的长度
lengthn=${#array_name[n]}
```



### 基本运算符
Shell 和其他编程语言一样，支持多种运算符，包括：

* 算数运算符
* 关系运算符
* 布尔运算符
* 字符串运算符
* 文件测试运算符

原生bash不支持简单的数学运算，但是可以通过其他命令来实现，例如 awk 和 expr，expr 最常用。

#### expr
expr 是一款表达式计算工具，使用它能完成表达式的求值操作。

#### 算术运算符

运算符 |	说明	|举例
+ |	加法 |	`expr $a + $b` 结果为 30。
- |	减法 |	`expr $a - $b` 结果为 10。
* |	乘法 |	`expr $a \* $b` 结果为  200。
/ |	除法 |	`expr $b / $a` 结果为 2。
% |	取余 |	`expr $b % $a` 结果为 0。
= |	赋值 |	a=$b 将把变量 b 的值赋给 a。
== |	相等。用于比较两个数字，相同则返回 true。 |	[ $a == $b ] 返回 false。
!= |	不相等。用于比较两个数字，不相同则返回 true。 |	[ $a != $b ] 返回 true。

注意：条件表达式要放在方括号之间，并且要有空格，例如: [$a==$b] 是错误的，必须写成 [ $a == $b ]。

算术运算符实例如下：

```
#!/bin/bash
# author:bqxu
# url:bqxu.github.io

a=10
b=20

val=`expr $a + $b`
echo "a + b : $val"

val=`expr $a - $b`
echo "a - b : $val"

val=`expr $a \* $b`
echo "a * b : $val"

val=`expr $b / $a`
echo "b / a : $val"

val=`expr $b % $a`
echo "b % a : $val"

if [ $a == $b ]
then
   echo "a 等于 b"
fi
if [ $a != $b ]
then
   echo "a 不等于 b"
fi
```

执行脚本，输出结果如下所示：

```
a + b : 30
a - b : -10
a * b : 200
b / a : 2
b % a : 0
a 不等于 b
```

注意：

* 乘号(*)前边必须加反斜杠(\)才能实现乘法运算；
* if...then...fi 是条件语句

#### 关系运算符

关系运算符只支持数字，不支持字符串，除非字符串的值是数字。

运算符 |	说明 |	举例
-eq |	检测两个数是否相等，相等返回 true。 |	[ $a -eq $b ] 返回 false。
-ne |	检测两个数是否相等，不相等返回 true。 |	[ $a -ne $b ] 返回 true。
-gt |	检测左边的数是否大于右边的，如果是，则返回 true。 |	[ $a -gt $b ] 返回 false。
-lt |	检测左边的数是否小于右边的，如果是，则返回 true。 |	[ $a -lt $b ] 返回 true。
-ge |	检测左边的数是否大等于右边的，如果是，则返回 true。 |	[ $a -ge $b ] 返回 false。
-le |	检测左边的数是否小于等于右边的，如果是，则返回 true。 |	[ $a -le $b ] 返回 true。


关系运算符实例如下：

```
#!/bin/bash
# author:菜鸟教程
# url:www.runoob.com

a=10
b=20

if [ $a -eq $b ]
then
   echo "$a -eq $b : a 等于 b"
else
   echo "$a -eq $b: a 不等于 b"
fi
if [ $a -ne $b ]
then
   echo "$a -ne $b: a 不等于 b"
else
   echo "$a -ne $b : a 等于 b"
fi
if [ $a -gt $b ]
then
   echo "$a -gt $b: a 大于 b"
else
   echo "$a -gt $b: a 不大于 b"
fi
if [ $a -lt $b ]
then
   echo "$a -lt $b: a 小于 b"
else
   echo "$a -lt $b: a 不小于 b"
fi
if [ $a -ge $b ]
then
   echo "$a -ge $b: a 大于或等于 b"
else
   echo "$a -ge $b: a 小于 b"
fi
if [ $a -le $b ]
then
   echo "$a -le $b: a 小于或等于 b"
else
   echo "$a -le $b: a 大于 b"
fi
```

输出结果如下所示：

```
10 -eq 20: a 不等于 b
10 -ne 20: a 不等于 b
10 -gt 20: a 不大于 b
10 -lt 20: a 小于 b
10 -ge 20: a 小于 b
10 -le 20: a 小于或等于 b
```

#### 布尔运算符

运算符 |	说明 |	举例
! |	非运算，表达式为 true 则返回 false，否则返回 true。 |	[ ! false ] 返回 true。
-o |	或运算，有一个表达式为 true 则返回 true。 |	[ $a -lt 20 -o $b -gt 100 ] 返回 true。
-a |	与运算，两个表达式都为 true 才返回 true。 |	[ $a -lt 20 -a $b -gt 100 ] 返回 false。

布尔运算符实例如下：

```
#!/bin/bash
# author:菜鸟教程
# url:www.runoob.com

a=10
b=20

if [ $a != $b ]
then
   echo "$a != $b : a 不等于 b"
else
   echo "$a != $b: a 等于 b"
fi
if [ $a -lt 100 -a $b -gt 15 ]
then
   echo "$a -lt 100 -a $b -gt 15 : 返回 true"
else
   echo "$a -lt 100 -a $b -gt 15 : 返回 false"
fi
if [ $a -lt 100 -o $b -gt 100 ]
then
   echo "$a -lt 100 -o $b -gt 100 : 返回 true"
else
   echo "$a -lt 100 -o $b -gt 100 : 返回 false"
fi
if [ $a -lt 5 -o $b -gt 100 ]
then
   echo "$a -lt 100 -o $b -gt 100 : 返回 true"
else
   echo "$a -lt 100 -o $b -gt 100 : 返回 false"
fi
```

输出结果如下所示：
```
10 != 20 : a 不等于 b
10 -lt 100 -a 20 -gt 15 : 返回 true
10 -lt 100 -o 20 -gt 100 : 返回 true
10 -lt 100 -o 20 -gt 100 : 返回 false
```

#### 字符串运算符

运算符 |	说明 |	举例
= |	检测两个字符串是否相等，相等返回 true。 |	[ $a = $b ] 返回 false。
!= |	检测两个字符串是否相等，不相等返回 true。 |	[ $a != $b ] 返回 true。
-z |	检测字符串长度是否为0，为0返回 true。 |	[ -z $a ] 返回 false。
-n |	检测字符串长度是否为0，不为0返回 true。 |	[ -z $a ] 返回 true。
str |	检测字符串是否为空，不为空返回 true。 |	[ $a ] 返回 true。

字符串运算符实例如下：

```
#!/bin/bash
# author:bqxu
# url:bqxu.github.io

a="abc"
b="efg"

if [ $a = $b ]
then
   echo "$a = $b : a 等于 b"
else
   echo "$a = $b: a 不等于 b"
fi
if [ $a != $b ]
then
   echo "$a != $b : a 不等于 b"
else
   echo "$a != $b: a 等于 b"
fi
if [ -z $a ]
then
   echo "-z $a : 字符串长度为 0"
else
   echo "-z $a : 字符串长度不为 0"
fi
if [ -n $a ]
then
   echo "-n $a : 字符串长度不为 0"
else
   echo "-n $a : 字符串长度为 0"
fi
if [ $a ]
then
   echo "$a : 字符串不为空"
else
   echo "$a : 字符串为空"
fi
```

输出结果如下所示：

```
abc = efg: a 不等于 b
abc != efg : a 不等于 b
-z abc : 字符串长度不为 0
-n abc : 字符串长度不为 0
abc : 字符串不为空
```

#### 文件测试运算符

文件测试运算符用于检测 Unix 文件的各种属性。

操作符 |	说明 |	举例
-b file |	检测文件是否是块设备文件，如果是，则返回 true。 |	[ -b $file ] 返回 false。
-c file |检测文件是否是字符设备文件，如果是，则返回 true。 |	[ -b $file ] 返回 false。
-d file	|检测文件是否是目录，如果是，则返回 true。 |	[ -d $file ] 返回 false。
-f file	|检测文件是否是普通文件（既不是目录，也不是设备文件），如果是，则返回 true。 |	[ -f $file ] 返回 true。
-g file |	检测文件是否设置了 SGID 位，如果是，则返回 true。	| [ -g $file ] 返回 false。
-k file |	检测文件是否设置了粘着位(Sticky Bit)，如果是，则返回 true。 |	[ -k $file ] 返回 false。
-p file |	检测文件是否是具名管道，如果是，则返回 true。	 |[ -p $file ] 返回 false。
-u file |	检测文件是否设置了 SUID 位，如果是，则返回 true。| 	[ -u $file ] 返回 false。
-r file |	检测文件是否可读，如果是，则返回 true。|	[ -r $file ] 返回 true。
-w file |	检测文件是否可写，如果是，则返回 true。|	[ -w $file ] 返回 true。
-x file |	检测文件是否可执行，如果是，则返回 true。|	[ -x $file ] 返回 true。
-s file |	检测文件是否为空（文件大小是否大于0），不为空返回 true。	|[ -s $file ] 返回 true。
-e file |	检测文件（包括目录）是否存在，如果是，则返回 true。	|[ -e $file ] 返回 true。


变量 file 表示文件"/var/www/bqxu/test.sh"，它的大小为100字节，具有 rwx 权限。下面的代码，将检测该文件的各种属性：

```
#!/bin/bash
# author:bqxu
# url:bqxu.github.io

file="/var/www/bqxu/test.sh"
if [ -r $file ]
then
   echo "文件可读"
else
   echo "文件不可读"
fi
if [ -w $file ]
then
   echo "文件可写"
else
   echo "文件不可写"
fi
if [ -x $file ]
then
   echo "文件可执行"
else
   echo "文件不可执行"
fi
if [ -f $file ]
then
   echo "文件为普通文件"
else
   echo "文件为特殊文件"
fi
if [ -d $file ]
then
   echo "文件是个目录"
else
   echo "文件不是个目录"
fi
if [ -s $file ]
then
   echo "文件不为空"
else
   echo "文件为空"
fi
if [ -e $file ]
then
   echo "文件存在"
else
   echo "文件不存在"
fi
```
输出结果如下所示：

```
文件可读
文件可写
文件可执行
文件为普通文件
文件不是个目录
文件不为空
文件存在
```

### 流程控制

#### if else

* if 语句语法格式：

```
if condition
then
    command1
    command2
    ...
    commandN
fi
```
写成一行（适用于终端命令提示符）：

```
if [ $(ps -ef | grep -c "ssh") -gt 1 ]; then echo "true"; fi
```

* if else 语法格式：

```
if condition
then
    command1
    command2
    ...
    commandN
else
    command
fi
```

* if else-if else 语法格式：

```
if condition1
then
    command1
elif condition2
    command2
else
    commandN
fi
```

 if else语句经常与test命令结合使用，如下所示：

```
num1=$[2*3]
num2=$[1+5]
if test $[num1] -eq $[num2]
then
    echo '两个数字相等!'
else
    echo '两个数字不相等!'
fi
```

#### for 循环

* for循环一般格式为：

```
for var in item1 item2 ... itemN
do
    command1
    command2
    ...
    commandN
done
```

写成一行：

```
for var in item1 item2 ... itemN; do command1; command2… done;
```

#### while
while循环用于不断执行一系列命令，也用于从输入文件中读取数据；命令通常为测试条件。其格式为：

```
while condition
do
    command
done
```

* 无限循环

```
while :
do
    command
done

# or

while true
do
    command
done

# or
for (( ; ; ))

```

#### until 循环

until循环执行一系列命令直至条件为真时停止。
until循环与while循环在处理方式上刚好相反。
一般while循环优于until循环，但在某些时候—也只是极少数情况下，until循环更加有用。


#### case
Shell case语句为多选择语句。可以用case语句匹配一个值与一个模式，如果匹配成功，执行相匹配的命令。case语句格式如下：

```
case 值 in
模式1)
    command1
    command2
    ...
    commandN
    ;;
模式2）
    command1
    command2
    ...
    commandN
    ;;
esac
```
case的语法和C family语言差别很大，它需要一个esac（就是case反过来）作为结束标记，每个case分支用右圆括号，用两个分号表示break。


#### 跳出循环

在循环过程中，有时候需要在未达到循环结束条件时强制跳出循环，Shell使用两个命令来实现该功能：break和continue。

##### break
break命令允许跳出所有循环（终止执行后面的所有循环）。

##### continue
continue命令与break命令类似，只有一点差别，它不会跳出所有循环，仅仅跳出当前循环。

### 函数

linux shell 可以用户定义函数，然后在shell脚本中可以随便调用。
shell中函数的定义格式如下：

```
[ function ] funname [()]

{
    action;
    [return int;]
}
```

说明：

* 可以带function fun() 定义，也可以直接fun() 定义,不带任何参数。
* 参数返回，可以显示加：return 返回，如果不加，将以最后一条命令运行结果，作为返回值。 return后跟数值n(0-255


#### 函数参数

```
#!/bin/bash
# author:bqxu
# url:bqxu.github.io

funWithParam(){
    echo "第一个参数为 $1 !"
    echo "第二个参数为 $2 !"
    echo "第十个参数为 $10 !"
    echo "第十个参数为 ${10} !"
    echo "第十一个参数为 ${11} !"
    echo "参数总数有 $# 个!"
    echo "作为一个字符串输出所有参数 $* !"
}
funWithParam 1 2 3 4 5 6 7 8 9 34 73
```

输出结果：

```
第一个参数为 1 !
第二个参数为 2 !
第十个参数为 10 !
第十个参数为 34 !
第十一个参数为 73 !
参数总数有 11 个!
作为一个字符串输出所有参数 1 2 3 4 5 6 7 8 9 34 73 !
```

注意，$10 不能获取第十个参数，获取第十个参数需要${10}。当n>=10时，需要使用${n}来获取参数

还有几个特殊字符用来处理参数：
参数处理 | 说明
$# |	传递到脚本的参数个数
$* |	以一个单字符串显示所有向脚本传递的参数
$$ |	脚本运行的当前进程ID号
$! |	后台运行的最后一个进程的ID号
$@ |	与$*相同，但是使用时加引号，并在引号中返回每个参数。
$- |	显示Shell使用的当前选项，与set命令功能相同。
$? |	显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误。


## 命令

### echo

用于字符串的输出。命令格式：

```
echo string
```

* 显示普通字符串:

```
echo "It is a test"
```

这里的双引号完全可以省略，以下命令与上面实例效果一致

```
echo It is a test
```

* 显示转义字符

```
echo "\"It is a test\""
```
结果将是:

```
"It is a test"
```

同样，双引号也可以省略

* 显示变量

read 命令从标准输入中读取一行,并把输入行的每个字段的值指定给 shell 变量

```
 #!/bin/sh
  read name
  echo "$name It is a test"
```


* 显示换行

```
echo -e "OK!\n" # -e 开启转义
echo "It it a test"
```

* 显示不换行

```
#!/bin/sh
echo -e "OK! \c" # -e 开启转义 \c 不换行
echo "It is a test"
```

* 原样输出字符串，不进行转义或取变量(用单引号)

```
  echo '$name\"'
```

输出结果：

```
$name\"
```

* 显示命令执行结果

```
 echo `date`  # 结果将显示当前日期
```

### printf

```
printf  format-string  [arguments...]
```

#### printf的转义序列

序列 |	说明
\a |	警告字符，通常为ASCII的BEL字符
\b |	后退
\c |	抑制（不显示）输出结果中任何结尾的换行字符（只在%b格式指示符控制下的参数字符串中有效），而且，任何留在参数里的字符、任何接下来的参数以及任何留在格式字符串中的字符，都被忽略
\f |	换页（formfeed）
\n |	换行
\r |	回车（Carriage return）
\t |	水平制表符
\v |	垂直制表符
\\ |	一个字面上的反斜杠字符
\ddd |	表示1到3位数八进制值的字符。仅在格式字符串中有效
\0ddd |	表示1到3位的八进制值字符

#### test
Shell中的 test 命令用于检查某个条件是否成立，它可以进行数值、字符和文件三个方面的测试。

实例:

```
num1=100
num2=100
if test $[num1] -eq $[num2]
then
    echo 'The two numbers are equal!'
else
    echo 'The two numbers are not equal!'
fi
```

### 重定向

命令 |	说明
command > file |	将输出重定向到 file。
command < file |	将输入重定向到 file。
command >> file |	将输出以追加的方式重定向到 file。
n > file |	将文件描述符为 n 的文件重定向到 file。
n >> file |	将文件描述符为 n 的文件以追加的方式重定向到 file。
n >& m |	将输出文件 m 和 n 合并。
n <& m |	将输入文件 m 和 n 合并。
<< tag |	将开始标记 tag 和结束标记 tag 之间的内容作为输入。


一般情况下，每个 Unix/Linux 命令运行时都会打开三个文件：
* 标准输入文件(stdin)：stdin的文件描述符为0，Unix程序默认从stdin读取数据。
* 标准输出文件(stdout)：stdout 的文件描述符为1，Unix程序默认向stdout输出数据。
* 标准错误文件(stderr)：stderr的文件描述符为2，Unix程序会向stderr流中写入错误信息。

默认情况下，command > file 将 stdout 重定向到 file，command < file 将stdin 重定向到 file。

* 如果希望 stderr 重定向到 file，可以这样写：

```
$ command 2 > file
```

* 如果希望 stderr 追加到 file 文件末尾，可以这样写：

```
$ command 2 >> file
```

2 表示标准错误文件(stderr)。如果希望将 stdout 和 stderr 合并后重定向到 file，可以这样写：

```
$ command > file 2>&1

或者

$ command >> file 2>&1
```

* /dev/null

如果希望执行某个命令，但又不希望在屏幕上显示输出结果，那么可以将输出重定向到 /dev/null：

```
$ command > /dev/null
```

/dev/null 是一个特殊的文件，写入到它的内容都会被丢弃；如果尝试从该文件读取内容，那么什么也读不到。但是 /dev/null 文件非常有用，将命令的输出重定向到它，会起到"禁止输出"的效果。
如果希望屏蔽 stdout 和 stderr，可以这样写：

```
$ command > /dev/null 2>&1
```

### cat
cat命令用于把档案串连接后传到基本输出（萤幕或加 > fileName 到另一个档案）

```
cat [-AbeEnstTuv] [--help] [--version] fileName
```

### chmod


Linux/Unix 的文件调用权限分为三级 : 文件拥有者、群组、其他。利用 chmod 可以藉以控制文件如何被他人所调用。
使用权限 : 所有使用者

语法

```
chmod [-cfvR] [--help] [--version] mode file...
```

参数说明

* mode : 权限设定字串，格式如下 :

```
[ugoa...][[+-=][rwxX]...][,...]
```

其中：

* u 表示该文件的拥有者，g 表示与该文件的拥有者属于同一个群体(group)者，o 表示其他以外的人，a 表示这三者皆是。
* + 表示增加权限、- 表示取消权限、= 表示唯一设定权限。
* r 表示可读取，w 表示可写入，x 表示可执行，X 表示只有当该文件是个子目录或者该文件已经被设定过为可执行。
* -c : 若该文件权限确实已经更改，才显示其更改动作
* -f : 若该文件权限无法被更改也不要显示错误讯息
* -v : 显示权限变更的详细资料
* -R : 对目前目录下的所有文件与子目录进行相同的权限变更(即以递回的方式逐个变更)
* --help : 显示辅助说明
* --version : 显示版本

此外chmod也可以用数字来表示权限如 :

```
chmod abc file
```
其中a,b,c各为一个数字，分别表示User、Group、及Other的权限。

r=4，w=2，x=1
若要rwx属性则4+2+1=7；
若要rw-属性则4+2=6；
若要r-x属性则4+1=5。


### diff
diff以逐行的方式，比较文本文件的异同处。所是指定要比较目录，则diff会比较目录中相同文件名的文件，但不会比较其中子目录。


### find

find命令用来在指定目录下查找文件。任何位于参数之前的字符串都将被视为欲查找的目录名。
如果使用该命令时，不设置任何参数，则find命令将在当前目录下查找子目录与文件。并且将查找到的子目录和文件全部进行显示。

```
find   path   -option   [   -print ]   [ -exec   -ok   command ]   {} ;
```


### cut

用于显示每行从开头算起 num1 到 num2 的文字。

```
cut  [-bn] [file]
cut [-c] [file]
cut [-df] [file]
```

cut 命令从文件的每一行剪切字节、字符和字段并将这些字节、字符和字段写至标准输出。
如果不指定 File 参数，cut 命令将读取标准输入。必须指定 -b、-c 或 -f 标志之一。

参数:

* -b ：以字节为单位进行分割。这些字节位置将忽略多字节字符边界，除非也指定了 -n 标志。
* -c ：以字符为单位进行分割。
* -d ：自定义分隔符，默认为制表符。
* -f ：与-d一起使用，指定显示哪个区域。
* -n ：取消分割多字节字符。仅和 -b 标志一起使用。如果字符的最后一个字节落在由 -b 标志的 List 参数指示的范围之内，该字符将被写出；否则，该字符将被排除

### ln
ln命令是一个非常重要命令，它的功能是为某一个文件在另外一个位置建立一个同步的链接。

当我们需要在不同的目录，用到相同的文件时，我们不需要在每一个需要的目录下都放一个必须相同的文件，我们只要在某个固定的目录，放上该文件，然后在 其它的目录下用ln命令链接（link）它就可以，不必重复的占用磁盘空间。

```
 ln [参数][源文件或目录][目标文件或目录]
```

必要参数：

* -b 删除，覆盖以前建立的链接
* -d 允许超级用户制作目录的硬链接
* -f 强制执行
* -i 交互模式，文件存在则提示用户是否覆盖
* -n 把符号链接视为一般目录
* -s 软链接(符号链接)
* -v 显示详细的处理过程

### more less
more 命令类似 cat ，不过会以一页一页的形式显示，更方便使用者逐页阅读，而最基本的指令就是按空白键（space）就往下一页显示
按 b 键就会往回（back）一页显示
less 与 more 类似，但使用 less 可以随意浏览文件，而 more 仅能向前移动，却不能向后移动，而且 less 在查看之前不会加载整个文件。

### cp

```
cp [options] source dest
```

参数说明：

* -a：此选项通常在复制目录时使用，它保留链接、文件属性，并复制目录下的所有内容。其作用等于dpR参数组合。
* -d：复制时保留链接。这里所说的链接相当于Windows系统中的快捷方式。
* -f：覆盖已经存在的目标文件而不给出提示。
* -i：与-f选项相反，在覆盖目标文件之前给出提示，要求用户确认是否覆盖，回答"y"时目标文件将被覆盖。
* -p：除复制文件的内容外，还把修改时间和访问权限也复制到新文件中。
* -r：若给出的源文件是一个目录文件，此时将复制该目录下所有的子目录和文件。
* -l：不复制文件，只是生成链接文件。

### scp
用于Linux之间复制文件和目录。

scp是 secure copy的缩写, scp是linux系统下基于ssh登陆进行安全的远程文件拷贝命令。

```
scp [-1246BCpqrv] [-c cipher] [-F ssh_config] [-i identity_file]
[-l limit] [-o ssh_option] [-P port] [-S program]
[[user@]host1:]file1 [...] [[user@]host2:]file2
```

简易写法:

```
scp [可选参数] file_source file_target
```

参数说明：

* -1： 强制scp命令使用协议ssh1
* -2： 强制scp命令使用协议ssh2
* -4： 强制scp命令只使用IPv4寻址
* -6： 强制scp命令只使用IPv6寻址
* -B： 使用批处理模式（传输过程中不询问传输口令或短语）
* -C： 允许压缩。（将-C标志传递给ssh，从而打开压缩功能）
* -p：保留原文件的修改时间，访问时间和访问权限。
* -q： 不显示传输进度条。
* -r： 递归复制整个目录。
* -v：详细方式显示输出。scp和ssh(1)会显示出整个过程的调试信息。这些信息用于调试连接，验证和配置问题。
* -c cipher： 以cipher将数据传输进行加密，这个选项将直接传递给ssh。
* -F ssh_config： 指定一个替代的ssh配置文件，此参数直接传递给ssh。
* -i identity_file： 从指定文件中读取传输时使用的密钥文件，此参数直接传递给ssh。
* -l limit： 限定用户所能使用的带宽，以Kbit/s为单位。
* -o ssh_option： 如果习惯于使用ssh_config(5)中的参数传递方式，
* -P port：注意是大写的P, port是指定数据传输用到的端口号
* -S program： 指定加密传输时所使用的程序。此程序必须能够理解ssh(1)的选项。


### awk
AWK是一种处理文本文件的语言，是一个强大的文本分析工具。

```
awk [选项参数] 'script' var=value file(s)
或
awk [选项参数] -f scriptfile var=value file(s)
```


### grep
grep命令用于查找文件里符合条件的字符串。
grep指令用于查找内容包含指定的范本样式的文件，如果发现某文件的内容符合所指定的范本样式，预设grep指令会把含有范本样式的那一列显示出来。
若不指定任何文件名称，或是所给予的文件名为"-"，则grep指令会从标准输入设备读取数据。


### expr
expr命令是一个手工命令行计数器，用于在UNIX/LINUX下求表达式变量的值，一般用于整数值，也可用于字符串。

* 计算字串长度

```
expr length “this is a test”
 14
```

* 抓取字串

```
> expr substr “this is a test” 3 5
is is
```

* 抓取第一个字符数字串出现的位置

```
> expr index "sarasara"  a
 2
```

* 整数运算

```
> expr 14 % 9
 5
 > expr 10 + 10
 20
 > expr 1000 + 900
 1900
 > expr 30 / 3 / 2
 5
 > expr 30 /* 3 (使用乘号时，必须用反斜线屏蔽其特定含义。因为shell可能会误解显示星号的意义)
 90
 > expr 30 * 3
 expr: Syntax error
```

### cd
用于切换当前工作目录至 dirName(目录参数)。

* 跳到自己的 home 目录 :

```
cd ~
```

* 跳到目前目录的上上两层 :

```
cd ../..
```

### mkdir
用于建立名称为 dirName 之子目录。


```
mkdir [-p] dirName
```

参数说明：

* -p 确保目录名称存在，不存在的就建一个。


### rmdir
rmdir命令删除空的目录。

```
rmdir [-p] dirName
```

参数：
* -p 是当子目录被删除后使它也成为空目录的话，则顺便一并删除。

### pwd
用于显示工作目录。


### du
用于显示目录或文件的大小。


### df
用于显示目前在Linux系统上的文件系统的磁盘使用情况统计。

### ls
用于显示指定工作目录下之内容（列出目前工作目录所含之文件及子目录)。

```
ls [-alrtAFR] [name...]
```

参数 :
* -a 显示所有文件及目录 (ls内定将文件名或目录名称开头为"."的视为隐藏档，不会列出)
* -l 除文件名称外，亦将文件型态、权限、拥有者、文件大小等资讯详细列出
* -r 将文件以相反次序显示(原定依英文字母次序)
* -t 将文件依建立时间之先后次序列出
* -A 同 -a ，但不列出 "." (目前目录) 及 ".." (父目录)
* -F 在列出的文件名称后加一符号；例如可执行档则加 "*", 目录则加 "/"
* -R 若目录下有文件，则以下之文件亦皆依序列出


### 更多


Linux | 命令大全
1、文件管理 |
cat |	chattr |	chgrp |	chmod
chown | cksum | cmp | diff
diffstat | file | find | git
gitview | indent | cut | ln
less | locate | lsattr | mattrib
mc | mdel | mdir | mktemp
more | mmove | mread | mren
mtools | mtoolstest | mv | od
paste | patch | rcp | rm
slocate | split | tee | tmpwatch
touch | umask | which | cp
whereis | mcopy | mshowfat | rhmask
scp | awk
2、文档编辑 |
col | colrm | comm | csplit
ed | egrep | ex | fgrep
fmt | fold | grep | ispell
jed | joe | join | look
mtype | pico | rgrep | sed
sort | spell | tr | expr
uniq | wc |   |
3、文件传输 |
lprm | lpr | lpq | lpd
bye | ftp | uuto | uupick
uucp | uucico | tftp | ncftp
ftpshut | ftpwho | ftpcount |
4、磁盘管理 |
cd | df | dirs | du
edquota | eject | mcd | mdeltree
mdu | mkdir | mlabel | mmd
mrd | mzip | pwd | quota
mount | mmount | rmdir | rmt
stat | tree | umount | ls
quotacheck | quotaoff | lndir | repquota
quotaon |   |   |
5、磁盘维护 |
badblocks | cfdisk | dd | e2fsck
ext2ed | fsck | fsck.minix | fsconf
fdformat | hdparm | mformat | mkbootdisk
mkdosfs | mke2fs | mkfs.ext2 | mkfs.msdos
mkinitrd | mkisofs | mkswap | mpartition
swapon | symlinks | sync | mbadblocks
mkfs.minix | fsck.ext2 | fdisk | losetup
mkfs | sfdisk | swapoff |
6、网络通讯 |
apachectl | arpwatch | dip | getty
mingetty | uux | telnet | uulog
uustat | ppp-off | netconfig | nc
httpd | ifconfig | minicom | mesg
dnsconf | wall | netstat | ping
pppstats | samba | setserial | talk
traceroute | tty | newaliases | uuname
netconf | write | statserial | efax
pppsetup | tcpdump | ytalk | cu
smbd | testparm | smbclient | shapecfg
7、系统管理 |
adduser | chfn | useradd | date
exit | finger | fwhios | sleep
suspend | groupdel | groupmod | halt
kill | last | lastb | login
logname | logout | ps | nice
procinfo | top | pstree | reboot
rlogin | rsh | sliplogin | screen
shutdown | rwho | sudo | gitps
swatch | tload | logrotate | uname
chsh | userconf | userdel | usermod
vlock | who | whoami | whois
newgrp | renice | su | skill
w | id | free |
8、系统设置 |
reset | clear | alias | dircolors
aumix | bind | chroot | clock
crontab | declare | depmod | dmesg
enable | eval | export | pwunconv
grpconv | rpm | insmod | kbdconfig
lilo | liloconfig | lsmod | minfo
set | modprobe | ntsysv | mouseconfig
passwd | pwconv | rdate | resize
rmmod | grpunconv | modinfo | time
setup | sndconfig | setenv | setconsole
timeconfig | ulimit | unset | chkconfig
apmd | hwclock | mkkickstart | fbset
unalias | SVGATextMode |   |
9、备份压缩 |
ar | bunzip2 | bzip2 | bzip2recover
gunzip | unarj | compress | cpio
dump | uuencode | gzexe | gzip
lha | restore | tar | uudecode
unzip | zip | zipinfo |
10、设备管理 |
setleds | loadkeys | rdev | dumpkeys
MAKEDEV |










