<template>
    <div>
        <h2>{{msg}}</h2>
       <!--   <h2>{{$store.state.count}}</h2>  取store里面值 -->   
       
        <h2>{{count}}</h2> 
        <p>
            <button @click="reduce">-</button>  
            <!-- //commit提交触发事件 -->
            <button @click="$store.commit('add',10)">+</button>
            
        </p>
        <!-- actions -->
        <p> 
            <button @click="reduceAction">-</button>  
            
            <button @click="addAction">+</button>
            
        </p>


        
    </div>
</template>
<script>
import store from '@/vuex/store'  //引用store
import {mapState,mapMutations,mapGetters, mapActions} from 'vuex' //引用状态mapState 引用方法mapMutations
export default {
    name:'count',
    data(){
        return{
            msg:'hello vuex'
        }
    },
    // computed:{//处理store里面的值
    //     count(){
    //         return this.$store.state.count
    //     }
    // },
    // computed:mapState({
    //     count:state=>state.count    相当于count:function(state){return state.count}
    // }),
     //状态
    computed:{ //扩展运算符
        ...mapState(['count']),
        // count(){
        //    return  this.$store.getters.count;
        // }简写
        // ...mapGetters(['count'])
    },
    // methods:mapMutations(['add','reduce']),  //方法
    methods:{
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction','reduceAction'])
    },
    store  //使用
}
</script>