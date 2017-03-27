# Git 应用分享

* Author: 金正 <jinzheng@miaozhen.com>

# 分享内容

* 什么是 Git ？

* 初始化配置

* 本地修改

* 分支管理

* 远程操作

* 项目管理

# 什么是 Git ？

```
Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
```

* 分布式版本控制系统（Distributed Version Control System, DVCS）

每个工作环境下都有*全部*版本信息。当服务器出现问题时，可以通过任何一个工作环境来恢复服务器上的内容。

![DVCS](images/git-dvcs.png)

# 初始化配置

* 作者身份

Git 要求每一次修改都要注明作者的身份~~以便分锅~~

```
git config --global user.name "Your Name"
git config --global user.email your@email.com
```

* 其他（可选）

```
git config --global push.default matching
git config --global filemode true
```

* 查看配置

```
git config --list
```

# 本地修改

# 分支管理

# 远程操作

# 项目管理
