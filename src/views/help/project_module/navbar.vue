
<template>
  <div>
    <h2>Navbar</h2>
    <div>
      <p>Navbar 我们这里 轻度封装</p>
      <ul>
        <li>
          <p>第一步,创建一个vue 文件</p>
        </li>
        <li>
          <p>
            第二步,创建 一个div
            div下面包含三个div,每个div下面又有一个slot 插槽
          </p>如图:
          <div class="container">
            <img class=".img-fluid" src="@/assets/img/navbar1_create.png" alt srcset />
          </div>
          <p>然后需要用到的地方就调用:</p>
          <div class="container">
            <img class=".img-fluid" src="@/assets/img/navbar2_create.png" alt />
          </div>
          <div class="container">
            <h2>效果</h2>
            <img src="@/assets/img/xiaoguo.png" alt srcset />
          </div>
        </li>
      </ul>
    </div>
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
@import "../../../assets/css/help.css";
</style>