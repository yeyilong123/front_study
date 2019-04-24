<template>
    <div>
        {{ $store.state.count }}
        ----
        <button @click='add()'>++</button>
        <button>--</button>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>