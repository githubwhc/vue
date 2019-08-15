import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/params'
import Hi1 from '@/components/hi1'
import Error from '@/components/error'
Vue.use(Router)

export default new Router({
  mode:'history',  //history模式地址栏没有#号，默认是hash模式
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      // alias:'/HelloWorldalias' //这儿使用别名不起作用
    },
    {
      path: '/params/:newsid(\\d+)/:newstitle',  //url传参   正则定义传递类型(\\d+)
      name: 'params',
      component: Params,
      beforeEnter:(to,from,next)=>{   //钩子函数
        console.log(to)  //去哪儿path
        console.log(from) //从哪儿来
        console.log(next)
        next(true) //true跳转  false不跳转  {path:'/'}跳转路径
      }
    },
    {         //重定向
      path:'/gohome',
      redirect:'/'
    },{       //重定向且传参
      path:'/goparams/:newsid(\\d+)/:newstitle',
      redirect:'/params/:newsid(\\d+)/:newstitle'

    },{
      path:'/hi1',
      component:Hi1,
      alias:'/hi1alias'  //别名，重定向改变了路径,别名路径不变
    },{
      path:'*',//404页面
      component:Error
    }
  ]
})
