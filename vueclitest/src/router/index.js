import Vue from 'vue'  //引入vue
import Router from 'vue-router' //引入vue-router

import HelloWorld from '@/components/HelloWorld'  //引入hellow组件
import  Hi from '@/components/hi'
import  Hi1 from '@/components/hi1'
import  Hi2 from '@/components/hi2'
Vue.use(Router)  //全局使用router组件

export default new Router({
  routes: [  
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/hi',   
      // name:'hi',有子路由定义在这儿没用
      component:Hi,
      children:[
        {
          path:'/',  //hi模板的根目录
          name:'hi',
          component:Hi
        },
        {
          path:'Hi1',  
          name:'hi1',
          component:Hi1
        },
        {
          path:'Hi2',  
          name:'hi2',
          component:Hi2
        }
      ]
    }
  ]
})
