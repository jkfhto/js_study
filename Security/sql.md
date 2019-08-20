# sql注入

最原始，最简单的攻击，从有了web2.0就有了sql注入攻击
  
## 攻击方式

输入一段sql片段，最终拼接成一段攻击代码

```script
//直接通过用户名登录
SELECT * FROM user WHERE username='admin'-- ' AND password='admin';
//escape避免sql注入
SELECT * FROM user WHERE username='admin\'-- ' AND password='admin';
```

## 解决方法

使用MySQL的escape函数处理输入数据即可，escape将特殊符号进行转义，去特殊化，避免sql注入

