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

* 分布式版本控制系统 (Distributed Version Control System, DVCS)

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

* 新建 Repository

```
mkdir my-project && cd my-project
git init
```

这时会发现 `my-project` 目录下出现了隐藏目录 `.git` 。这个目录就是 Git 用来存储 Repository 信息的目录。

* 文件的跟踪 (Track) 与 Stage (Cache)

![Stage](images/git-add-commit.png)

```
git add FILE
git add -A
```

只有 `add` 过的文件会被 Git 跟踪。

* 查看修改

```
git status
git diff
git diff --cached
```

* 提交修改

```
git commit -m "Commit Message"
```

只有 stage 里的内容会被提交

* 查看版本信息

```
git log
git log -p
```

* 取消修改

```
git reset
git reset --hard
git reset HEAD^
```

单个文件：

```
git checkout FILE
```

* 文件操作

```
git mv FILE NEW_PATH
git rm FILE
```

* Ignore

通过配置 `.gitignore` 文件，可以让 Git 在执行

```
git add -A
git status
```

时忽略某些文件。但是，使用

```
git add FILE
```

仍可以强行跟踪这些文件（不推荐）。

如果一个应当被忽略的文件已经被跟踪，可以使用

```
git rm --cached FILE
```

来取消跟踪 (untrack)。

每个目录下都可以有一个 `.gitignore` 文件。

* 其他

通过配置 `.gitattribute` 文件，可以指定 Git 处理某些文件的策略，例如：

```
*.txt binary
```

可以让 Git 将所有 `.txt` 文件作为二进制文件处理，不对换行符进行操作。


# 分支管理

# 远程操作

# 项目管理

# 划重点

* 什么是 Git ？

    * 概念：DVCS

* 初始化配置

    * 命令：`config`

* 本地修改

    * 概念：Repository, Diff, Stage (Cache), Track, Ignore

    * 命令：`init`, `status`, `diff`, `add`, `commit`, `log`, `reset`, `mv`, `rm`

* 分支管理

    * 概念：Branch

    * 命令：`branch`, `checkout`, `merge`

* 远程操作

    * 概念：Remote, Upstream

    * 命令：`remote`, `clone`, `fetch`, `pull`, `push`

* 项目管理
