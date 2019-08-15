<template>
    <div>
        <h2>{{msg}}</h2>
        <h2>{{$store.state.count}}</h2>   <!-- 取store里面值 -->   
        <p>
            <button @click="$store.commit('reduce')">-</button>  <!-- //commit提交触发事件 -->
            <button @click="$store.commit('add')">+</button>
            
        </p>
    </div>
</template>
<script>
import store from '@/vuex/store'  //引用store
export default {
    name:'count',
    data(){
        return{
            msg:'hello vuex'
        }
    },
    store  //使用
}
</script>