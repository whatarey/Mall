

<template>
  <div class="home">
    <!--  Hello Vue Ri -->
    <nav-bar  class="home_navbar"> 
        <div  class="home_navbar_content" slot="content"> 首页精选 </div>
    </nav-bar>
    <h1>首页</h1>
  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar";
export default {
  name:'home',
  data() {
    return {};
  },

  components: {
    NavBar
    },

  computed: {},

  //   mounted: {},

  methods: {}
};
</script>

<style>
.home_navbar{
 background-color: pink; 
}

</style>