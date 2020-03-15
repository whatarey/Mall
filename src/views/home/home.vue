

<template>
  <div class="home">
    <!--   头部导航  -->
    <nav-bar class="home_navbar">
      <div class="home_navbar_content" slot="content">首页精选</div>
    </nav-bar>
    <!--   头部导航  -->
    <!--   轮播图  -->
    <home-swiper :banners="banner"></home-swiper>
    <!--   轮播图  -->
    <!--   推荐  -->
    <home-recommend :recommend="recommends"></home-recommend>
    <!--   推荐  -->
  </div>
</template>

<script>
/* 组件*/
import NavBar from "components/common/navbar/NavBar";
import homeSwiper from "views/home/childComps/homeSwiper";
import HomeRecommend from "views/home/childComps/homeRecommends";

/* 请求 */
import { getHomedata } from "network/home";

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
    homeSwiper,
    HomeRecommend
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