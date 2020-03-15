<template>
  <div>
    <!-- 推荐 -->
    <div class="homeRecommend">
      <div v-for="(item) in recommend"  class="homerecommend" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" alt srcset />
          <p>{{item.title}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  components: {},

  computed: {},

  //   mounted: {},

  methods: {}
};
</script>
<style>
.homeRecommend{
    padding: 15px 0px;
    width: 100%;
    display: flex;
}
.homerecommend{
    text-align: center;
    flex: 1;
}
.homerecommend img{
      width: 5rem;
    height: 5rem;
    margin-bottom: 5px;
}
</style>