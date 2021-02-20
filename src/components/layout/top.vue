<template>
  <div class="top">
    <div class="top_nav">12</div>
    <div class="munu">
      {{ menus }}
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
    </div>
  </div>
</template>

<style lang="scss">
.top {
  .top_nav {
    height: 30px;
    background: purple;
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
      return deafultMenus.find((r) => r.children).children;
    },
    activeIndex() {
      return this.$route.matched.find((r) =>  r.path !== ""&&r.path !== "/user").path;
    },
  },
};
</script>

