---
slug: bulid-a-blog
title: 如何搭建一个docusaurus博客
date: 2024-2-22
authors:
  name: MongoRolls
  title: 前端 acmer / 25届大学生
  url: https://github.com/mongoRolls
  image_url: /img/logo.webp
tags: [技术分享, docusaurus]
keywords: [技术分享, docusaurus]
description: 叙述如何搭建一个博客
---

分享如何简单快速制作一个个人博客

<!-- truncate -->

### docusaurus介绍

Docusaurus 是一个由 Facebook 开源的静态网站生成器。它可以帮助你快速搭建文档网站、博客或其他类型的静态网站。主要特点包括:

- 基于 React 构建,支持组件化开发
- Markdown 支持,可以方便地写作
- 内置搜索功能
- 多语言支持
- 文档版本控制
- 深色模式支持

#### 博客修改与功能更新

1. 主题定制
   - 修改主题色
   - 自定义 CSS
   - 自定义组件

2. 功能扩展
   - 评论系统集成(Giscus)
   - 数据统计(Google Analytics)
   - 搜索优化
   - RSS 订阅

#### 部署方案

##### Vercel 部署

Vercel 是一个流行的静态网站托管平台:

1. 注册 Vercel 账号并连接 GitHub
2. 导入项目仓库
3. 自动构建部署
4. 支持自动 HTTPS

##### OSS 对象存储

可以使用阿里云 OSS 存储静态资源:

1. 创建 Bucket
2. 配置访问权限
3. 上传静态资源
4. 配置 CDN 加速

### 域名配置

1. 购买域名
2. 域名解析
   - 添加 A 记录指向服务器
   - 添加 CNAME 记录
