<template>
  <div id="app">
  <div>
      <router-link to='/'>首页</router-link>
      <router-link to='/hi'>hi页面</router-link>  
      <router-link to='/hi/hi1'>hi1页面</router-link> <!--  //子路由 -->
      <router-link :to="{name:'hi2',params:{username:'whc',id:'123'}}">hi2页面</router-link>
      <!-- //router-link传参  :绑定to  name和路由中的配置一致，params可以传递多个 -->

  </div>
   <p>{{$route.name}}</p>  
   <!-- vue路由定义的方法，获取路由的name值 -->


    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
