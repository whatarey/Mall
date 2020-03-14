

<template>
  <div class="home">
    <nav-bar class="home_navbar">
      <div class="home_navbar_content" slot="content">首页精选</div>
    </nav-bar>
    <home-swiper :banners="banner"></home-swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomedata } from "network/home";
import homeSwiper from "views/home/childComps/homeSwiper";

export default {
  name: "home",
  data() {
    return {
      banner: [],
      recommends: []
    };
  },

  components: {
    NavBar,
    homeSwiper
  },
  created() {
    getHomedata().then(data => {
      this.banner = data.banner.list;
      this.recommends = data.recommend.list;
      console.log("Home 页面数据请求", data.recommend.list);
    });
  },
  computed: {},
  methods: {}
};
</script>

<style>
.home_navbar {
  background-color: pink;
}
</style>