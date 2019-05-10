<template>
  <div>
    <div class="header">
      <span class="header-btn">首页</span>
      <span class="header-title">电影</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
    .header{
        height: 1rem;
        background: #f00;
        line-height: 1rem;
        position: fixed;
        top: 0px;
        width: 100%;
    }

    .header-btn{
      color: #fff;
    }

    .header-title{
      color: #fff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
</style>