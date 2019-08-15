
<template>
  <div>
    <h2>{{msg}}</h2>

    <p>
      newsid:{{$route.params.newsid}}
      <!--  //获取参数 -->
    </p>
    <p>newstitle:{{$route.params.newstitle}}</p>
  </div>
</template>
<script>
export default {
  name: "params",
  data() {
    return {
      msg: "params page"
    };
  },
  beforeRouteEnter: (to, from, next) => {
    //模板中的钩子函数
    console.log("准备进入params路由模板");
    next(); //不加next不会执行下去
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开params路由模板");
    next();
  }
};
</script>
<style>
</style>