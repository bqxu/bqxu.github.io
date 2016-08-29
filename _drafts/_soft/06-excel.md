---
layout: markdown
title: excel 小技能
summary:  常用 excel 小技能
permalink: soft/excel
---

# excel 小技能

## 去掉公式保留数值的方法

在需要去掉公式的工作表，按ALT+F11，打开VBE编辑器，插入——模块，复制下面代码去掉公式保留值内容，按F5键运行即可去掉公式保留内容。

```vbScript
Sub excel去掉公式()
    Dim sh As Worksheet
    For Each sh In Sheets
        sh.UsedRange = sh.UsedRange.Value
    Next
End Sub
```

## VLOOKUP

在表格或数值数组的首列查找指定的数值，并由此返回表格或数组当前行中指定列处的数值。

语法

```vbScript
VLOOKUP(lookup_value,table_array,col_index_num,range_lookup)
```
Lookup_value    为需要在数组第一列中查找的数值。Lookup_value 可以为数值、引用或文本字符串。

Table_array    为需要在其中查找数据的数据表。可以使用对区域或区域名称的引用，例如数据库或列表。

如果 range_lookup 为 TRUE，则 table_array 的第一列中的数值必须按升序排列：…、-2、-1、0、1、2、…、-Z、FALSE、TRUE；否则，函数 VLOOKUP 不能返回正确的数值。如果 range_lookup 为 FALSE，table_array 不必进行排序。

通过在“数据”菜单中的“排序”中选择“升序”，可将数值按升序排列。

Table_array 的第一列中的数值可以为文本、数字或逻辑值。

文本不区分大小写。

Col_index_num    为 table_array 中待返回的匹配值的列序号。Col_index_num 为 1 时，返回 table_array 第一列中的数值；col_index_num 为 2，返回 table_array 第二列中的数值，以此类推。如果 col_index_num 小于 1，函数 VLOOKUP 返回错误值值 #VALUE!；如果 col_index_num 大于 table_array 的列数，函数 VLOOKUP 返回错误值 #REF!。

Range_lookup    为一逻辑值，指明函数 VLOOKUP 返回时是精确匹配还是近似匹配。如果为 TRUE 或省略，则返回近似匹配值，也就是说，如果找不到精确匹配值，则返回小于 lookup_value 的最大数值；如果 range_value 为 FALSE，函数 VLOOKUP 将返回精确匹配值。如果找不到，则返回错误值 #N/A。

说明

如果函数 VLOOKUP 找不到 lookup_value，且 range_lookup 为 TRUE，则使用小于等于 lookup_value 的最大值。

如果 lookup_value 小于 table_array 第一列中的最小数值，函数 VLOOKUP 返回错误值 #N/A。

如果函数 VLOOKUP 找不到 lookup_value 且 range_lookup 为 FALSE，函数 VLOOKUP 返回错误值 #N/A。

## &

字符串 连接

