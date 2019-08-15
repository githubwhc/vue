import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={ //状态对象
    count:13
}
const mutations={   //改变状态里面的值使用mutations，里面是方法
    add(state,n){ //state为默认的值，n为传递的参数
        state.count+=n;
    },
    reduce(state){
        state.count--;
    }
}

const getters={  //过滤计算定义
    count:function(state){
        return state.count+=100
    }
}

const actions={    //异步修改状态
    addAction(context){ //context上下文对象
        context.commit('add',10)//调用add  
        setTimeout(() => {  //显示异步
            ()=>{
                context.commit('reduce')
            }
        },5000);
        console.log('1213423')

    },
    reduceAction({commit}){
        commit('reduce')
    }
}


export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})


// const moduleA={  模块组
//     state,
//     mutations,
//     getters,
//     actions
// }

// export default new Vuex.Store({
//     modules:{a:moduleA}
// })