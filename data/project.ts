export const projects: Project[] = [
  {
    title: 'MongoRolls的小站',
    description: '🦖 基于 Docusaurus 静态网站生成器实现个人博客',
    preview: '/img/project/blog.png',
    website: 'https://mongorolls.cn',
    source: 'https://github.com/mongoRolls/blog',
    tags: ['opensource', 'design', 'favorite'],
    type: 'web',
  },
  {
    title: '即时通信 UI库',
    description: '即时通信应用 UI 组件库，贴近day.js风格',
    preview: 'https://mongorolls-images.oss-cn-shenzhen.aliyuncs.com/img/chat-ui.png',
    website: 'https://componen-library.vercel.app/',
    source: 'https://github.com/MongoRolls/Chat-ui',
    tags: ['personal', 'design', 'favorite'],
    type: 'web',
  },
  {
    title: 'FoodMine',
    description: '类doordash的在线点单平台',
    preview: 'https://mongorolls-images.oss-cn-shenzhen.aliyuncs.com/img/foodmine.png',
    website: 'https://foodsmine-1.onrender.com/',
    source: 'https://github.com/MongoRolls/foodsmine',
    tags: ['personal', 'design', 'favorite'],
    type: 'web',
  },
  {
    title: 'Monopolygo Game',
    description: '游戏工具wiki网站',
    preview:
      'https://d26o86wfn1rlgx.cloudfront.net/assets/home/mobile/joinOurCommunity/community_enus.webp',
    website: 'https://monopolygo.game',
    source: 'https://github.com',
    tags: ['product', 'design', 'favorite'],
    type: 'commerce',
  },
  {
    title: 'Block Blast',
    description: '俄罗斯方块游戏解题工具',
    preview: 'https://mongorolls-images.oss-cn-shenzhen.aliyuncs.com/blockblast.png',
    website: 'https://blockblastsolver.ai/',
    source: 'https://github.com',
    tags: ['product', 'design', 'favorite'],
    type: 'commerce',
  },

]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorite' | 'opensource' | 'product' | 'design' | 'large' | 'personal'

export type ProjectType = 'web' | 'app' | 'commerce' | 'personal' | 'toy' | 'other'

export const projectTypeMap = {
  web: '网站',
  app: '应用',
  commerce: '商业项目',
  personal: '个人',
  toy: '玩具',
  other: '其他',
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  large: {
    label: '大型',
    description: '大型项目，原多于平均数的页面',
    color: '#8c2f00',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
