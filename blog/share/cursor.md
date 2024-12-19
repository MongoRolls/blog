---
slug: 'cursor-ai'
title: 'Cursor AI 编程助手使用指南'
date: '2024-011-17'
authors: mr

tags: ['AI编程', '开发工具']
image: 'https://mongorolls-images.oss-cn-shenzhen.aliyuncs.com/img/cursor-1.png'
keywords: ['Cursor', 'AI编程', '编程助手']
description: 'Cursor AI编程助手的使用教程和最佳实践'
state: finished

---

本文章包括了本人使用cursor的体验总结  
以及cursor与其他AI编程助手的对比

<!-- truncate -->

## 目录

- [Cursor 使用体验](#cursor-使用体验)
- [Cursor 比起其他AI编程助手的优点](#cursor-比起其他AI编程助手的优点)

## Cursor 使用体验

Cursor是一款非常好用的AI编程助手。我直接购买了Pro版本，每月20美元的订阅费用物有所值。Pro版本不仅提供更强大的代码补全功能，还支持更长的上下文理解，同时迁移成本也很低。

作为一个基于VSCode开源分支的编辑器，Cursor对VSCode插件有着良好的支持。可以直接导入VSCode的账号设置，在React开发中对状态管理提供了很大帮助。它不仅能直接生成代码，还可以修改CSS样式。代码补全功能也非常智能，比如在我使用`unocss`时，它能够智能地进行样式转换。

对于简单的页面，可以直接复制粘贴设计图片让AI生成代码。通过使用@docs命令，还可以解决AI模型因训练数据滞后而无法获取最新版本库信息的问题。

composer最新版本，生成的代码命令行，可以直接run code,加到终端执行包括最近更新了agent

<img style={{ width: "80%", align: "center" }} src="https://mongorolls-images.oss-cn-shenzhen.aliyuncs.com/img/cursor-try.png"/>

### 常用快捷键

- `cmd + k` 打开聊天窗口
- `cmd + shift + L` 打开设置
- `cmd + i` 打开composer
- `@` 打开提示词库
  - `@docs` 查看官方文档
  - `@file` 查看当前文件的文档
  - `@folder` 查看当前文件夹下所有文档
  - `@web` 搜索网络上的信息

### 配置cursor

- 安装cursor
- 导入cursor插件
- 配置cursor rule

一个不错的cursor 提示词库 [Awesome CursorRules](https://github.com/PatrickJS/awesome-cursorrules?tab=readme-ov-file)

一个React,Next,ts,Tailwind的提示，可能让cursor变得更智能

<details>
<summary>详细提示词</summary>

````md
You are an expert in Solidity, TypeScript, Node.js, Next.js 14 App Router, React, Vite, Viem v2, Wagmi v2, Shadcn UI, Radix UI, and Tailwind Aria.Key Principles:- Write concise, technical responses with accurate TypeScript examples.- Use functional, declarative programming. Avoid classes.- Prefer iteration and modularization over duplication.- Use descriptive variable names with auxiliary verbs (e.g., isLoading).- Use lowercase with dashes for directories (e.g., components/auth-wizard).- Favor named exports for components.- Use the Receive an Object, Return an Object (RORO) pattern.JavaScript/TypeScript:- Use "function" keyword for pure functions. Omit semicolons.- Use TypeScript for all code. Prefer interfaces over types. Avoid enums, use maps.- File structure: Exported component, subcomponents, helpers, static content, types.- Avoid unnecessary curly braces in conditional statements.- For single-line statements in conditionals, omit curly braces.- Use concise, one-line syntax for simple conditional statements (e.g., if (condition) doSomething()).- Prioritize error handling and edge cases: - Handle errors and edge cases at the beginning of functions. - Use early returns for error conditions to avoid deeply nested if statements. - Place the happy path last in the function for improved readability. - Avoid unnecessary else statements; use if-return pattern instead. - Use guard clauses to handle preconditions and invalid states early. - Implement proper error logging and user-friendly error messages. - Consider using custom error types or error factories for consistent error handling.Dependencies:- Next.js 14 App Router- Wagmi v2- Viem v2React/Next.js:- Use functional components and TypeScript interfaces.- Use declarative JSX.- Use function, not const, for components.- Use Shadcn UI, Radix, and Tailwind Aria for components and styling.- Implement responsive design with Tailwind CSS.- Use mobile-first approach for responsive design.- Place static content and interfaces at file end.- Use content variables for static content outside render functions.- Minimize 'use client', 'useEffect', and 'setState'. Favor RSC.- Use Zod for form validation.- Wrap client components in Suspense with fallback.- Use dynamic loading for non-critical components.- Optimize images: WebP format, size data, lazy loading.- Model expected errors as return values: Avoid using try/catch for expected errors in Server Actions. Use useActionState to manage these errors and return them to the client.- Use error boundaries for unexpected errors: Implement error boundaries using error.tsx and global-error.tsx files to handle unexpected errors and provide a fallback UI.- Use useActionState with react-hook-form for form validation.- Code in services/ dir always throw user-friendly errors that tanStackQuery can catch and show to the user.- Use next-safe-action for all server actions: - Implement type-safe server actions with proper validation. - Utilize the `action` function from next-safe-action for creating actions. - Define input schemas using Zod for robust type checking and validation. - Handle errors gracefully and return appropriate responses. - Use import type { ActionResponse } from '@/types/actions' - Ensure all server actions return the ActionResponse type - Implement consistent error handling and success responses using ActionResponse - Example:  `typescript  'use server'     import { createSafeActionClient } from 'next-safe-action'  import { z } from 'zod'  import type { ActionResponse } from '@/app/actions/actions'  const schema = z.object({   value: z.string()  })  export const someAction = createSafeActionClient()   .schema(schema)   .action(async (input): Promise => {    try {     // Action logic here     return { success: true, data: /* result */ }    } catch (error) {     return { success: false, error: error instanceof AppError ? error : appErrors.UNEXPECTED_ERROR, }    }   })  `Key Conventions:1. Rely on Next.js App Router for state changes.2. Prioritize Web Vitals (LCP, CLS, FID).3. Minimize 'use client' usage:  - Prefer server components and Next.js SSR features.  - Use 'use client' only for Web API access in small components.  - Avoid using 'use client' for data fetching or state management.Refer to Next.js documentation for Data Fetching, Rendering, and Routing best practices.
````

</details>

### cursor 个人使用分享

1. 用markdown给他写消息，通过标题，列表来让gpt更容易了解主次
2. step by step让他一步一步写顺序
3. 用白话多次让他写markdown提示词，不断修改，最后的提示词再喂给cursor去生成

- 更长的上下文
- 可以阅读整个项目
- 生成后类似DIFF的修改
- 多模型，模型`Claude3.5 Sonnet`比`GPT4o`好用
- composer 可以生成代码，直接执行

甚至用copycode网站，可以直接使用figma设计稿，生成一套提示词，给到composer使用,直接就能生成90%的静态网站了
