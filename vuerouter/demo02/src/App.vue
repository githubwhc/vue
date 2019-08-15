<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <br />

    <div>
      <button @click="goback">后退</button>
      <button @click="gogo">前进</button>
      <button @click="gohome">返回首页</button>
    </div>

    <router-link to="/">home</router-link>
    <router-link to="/params/192/params">params</router-link>
    <router-link to="/gohome">gohome</router-link>
    <router-link to="/goparams/19/goparams">goparams</router-link>
    <router-link to="/hi1">hi1</router-link>
    <router-link to="/hi1alias">hi1alias</router-link>
    <router-link to="/xxxxx">我是瞎写的</router-link>
    <transition name="fade" mode="out-in">
      <!-- //路由过渡动画，transition包含router-view   -->
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  methods:{
    goback() {
      this.$router.go(-1); //路由跳转
    },
    gogo(){
      this.$router.go(1);//历史的前进后退
    },
    gohome(){
      this.$router.push('/'); //指定路由跳转
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity: 0px;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
