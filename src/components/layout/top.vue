<template>
  <div class="top">
    <div class="top_nav">
      <div><i class="el-icon-user"></i></div>
    </div>
    <!-- <div class="munu">
      <el-menu
        class="el-menu-vertical"
        :collapse="isCollapse"
        :default-active="`${activeIndex}`"
        :router="true"
        active-text-color="#1890ff"
        mode="horizontal"
 
      >
        <el-menu-item
          v-for="menu in menus"
          :key="menu.key"
          :index="`/user/${menu.route}`"
        >
          <i :class="menu.icon"></i>
          <span slot="title">{{ menu.name }}</span>
        </el-menu-item>
      </el-menu>
    </div> -->
  </div>
</template>

<style lang="scss">
.top {
  .top_nav {
    height: 30px;
    background: #1890ff;
  }
}
</style>
<script>
import deafultMenus from "../../common/menus";
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {},
  computed: {
    menus() {
      // find找的第一个path
      const parent = this.$route.matched.find(r => r.path !== '').path.replace('/', '');
      const menu = deafultMenus.find(m => m.key === parent);
      return menu.children?menu.children:[];
    },
    activeIndex() {
      return this.$route.matched.find((r) =>  r.path !== ""&&r.path !== "/user").path;
    },
  },
};
</script>

