---
slug: 'cursor-ai'
title: 'Cursor AI 编程助手使用指南'
date: '2024-011-17'
authors: mr

tags: ['AI编程', '开发工具']
image: 'https://mongorolls-images.oss-cn-shenzhen.aliyuncs.com/img/cursor-1.png'
keywords: ['Cursor', 'AI编程', '编程助手']
description: 'Cursor AI编程助手的使用教程和最佳实践'
---

本文章包括了本人使用cursor的体验总结  
以及cursor与其他AI编程助手的对比

<!-- truncate -->

## 目录

- [Cursor 使用体验](#cursor-使用体验)
- [Cursor 比起其他AI编程助手的优点](#cursor-比起其他AI编程助手的优点)

## Cursor 使用体验

非常好用，直接就冲Pro版本，一个月20刀补全功能更强，上下文功能也更长，迁移成本低

对于前端的话因为是vscode的开源分支，所以对vscode的插件支持很好，可以直接导入vscode的账号设置React写状态管理有很多的帮助，直接生成再去修改包括一些css样式，补全也很好用，我写`unocss`的时候，能够智能转换

简单的页面，也可以复制粘贴图片，直接让他生成

composer最新版本，生成的代码命令行，可以直接run code,加到终端执行包括最近更新了agent

<img style={{ width: "80%", align: "center" }} src="<https://mongorolls-images.oss-cn-shenzhen.aliyuncs.com/img/cursor-try.png"/>>

### 常用快捷键

- `cmd + k` 打开聊天窗口
- `cmd + shift + L` 打开设置
- `cmd + i` 打开composer
- `@` 打开提示词库
  - `@docs` 查看官方文档
  - `@file` 查看当前文件的文档
  - `@folder` 查看当前文件夹下所有文档
  - `@web` 搜索网络上的信息

## Cursor 比起其他AI编程助手的优点

- 更长的上下文
- 可以阅读整个项目
- 生成后类似DIFF的修改
- 模型`Claude3.5 Sonnet`比`GPT4o`好用

甚至用copycode网站，可以直接使用figma设计稿，生成一套提示词，给到composer使用,直接就能生成90%的静态网站了
