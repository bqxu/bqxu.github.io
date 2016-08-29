---
layout: markdown
title:  nodejs ldap sssd
summary: 基于 node-ldap 实现 linux sssd 用户认证
permalink: node/ldap
private: true
---


# step1
```bash
vi /etc/sysconfig/network-script/ifcfg-eth0xxx
```

# step2

```bash
service iptables stop
setenforce 0
vi /etc/sysconfig/selinux
#change:
#SELINUX=disabled
```




#  ldapsearch


ldapsearch -x -W -b "dc=syngentech,dc=org" -h account.syngentech.org -s sub  -D "cn=bq.xu,ou=Users,dc=syngentech,dc=org" '(&(uid=bq.xu)(objectclass=posixaccount)(uid=*)(&(uidnumber=*)(!(uidnumber=0))))'


ldapsearch -x -W -b "dc=syngentech,dc=org" -h account.syngentech.org -s sub  -D "cn=bq.xu,ou=Users,dc=syngentech,dc=org" '(&(gidnumber=501)(objectclass=posixgroup)(cn=*)(&(gidnumber=*)(!(gidnumber=0))))'


ldapsearch -x -W -b "dc=syngentech,dc=org" -h account.syngentech.org -s sub  -D "cn=bq.xu,ou=Users,dc=syngentech,dc=org" '(&(memberuid=bq.xu)(objectclass=posixgroup)(cn=*)(&(gidnumber=*)(!(gidnumber=0))))'


ldapsearch -x -W -b "dc=syngentech,dc=org" -h account.syngentech.org -s sub  -D "cn=bq.xu,ou=Users,dc=syngentech,dc=org" '1.3.6.1.4.1.1466.20037'


ldapsearch -x -b "dc=syngentech,dc=org" -H ldaps://127.0.0.1:1389 -s sub  '(&(uid=bq.xu)(objectclass=posixaccount)(uid=*)(&(uidnumber=*)(!(uidnumber=0))))'


ldapsearch -x -b "dc=syngentech,dc=org" -H ldaps://127.0.0.1:1389 -s sub  '(&(gidnumber=501)(objectclass=posixgroup)(cn=*)(&(gidnumber=*)(!(gidnumber=0))))'


ldapsearch -x -b "dc=syngentech,dc=org" -H ldaps://127.0.0.1:1389 -s sub  '(&(memberuid=bq.xu)(objectclass=posixgroup)(cn=*)(&(gidnumber=*)(!(gidnumber=0))))'


ldapexop -x -b "dc=syngentech,dc=org" -H ldaps://127.0.0.1:1389 '1.3.6.1.4.1.1466.20037'


ldapsearch -x -b "dc=syngentech,dc=org" -H ldap://192.68.56.100:389 -s sub  '(&(uid=bq.xu)(objectclass=posixaccount)(uid=*)(&(uidnumber=*)(!(uidnumber=0))))'


ldapsearch -x -b "dc=syngentech,dc=org" -H ldap://192.68.56.100:389 -s sub  '(&(gidnumber=501)(objectclass=posixgroup)(cn=*)(&(gidnumber=*)(!(gidnumber=0))))'


ldapsearch -x -b "dc=syngentech,dc=org" -H ldap://192.68.56.100:389 -s sub  '(&(memberuid=bq.xu)(objectclass=posixgroup)(cn=*)(&(gidnumber=*)(!(gidnumber=0))))'




## {SSHA}iApFtdXrIhvCIbBylg98j7+hyY7xj6FY



## ldapserver

Configure LDAP Server in order to share users' accounts in your local networks.

