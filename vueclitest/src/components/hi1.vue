<template>
    <div>
        <h2>{{msg}}</h2>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'hi1',
    data(){
        return{
            msg:'hi1'
        }
    }
}
</script>
<style scoped>

</style>