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



## docusaurus介绍



## 博客修改与功能更新



## 服务器

### git page

### vercel

### ocs服务器

## 域名



```js
console.log("script start");

setTimeout(() => {
  console.log("setTimeout");
}, 1000);

Promise.resolve()
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });

async function errorFunc() {
  try {
    await Promise.reject("error!!!");
  } catch (e) {
    console.log("error caught"); // 微1-3
  }
  console.log("errorFunc");
  return Promise.resolve("errorFunc success");
}

errorFunc().then((res) => console.log("errorFunc then res"));

console.log("script end");

```

