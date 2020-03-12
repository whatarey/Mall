<template>
  <div class="Tabber">
    <tab-bar>
      <!----组件  使用slot 插槽占用空间 -->
      <tab-bat-item path="/home" addClassactive="#4240da">
        <!----再来子组件  插入 slot 插槽占用的空间 然后又套用了两个slot 来占用空间  https://www.bilibili.com/video/av89760569?p=120 -->
        <img slot="tabbaritem-icon" src="@/assets/img/home.svg" />
        <img slot="tabbaritem-icon-active" src="@/assets/img/home_active.svg" />
        <div slot="tabbaritem-text">首页</div>
      </tab-bat-item>
      <tab-bat-item path="/cart">
        <img slot="tabbaritem-icon" src="@/assets/img/cat.svg" />
        <img slot="tabbaritem-icon-active" src="@/assets/img/cat_active.svg" />
        <div slot="tabbaritem-text">购物车</div>
      </tab-bat-item>
      <tab-bat-item path="/category">
        <img slot="tabbaritem-icon" src="@/assets/img/menu.svg" />
        <img slot="tabbaritem-icon-active" src="@/assets/img/menu_active.svg" />
        <div slot="tabbaritem-text">菜单</div>
      </tab-bat-item>
      <tab-bat-item path="/profile">
        <img slot="tabbaritem-icon" src="@/assets/img/my.svg" />
        <img slot="tabbaritem-icon-active" src="@/assets/img/my_active.svg" />
        <div slot="tabbaritem-text">我的</div>
      </tab-bat-item>
      <tab-bat-item path="/help">
        <img slot="tabbaritem-icon" src="@/assets/img/help.svg" />
        <img slot="tabbaritem-icon-active" src="@/assets/img/help_active.svg" />
        <div slot="tabbaritem-text">关于</div>
      </tab-bat-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBatItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBarItem",
  components: {
    TabBar,
    TabBatItem
  },

  // computed: {},

  methods: {}
};
</script>
<style> 
.Tabber {
  margin-top: 100px;
} 
</style>