[1]	Install OpenLDAP Server.
```bash
[root@dlp ~]# yum -y install openldap-servers openldap-clients
[root@dlp ~]# cp /usr/share/openldap-servers/DB_CONFIG.example /var/lib/ldap/DB_CONFIG
[root@dlp ~]# chown ldap. /var/lib/ldap/DB_CONFIG
[root@dlp ~]# systemctl start slapd
[root@dlp ~]# systemctl enable slapd
[2]	Set OpenLDAP admin password.
# generate encrypted password
[root@dlp ~]# slappasswd
New password:
Re-enter new password:
{SSHA}xxxxxxxxxxxxxxxxxxxxxxxx
[root@dlp ~]# vi chrootpw.ldif
# specify the password generated above for "olcRootPW" section
 dn: olcDatabase={0}config,cn=config
changetype: modify
add: olcRootPW
olcRootPW: {SSHA}xxxxxxxxxxxxxxxxxxxxxxxx

[root@dlp ~]# ldapadd -Y EXTERNAL -H ldapi:/// -f chrootpw.ldif
SASL/EXTERNAL authentication started
SASL username: gidNumber=0+uidNumber=0,cn=peercred,cn=external,cn=auth
SASL SSF: 0
modifying entry "olcDatabase={0}config,cn=config"
[3]	Import basic Schemas.
[root@dlp ~]# ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/cosine.ldif
SASL/EXTERNAL authentication started
SASL username: gidNumber=0+uidNumber=0,cn=peercred,cn=external,cn=auth
SASL SSF: 0
adding new entry "cn=cosine,cn=schema,cn=config"

[root@dlp ~]# ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/nis.ldif
SASL/EXTERNAL authentication started
SASL username: gidNumber=0+uidNumber=0,cn=peercred,cn=external,cn=auth
SASL SSF: 0
adding new entry "cn=nis,cn=schema,cn=config"

[root@dlp ~]# ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/inetorgperson.ldif
SASL/EXTERNAL authentication started
SASL username: gidNumber=0+uidNumber=0,cn=peercred,cn=external,cn=auth
SASL SSF: 0
adding new entry "cn=inetorgperson,cn=schema,cn=config"
[4]	Set your domain name on LDAP DB.
# generate directory manager's password
[root@dlp ~]# slappasswd
New password:
Re-enter new password:
{SSHA}xxxxxxxxxxxxxxxxxxxxxxxx
[root@dlp ~]# vi chdomain.ldif
# replace to your own domain name for "dc=***,dc=***" section
# specify the password generated above for "olcRootPW" section
 dn: olcDatabase={1}monitor,cn=config
changetype: modify
replace: olcAccess
olcAccess: {0}to * by dn.base="gidNumber=0+uidNumber=0,cn=peercred,cn=external,cn=auth"
  read by dn.base="cn=Manager,dc=server,dc=world" read by * none

dn: olcDatabase={2}hdb,cn=config
changetype: modify
replace: olcSuffix
olcSuffix: dc=server,dc=world

dn: olcDatabase={2}hdb,cn=config
changetype: modify
replace: olcRootDN
olcRootDN: cn=Manager,dc=server,dc=world

dn: olcDatabase={2}hdb,cn=config
changetype: modify
add: olcRootPW
olcRootPW: {SSHA}xxxxxxxxxxxxxxxxxxxxxxxx

dn: olcDatabase={2}hdb,cn=config
changetype: modify
add: olcAccess
olcAccess: {0}to attrs=userPassword,shadowLastChange by
  dn="cn=Manager,dc=server,dc=world" write by anonymous auth by self write by * none
olcAccess: {1}to dn.base="" by * read
olcAccess: {2}to * by dn="cn=Manager,dc=server,dc=world" write by * read

[root@dlp ~]# ldapmodify -Y EXTERNAL -H ldapi:/// -f chdomain.ldif
SASL/EXTERNAL authentication started
SASL username: gidNumber=0+uidNumber=0,cn=peercred,cn=external,cn=auth
SASL SSF: 0
modifying entry "olcDatabase={1}monitor,cn=config"

modifying entry "olcDatabase={2}hdb,cn=config"

modifying entry "olcDatabase={2}hdb,cn=config"

modifying entry "olcDatabase={2}hdb,cn=config"

[root@dlp ~]# vi basedomain.ldif
# replace to your own domain name for "dc=***,dc=***" section
 dn: dc=server,dc=world
objectClass: top
objectClass: dcObject
objectclass: organization
o: Server World
dc: Server

dn: cn=Manager,dc=server,dc=world
objectClass: organizationalRole
cn: Manager
description: Directory Manager

dn: ou=People,dc=server,dc=world
objectClass: organizationalUnit
ou: People

dn: ou=Group,dc=server,dc=world
objectClass: organizationalUnit
ou: Group

[root@dlp ~]# ldapadd -x -D cn=Manager,dc=server,dc=world -W -f basedomain.ldif
Enter LDAP Password: # directory manager's password
adding new entry "dc=server,dc=world"

adding new entry "cn=Manager,dc=server,dc=world"

adding new entry "ou=People,dc=server,dc=world"

adding new entry "ou=Group,dc=server,dc=world"

```
# server-world.info[#](http://www.server-world.info/en/note?os=CentOS_7&p=download)


## log

```js

    server.exop('1.3.6.1.4.1.4203.1.11.3', function (req, res, next) {
        console.log('ldapwhoami');
        res.value = 'dn:cn=bq.xu.admin,ou=Users,dc=syngentech,dc=org';
        res.end();
        return next();
    });

    server.exop('1.3.6.1.4.1.42.2.27.9.5.8', function (req, res, next) {
        console.log('test 8');
        res.value = 'dn:cn=bq.xu.admin,ou=Users,dc=syngentech,dc=org';
        res.end();
        return next();
    });

    server.exop('1.3.6.1.4.1.42.2.27.9.2.44', function (req, res, next) {
        console.log("icsCalendarUser");
        res.value = 'dn:cn=bq.xu.admin,ou=Users,dc=syngentech,dc=org';
        res.end();
        return next();
    });

    server.exop('1.3.6.1.4.1.42.2.27.9.2.45', function (req, res, next) {
        console.log("icsCalendarResource");
        res.value = 'dn:cn=bq.xu.admin,ou=Users,dc=syngentech,dc=org';
        res.end();
        return next();
    });

    server.exop('1.3.6.1.4.1.42.2.27.9.2.4', function (req, res, next) {
        console.log("icsCalendarDomain");
        res.value = 'dn:cn=bq.xu.admin,ou=Users,dc=syngentech,dc=org';
        res.end();
        return next();
    });


```
