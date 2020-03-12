<template>
  <div class="help">
    <!--  Hello Vue Ri -->
    <h1>
      <a href="https://www.bilibili.com/video/av89760569?p=147">Vue 项目与Git 绑定</a>
    </h1>
    <h1>帮助文档页面</h1>
    <h1>划分 目录结构</h1>
    <ul>
      <li>
        <p>common -- > 本项目公共的 文件</p>
      </li>
      <li>
        <p>components 下面的common -- > 公共的组件 文件,可以移植到其他项目</p>
      </li>
      <li>
        <p>components content -- > 本项目公共的组件 文件</p>
      </li>
      <li>
        <p>network -- > 封装请求的文件</p>
      </li>
      <li>
        <p>views -- > 页面文件</p>
      </li>
      <li>
        <p>store -- > vuex</p>
      </li>
      <li>
        <p>routes -- > 路由</p>
      </li>
    </ul>
    <h2>css 说明</h2>
    <ul>
      <li>
        <p>normalize.css --> github 的一个css 框架 --> 保护了有价值的默认值</p>
      </li>
      <li>
        <p>base.css --> 项目基础的 css</p>
      </li>
    </ul>

    <h2>取别名</h2>
    <ul>
      <li>默认我们有一个 @ 别名 ,我们现在需要增加多个</li>
      <li class="tips">这里的assets 取别名了 需要 增加 ~assets ,而我 现在这个会报错,所以我这里,所以 使用 @/assets</li>

      <li>新建一个vue.config.js ,然后按照里面的配置取配</li>
      <li>新建 .editorconfig,复制里面内容</li>
    </ul>
    <h3>组件复用</h3>
    <ul>
      <li>
        <p>拷贝我们 上次的 tabbar组件, 放在 components 的 common</p>
      </li>
      <li>
        <p>在 components 的content 创建MainTabBarItem.vue 文件 在把 我们 tabbar 写在 App.vue 的 代码拷贝过来</p>
      </li>
      <li>
        <p>自己配置 一下 ,参考 tabbar页面的配置</p>
      </li>
    </ul>
    <h3>npm install routes 下载</h3>
    <ul>
      <li>
        <p>我们这里 是 使用 空的 项目,所有我们需要 下载路由</p>
      </li>
      <li>
        <p>在这里 我们 使用 npm install vue-routes --save (不实用 npm install vue-routes --save -dev)</p>
      </li>
      <li>
        <p>下载完毕,创建 router(我们早创建了) 以及 它下面的 index.js 文件</p>
      </li>

      <li>
        <p>然后写配置 请注意 new Vue(xxx)</p>
      </li>
    </ul>
    <h2>
      <strong>启动项目 : npm run serve</strong>
    </h2>
    <div>
      <span class="tips">Tips:</span> 这时候会出现 'vue-cli-service' 不是内部或外部命令，也不是可运行的程序 这是因为 我们 没有 cnpm install (或者使用 npm install )
    </div>

    <h2>错误处理:</h2>
    <div>
      <h3>Tabbar 路径错误:</h3>
      <p>请修改 TabBar 的 导入 路径,因为我们 加了 一个 common</p>
      <div class="errorimg">
        <img src="@/assets/img/error1.png" />
      </div>

      <h3>css 导入错误:</h3>
      <p>直接在 App.vue style 引入 @import './assets/css/base.css'</p>
      <div class="errorimg">
        <img src="@/assets/img/error2.png" />
      </div>
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
.tips {
  color: red;
  font-weight: normal;
}
.errorimg {
  width: 100%;
  box-sizing: border-box;
}
.errorimg > img {
  width: 100%;
}
.help {
  padding: 5px 10px;
  overflow: hidden;
}
</style>