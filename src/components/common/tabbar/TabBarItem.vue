<template>
  <div class="tabbarItem" @click="currindexfun">
    <div v-if="!isactivate">
      <slot name="tabbaritem-icon"></slot>
    </div>
    <div v-else>
      <slot name="tabbaritem-icon-active"></slot>
    </div>
    <div :style="isactivate? 'color:'+addClassactive:''">
      <slot name="tabbaritem-text"></slot>
    </div>
  </div>
</template> 

<style>
.tabbarItem {
  flex: 1;
  height: 49px;
  cursor: pointer;
}
.tabbarItem img {
  height: 24px;
  height: 24px;
}
</style>
 
<script>
export default {
  name: "TabBatItem",
  props: {
    path: String,
    addClassactive: {
      type: String,
      default: "red"
    }
  },
  computed: {
    isactivate() {
      console.log("------");
      console.log(this.$route.path == this.path);

      console.log("", this.path);
      console.log("", this.$route.path);
      console.log("-------");
      return this.$route.path == this.path; // this.$route.path.indexOf(this.path) !== -1;
    }
  },

  components: {},
  methods: {
    currindexfun() {
      // console.log(this.path);
      this.$router.replace(this.path);
    }
  }
};
</script>