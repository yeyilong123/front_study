<template>
    <div>
        {{ count() }}
        ----
        <button @click='add()'>++</button>
        <button>--</button>
    </div>
</template>

<script>
    export default {
        computed: {
            count(){
                return $store.state.count;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>