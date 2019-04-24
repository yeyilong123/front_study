<template>
    <div>
        <h1>这是传参页面</h1>
        <router-link :to="{name:'C/cChild1',params:{name: 'YYL'}}">传参子页面1</router-link>
        ----
        <router-link to="/C/cChild2/666">传参子页面2</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>