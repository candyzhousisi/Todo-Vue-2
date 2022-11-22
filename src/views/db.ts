export interface Obj {
  title: string
  list?: string[]
  children?: Obj[]
}

interface Item {
  title: string
  data: Obj[]
}

export default (id: string) => {
  const obj: { [k: string]: Item } = {
    '1': {
      title: '说说你对 Vue 的理解',
      data: [
        {
          title: '数据驱动',
          list: [
            'Model: 模型层, 负责处理业务逻辑以及和服务端进行交互',
            'View: 视图层, 负责将数据模型转化为 UI 展示出来, 可以简单的理解为 html 页面',
            'ViewModel: 视图模型层, 用来连接 Model 和 View, 是它们之间的通信桥梁'
          ]
        },
        {
          title: '组件化',
          children: [
            {
              title: '什么是组件化',
              list: [
                '把图形、非图形的各种逻辑抽象为一个统一概念来实现的开发模式',
                '所有的 .vue 文件都可以视为一个组件'
              ]
            },
            {
              title: '组件化的优势',
              list: [
                '降低系统的耦合度, 通过替换组件快速完成需求',
                '调试方便, 根据报错的组件快速定位问题',
                '提高可维护性, 组件职责单一, 通过组件在系统中是被复用, 便于升级'
              ]
            }
          ]
        },
        {
          title: '指令系统',
          list: [
            '解释: 指令 (directives) 是带有 v- 前缀的特殊属性',
            '作用: 当表达式值发生改变时, 将其产生的影响响应式的作用于 DOM'
          ],
          children: [
            {
              title: '常用指令',
              list: [
                '条件渲染: v-if、v-show',
                '列表渲染: v-for',
                '属性绑定: v-bind',
                '事件绑定: v-on',
                '数据双向绑定: v-model'
              ]
            }
          ]
        },
        {
          title: '总结',
          list: [
            'Vue 所有的界面事件, 都是只去操作数据的',
            'Vue 所有的界面改动, 都是根据数据自动绑定出来的'
          ]
        }
      ]
    },
    '2': {
      title: 'Vue 和 React 对比',
      data: [
        {
          title: '相同点',
          list: [
            '都有组件化思想',
            '都支持服务端渲染',
            '都有虚拟 DOM',
            '数据驱动视图',
            '都支持native',
            '都有自己的 CLI'
          ]
        },
        {
          title: '区别',
          list: [
            '数据流向不同, react 是单向数据流, vue 是双向数据流',
            '组件通信不同, react 使用回调来进行通信, vue 使用事件和回调两种',
            'diff 算法不同, react 主要使用 diff 队列保存需要更新的 patch 树, 再统一批量更新',
            'vue 使用双向指针, 边对比, 边更新'
          ]
        }
      ]
    },
    '3': {
      title: '说说你对 SPA 的理解',
      data: [
        {
          title: '什么是 SPA',
          list: [
            'SPA (single-page application), 翻译过来就是单页面应用',
            '通过动态重写当前页面来与用户交互, 避免页面切换打断用户体验',
            '所有必要的代码(HTML,CSS,JS)都通过单个页面加载, 或者根据需要动态装载资源到页面',
            '举个例子, 就是一个杯子, 可以装牛奶, 也可以装水, 变的是杯子里的内容, 而杯子始终是那个杯子'
          ]
        },
        {
          title: '单页面应用的优缺点',
          children: [
            {
              title: '优点',
              list: [
                '即时性、网站的可移植性和可访问性',
                '用户体验好、快, 内容的改变不需要重新加载整个页面',
                '良好的前后端分离, 分工更明确'
              ]
            },
            {
              title: '缺点',
              list: ['不利于SEO', '首屏渲染相对较慢']
            }
          ]
        }
      ]
    },
    '4': {
      title: '说说你对 VUE 生命周期的理解',
      data: [
        {
          title: '生命周期是什么',
          list: [
            '基本含义通俗的将: 就是"从摇篮到坟墓"',
            'Vue 实例从创建到销毁的过程就是生命周期',
            '创建->初始化数据->编译模板->挂载DOM->渲染->更新->渲染->卸载 等一系列过程'
          ]
        },
        {
          title: '生命周期有哪些',
          children: [
            {
              title: '总共可以分为8个阶段',
              children: [
                {
                  title: '创建前后',
                  list: ['beforeCreate: 组件实例创建之初', 'created: 组件实例已完全创建']
                },
                {
                  title: '载入前后',
                  list: ['beforeMount: 组件挂载之前', 'mounted: 组件挂载到实例上之后']
                },
                {
                  title: '更新前后',
                  list: ['beforeUpdate: 组件数据发生变化, 更新之前', 'updated: 数据更新之后']
                },
                {
                  title: '销毁前后',
                  list: ['beforeCreate: 组件实例销毁之前', 'created: 组件实例销毁之后']
                },
                {
                  title: '使用缓存组件',
                  list: ['activated: 缓存组件激活时', 'deactivated: 缓存组件停用时']
                },
                {
                  title: '子孙组件错误时',
                  list: ['errorCaptured: 捕获子孙组件错误时被调用']
                }
              ]
            }
          ]
        },
        {
          title: '数据请求在 created 和 mouted 的区别',
          list: [
            '基本含义通俗的将: 就是"从摇篮到坟墓"',
            'Vue 实例从创建到销毁的过程就是生命周期',
            '创建->初始化数据->编译模板->挂载DOM->渲染->更新->渲染->卸载 等一系列过程'
          ]
        }
      ]
    }
  }
  return obj[id]
}
