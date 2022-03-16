import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'

const nav = [
  {
    text: 'js',
    activeMatch: `^/js/`,
    link: '/js/base/context-this'
  },
  {
    text: '框架',
    activeMatch: `^/framework/`,
    link: '/framework/reactivity'
  },
  {
    text: '工程化',
    activeMatch: `^/project/`,
    link: '/project/module'
  },
  {
    text: '性能优化',
    activeMatch: `^/optimize/`,
    link: '/optimize/target'
  },
  {
    text: '设计模式 & 算法',
    activeMatch: `^/design/`,
    link: '/design/base'
  },
  {
    text: '网络知识',
    activeMatch: `^/network/`,
    link: '/network/cache/concept'
  },
  {
    text: 'typescript',
    activeMatch: `^/typescript/`,
    link: '/typescript/introduce'
  }
]

const sidebar = {
  '/js/': [
    {
      text: '基础', items: [
        { text: '执行上下文this', link: '/js/base/context-this' },
        { text: '闭包closure', link: '/js/base/closure' },
        { text: 'call, apply,bind', link: '/js/base/change-this' },
        { text: '类型判断', link: '/js/base/type-check' },
      ]
    },
    {
      text: '进阶', items: [
        { text: '异步', link: '/js/enhance/async' },
        { text: '手写Promise', link: '/js/enhance/promise-A+' },
        { text: '面向对象和原型', link: '/js/enhance/prototype' },
        { text: 'es新特性', link: '/js/enhance/es-next' },
      ]
    }
  ],
  '/framework/': [
    {
      text: '框架原理', items: [
        { text: '响应式框架基本原理', link: '/framework/reactivity' },
        { text: '模板编译原理', link: '/framework/template-compile' },
        { text: '发布/订阅模式简单应用', link: '/framework/pub-sub' },
        { text: '虚拟DOM', link: '/framework/virtual-dom' },
      ]
    },
    {
      text: 'React', items: [
        { text: 'jsx', link: '/framework/react/jsx' },
        { text: 'diff', link: '/framework/react/diff' },
        { text: '组件设计', link: '/framework/react/components' },
        { text: 'Redux', link: '/framework/react/redux' },
        { text: '展望', link: '/framework/react/future' },
      ]
    }
  ],
  '/project/': [
    {
      text: '模块化', items: [
        { text: '介绍', link: '/project/module' }
      ]
    },
    {
      text: 'webpack', items: [
        { text: 'webpack工作基本原理', link: '/project/webpack/theory' },
        { text: 'webpack loader', link: '/project/webpack/loader' },
        { text: 'webpack plugin', link: '/project/webpack/plugin' },
      ]
    },
    {
      text: 'rollup', items: [
        { text: '介绍', link: '/project/rollup' }
      ]
    },
    {
      text: '项目组织设计', items: [
        { text: '介绍', link: '/project/organization' }
      ]
    },
    {
      text: '代码规范工具', items: [
        { text: '介绍', link: '/project/code' }
      ]
    }
  ],
  '/optimize/': [
    {
      text: '性能监控、错误上报', items: [
        { text: '介绍', link: '/optimize/target' }
      ]
    },
    {
      text: '性能优化问题', items: [
        { text: '介绍', link: '/optimize/question' }
      ]
    },
    {
      text: 'React框架及性能', items: [
        { text: '介绍', link: '/optimize/framework' }
      ]
    },
  ],
  '/design/': [
    {
      text: '设计模式', items: [
        { text: '介绍', link: '/design/base' }
      ]
    },
    {
      text: '数据结构', items: [
        { text: '栈和队列', link: '/design/stack-queue' },
        { text: '链表', link: '/design/linked-list' },
        { text: '树', link: '/design/tree' },
        { text: '图', link: '/design/graph' },
        { text: '散列表(哈希表)', link: '/design/hash-table' }
      ]
    },
    {
      text: '函数式', items: [
        { text: '函数式和高质量函数', link: '/design/function/base' },
        { text: '科里化分析', link: '/design/function/curry' },
        { text: '偏函数', link: '/design/function/partial-application' },
      ]
    },
    {
      text: '算法', items: [
        { text: '基本概念', link: '/design/algorithm/base' },
        { text: 'v8引擎中排序方法', link: '/design/algorithm/v8-sort' },
        { text: '快速排序和插入排序', link: '/design/algorithm/quick-sort' },
      ]
    }
  ],
  '/network/': [
    {
      text: '缓存', items: [
        { text: '缓存概念', link: '/network/cache/concept' },
        { text: '缓存和浏览器操作', link: '/network/cache/browser' },
        { text: '相关面试题目', link: '/network/cache/interview' },
        { text: '实战', link: '/network/cache/try' },
        { text: '实现一个验证缓存的轮子', link: '/network/cache/wheel' },
      ]
    },
    {
      text: 'Http', items: [
        { text: '概念', link: '/network/http/concept' },
        { text: '现状及通点', link: '/network/http/now' },
        { text: 'http2.0', link: '/network/http/http2' },
        { text: 'http发展', link: '/network/http/future' },
        { text: '面试题', link: '/network/http/interview' },
      ]
    },
    {
      text: '单页面鉴权设计', items: [
        { text: '简介', link: '/network/token/concept' },
        { text: '实战', link: '/network/token/try' },
        { text: 'Authentication cookie', link: '/network/token/cookie' },
        { text: 'jwt', link: '/network/token/jwt' },
      ]
    }
  ],
  '/typescript/': [
    { text: '入门', items: [
      { text: '介绍', link: '/typescript/introduce' }
    ] }
  ]
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'zh-CN',
  title: 'xmc blog',
  description: '随笔记记',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  scrollOffset: 'header',

  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    nav,
    sidebar,
    algolia: {
      apiKey: 'xmcBlog',
      indexName: 'xmcBlog',
      searchParameters: {
        faceFilter: ['tags:js,network']
      }
    }
  },
  vite: {
    server: {
      host: true,
      fs: {
        allow: ['../../']
      }
    }
  }
})
