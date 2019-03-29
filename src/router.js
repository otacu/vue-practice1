import Vue from 'vue'
import Router from 'vue-router'
import Layouts from '@/components/layouts' // 导入layouts.vue 组件

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', // 访问路径
      name: 'Layouts', // 路径名
      component: Layouts // 访问的组件,即访问‘/’,它会加载 Layouts 组件所有的内容。
    }
  ]
})
