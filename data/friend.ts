export const Friends: Friend[] = [
  {
    title: '峰华前端工程师',
    description: '致力于帮助你以最直观、最快速的方式学会前端开发',
    website: 'https://zxuqian.cn',
    avatar: '/img/friend/zxuqian.png',
  },
  {
    title: 'lkk',
    description: '游戏开发的🐹🐹',
    website: 'https://lkknb.top',
    avatar:
      'https://mongorolls-images.oss-cn-shenzhen.aliyuncs.com/img/4a702795e6ee980a59295042101a3e65_1.jpg',
  },
  {
    title: 'pansy',
    description: '嵌入式大佬',
    website: 'https://pansyhou.top/',
    avatar: '/img/friend/innei.png',
  },
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: string
}
