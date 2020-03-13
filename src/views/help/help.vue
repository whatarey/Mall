<template>
  <div class="help">
    <!--  Hello Vue Ri -->
    <h1>
      <a href="https://www.bilibili.com/video/av89760569?p=147">Vue 项目与Git 绑定</a>
    </h1>
    <p>
      <strong>Vue 全家桶</strong>
      <br />
      <span>vue-cli (脚手架) npm install --global vue-cli (本项目使用)</span>
      <br />
      <span>vue-router (路由) npm install vue-router(本项目使用)</span>
      <br />
      <span>vuex (状态管理) npm install vuex --save (本项目使用)</span>
      <br />
      <span>调度工具Devtools(本项目使用)</span>
      <br />
      <span>axios --vue 推荐 请求 框架 cnpm install axios --save (本项目使用)</span>
    </p>
    <p>npm</p>
    <p></p>
    <router-link to="/help/config">第一:项目初始化配置讲解</router-link>|
    <router-link to="/help/navbar">第二:Navbar 的开发</router-link>|
    <router-link to="/help/request">第三: 网络请求封装</router-link>|
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
a.router-link-exact-active {
  color: red;
  font-weight: bold;
}
</style>