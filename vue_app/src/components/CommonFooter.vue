<template>
  <div>
    <div class="footer">
      <ul class="footer-list">
        <li>
          <router-link to="/movie">电影</router-link>
        </li>
        <li>
          <router-link to="/music">音乐</router-link>
        </li>
        <li>
          <router-link to="/book">书籍</router-link>
        </li>
        <li>
          <router-link to="/photo">图片</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
    .footer{
      position: fixed;
      bottom: 0px;
      height: 1rem;
      background: #f00;
      width: 100%;
      line-height: 1rem;
    }

    .footer-list{
      display: flex;
    }

    .footer-list li{
      flex: 1;
      text-align: center;
      color: #fff;
    }

    .footer-list a{
      color: #000;
      outline: none;
    }

    .footer-list a.router-link-active{
      color: #fff;
    }
</style>