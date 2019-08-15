import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '@/components/hi1'
import Hi2 from '@/components/hi2'
Vue.use(Router)
// 一个页面分成多个路由区域   
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // component: HelloWorld
      components:{ //多个的时候用components
        default:HelloWorld,
        left:Hi1,
        right:Hi2
      }
    },
    {
      path: '/whc',
      name: 'HelloWorld',
      // component: HelloWorld
      components:{ //多个的时候用components
        default:HelloWorld,
        left:Hi2,
        right:Hi1
      }
    }
  ]
})
