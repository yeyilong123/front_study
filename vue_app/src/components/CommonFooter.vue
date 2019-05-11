<template>
  <div>
    <div class="footer">
      <ul class="footer-list" :style="{background:selectMenu.bg}">
        <li v-for="(obj,index) in menu" :key='index' @click="$emit('change',index)">
          <router-link :to="obj.path">{{ obj.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['menu','selectMenu']
};
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