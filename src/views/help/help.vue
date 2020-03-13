<template>
  <div class="help">
    <!--  Hello Vue Ri -->
    <h1>
      <a href="https://www.bilibili.com/video/av89760569?p=147">Vue 项目与Git 绑定</a>
    </h1>
    <router-link to="/help/config">项目初始化配置讲解</router-link>|
    <router-link to="/help/navbar">Navbar 的开发</router-link>|
    <router-link to="/help/therr">第三</router-link>|
    <router-link to="/help/fle">第四</router-link>|
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  //   mounted: {},

  methods: {}
};
</script>
<style>
a.router-link-exact-active{
  color: red;
  font-weight: bold;
}
</style>