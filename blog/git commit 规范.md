---
slug: 'git-tutorial'
title: 'git commit 规范'
date: '2024-01-07'
authors:
  name: MongoRolls
  title: 前端 / 25届
  url: https://github.com/mongorolls
  image_url: /img/logo.webp

tags: ['知识总结', '学习感悟']
keywords: ['知识总结', '学习感悟']
description: 'git commit 规范'
---

<!-- truncate -->

## github和git

最近发现有新生同学知道github，却不知道git，回想起自己以前大一也是瞎摸索，所以决定简单写一篇blog来简单讲讲git相关的事情

#### 什么是github

github是世界上(~~最大的同性交友网站~~) **代码托管平台**，并且很多都是开源的项目。

这个就连问我git是什么的新生也是知道了，所以先搁置，讲讲**git**

#### 什么是git

先贴份不错的教程--> [廖雪峰git教程](https://www.liaoxuefeng.com/wiki/896043488029600)

[在线学习git](https://learngitbranching.js.org/?locale=zh_CN)

这里用自己简单通俗的话总结一下git

git是**分布式的版本控制系统**，是帮助我们个人开发或团队开发十分强劲的好用工具

<img style= {{ width: '600px', height: '300px'}} src="<https://mongorolls-images.oss-cn-shenzhen.aliyuncs.com/img/image-20240521225459227.png>" />

列举一下git的几个优点

1. 版本管理（可以讲代码回退到之前提交的某个时间节点）
   - 就像我们写word作业，有时候需要开好多的副本
2. 分支机制 (可以开多个分支写不同的功能，可以随时快速切换，也可以合并分支...)
3. 多人协作 (多人合作项目，可以各自写各自的功能，每个人本地都有一个库，可以看到每个人更新了什么，不用给他人传文件)
   - 一般多人会到代码托管平台比如`github`,`gitee`(国内版本，有点⑩),`gitlab`（一般企业是用gitlab 自搭）

而且git的实现机制类似**主席树**，可以有效节省内存空间

<img style= {{ width: '600px', height: '300px'}} src="<https://mongorolls-images.oss-cn-shenzhen.aliyuncs.com/img/image-20240521230522586.png>" />

#### git的几个操作

- **init** `git init` 初始化

- **add**
  - `git add a.txt` 将a.txt加到暂存区
  - `git add .` 将目录下**所有**新增的文件内容加到暂存区
- **commit**
  - 多次add一次commit就ok了
  - `git commit -m "本次提交的信息，可见提交规范"`
  - 将暂存区加到工作区
- **pull**

  - `git pull [remote] [branch]`
  - 这个命令用于从远程获取代码并合并。实际上，`git pull` 是 `git fetch` 和 `git merge`的组合体。使用这个命令，Git 会像服务器请求更新，获取最新版本的代码，然后将这些更新合并到本地的工作分支。

  :::danger

  `git pull`先把本地修改的代码`add`,`commit`起来，避免冲乱工作区，造成代码丢失

  或者没开发完成的代码可以`git stash`存起来

  可以`git status`查看`commit`提交的记录

  确认无语再`git pull`拉取远程仓库代码进行合并，冲突处理等

  :::

- **fetch**
  - `git fetch [remote]`
  - 这个命令用于从远程获取代码，但是它不会自动合并或修改你当前的工作。换句话说，你可以在需要时进行 `git fetch` ，然后在一个合适的时间进行 `git merge`。
- **push**：`git push [remote] [branch]`
  - 这个命令用于将你的更改推送到远程分支。这样，你的团队成员就可以获取到你所作的更改。如果你和别人都在同一个分支进行开发，你可能需要先执行 `git pull` 来合并代码，以确保你的更改能够顺利推送到远程。
- **branch**：在 Git 中，分支是代码库不同开发版本的指针。以下是关于 `git branch` 的一些常见用法：
  - `git branch`：列出所有的本地分支。
  - `git branch [branch-name]`：创建一个新的分支。这并不会自动切换到这个新分支，你需要使用 `git checkout` 命令来切换分支。
  - `git branch -d [branch-name]`：删除一个分支，但是在你没有合并分支的更改之前，你将不能删除这个分支。
  - `git branch -D [branch-name]`：强制删除一个分支，即使你没有合并分支的更改，你也能够删除这个分支（谨慎使用）。
- **checkout**：`git checkout` 是切换和恢复工作目录文件的命令，它有多种用法，包括：
  - `git checkout [branch-name]`：切换到一个已存在的分支。如果你正在进行的更改尚未提交，切换分支可能会有冲突，你可能需要先提交更改，或者取消更改，然后再切换分支。
  - `git checkout -b [branch-name]`：创建一个新的分支，并立即切换到这个新分支。这是 `git branch [branch-name]` 和 `git checkout [branch-name]` 的快捷方式。
  - `git checkout [commit] [file]`：恢复一个文件到指定的提交版本，其中 `[commit]` 是你想要切换到的提交 ID，`[file]` 是你想要恢复的文件。
- **stash**

  - 主要用于代码没开放成功，但是又需要去新的分支开发其他东西，可以将当前的代码存到节点下为一个节点
    - `git stash`存`git stash list`展示`git stash apply [node]`应用`git stash pop`应用删除`git stash clear`清除全部

还有变基`rebase`,`cherry pick`可以改变顺序，变线性

`git lint`对代码风格格式校验

新手先注册github,本地安装git工具，配置邮箱等信息，在本地终端或者vscode等试试，再试试push到远程仓库上。

## 提交规范

提交规范主要是为了让开发者提交完整的更新信息，方便查阅。

目前最为流行的提交信息规范来自于 Angular 团队。

规范中，主要就是要求提交内容要进行分类并填写内容，更为严格的规定是要求标注开发模块，整个语法如下

`git commit -m "feat: 增加新功能"`

```bash
type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```

| type     | commit 的类型                                            |
| -------- | -------------------------------------------------------- |
| feat     | 新功能、新特性                                           |
| fix      | 修改 bug                                                 |
| perf     | 更改代码，以提高性能                                     |
| refactor | 代码重构（重构，在不影响代码内部行为、功能下的代码修改） |
| docs     | 文档修改                                                 |
| style    | 代码格式修改, 注意不是 css 修改（例如分号修改）          |
| test     | 测试用例新增、修改                                       |
| build    | 影响项目构建或依赖项修改                                 |
| revert   | 恢复上一次提交                                           |
| ci       | 持续集成相关文件修改                                     |
| chore    | 其他修改（不在上述类型中的修改）                         |
| release  | 发布新版本                                               |
| workflow | 工作流相关文件修改                                       |

以下是一些示例：

| commit message                     | 描述                      |
| ---------------------------------- | ------------------------- |
| chore: init                        | 初始化项目                |
| chore: update deps                 | 更新依赖                  |
| chore: wording                     | 调整文字（措词）          |
| chore: fix typos                   | 修复拼写错误              |
| chore: release v1.0.0              | 发布 1.0.0 版本           |
| fix: icon size                     | 修复图标大小              |
| fix: value.length -> values.length | value 变量调整为 values   |
| feat(blog): add comment section    | blog 新增评论部分         |
| feat: support typescript           | 新增 typescript 支持      |
| feat: improve xxx types            | 改善 xxx 类型             |
| style(component): code             | 调整 component 代码样式   |
| refactor: xxx                      | 重构 xxx                  |
| perf(utils): random function       | 优化 utils 的 random 函数 |
| docs: xxx.md                       | 添加 xxx.md 文章          |

更多示例可以参考主流开源项目的 commit。

## 检查 commit 规范[](https://kuizuo.cn/docs/skill/git/git-conmit-specification#检查-commit-规范)

要检查 commit message 是否符合要求，可以使用 [commitlint](https://github.com/conventional-changelog/commitlint) 工具，并配合 [husky](https://github.com/typicode/husky) 对每次提交的 commit 进行检查。

当然规范不是强求，但 commit message 一定要能简要说明本次代码的改动主要部分，有利于他人与自己后期查看代码记录。
