<template>
    <div>
        <h2>
            {{msg}}-{{$route.params.username}}-{{$route.params.id}}
       </h2> <!-- //$route方法获取参数 -->
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'hi2',
    data(){
        return{
            msg:'hi2'
        }
    }
}
</script>
<style scoped>

</style>