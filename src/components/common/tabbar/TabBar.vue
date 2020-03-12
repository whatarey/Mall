
<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template> 

<style>
#tabbar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
}
</style>
 
<script>
export default {
  name: "TabBar",
  components: {}
};
</script>