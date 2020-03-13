
<template>
  <div class="Navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  //   computed: {},

  //   mounted: {},

  methods: {}
};
</script>
<style>
.Navbar {
  display: flex;
  line-height: 44px;
  height: 44px;
  border-bottom: 2px solid #343434;
}
.content {
  flex: 1;
  /* border: 1px solid yellow; */
  text-align: center;

}
.left,
.right {
  /* border: 1px solid red; */
  width: 64px;
}
</style>