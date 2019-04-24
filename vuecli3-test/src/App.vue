<template>
  <div id="app">
    <router-link to="/">主页</router-link>
    ----
    <router-link to="/A">A页面</router-link>
    ----
    <router-link to="/B">B页面</router-link>
    ----
    <router-link to="/C">传参页面</router-link>
    ----
    <router-link to="/D">重定向到主页</router-link>
    ----
    <router-link to="/home_othername">别名到主页</router-link>
    ----
    <router-link to="/count">count</router-link>

    <transition name="fade">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<style>
    .fade-enter{
      opacity: 0;
    }
    .fade-enter-active{
      transition: opacity 3s ease 0.5s;
    }
    .fade-enter-to{
      opacity: 1;
    }
    /* .fade-leave{
      opacity: 1;
    }
    .fade-leave-active{
      transition: opacity 3s ease 0.5s;
    }
    .fade-leave-to{
      opacity: 0;
    } */
</style>
