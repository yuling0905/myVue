<template>
  <div
    class="sider"
    @mouseenter="isCollapse = false"
    @mouseleave="isCollapse = true"
  >
    <div class="logo">
      <el-avatar fit="contain">
        <img :src="require('../../assets/logo.png')" />
      </el-avatar>
    </div>
    <div class="menu">
      <el-menu
        class="el-menu-vertical"
        :collapse="isCollapse"
        :default-active="`${activeIndex}`"
        :router="true"
        active-text-color="#1890ff"
      >
        <el-menu-item
          v-for="menu in menus"
          :key="menu.key"
          :index="`/${menu.route}`"
        >
          <i :class="menu.icon"></i>
          <span slot="title">{{ menu.name }}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="lang">
      <!-- <div v-if="false" @click="changeLanguage">{{ $t("lang") }}</div> -->
    </div>
  </div>
</template>
<script>
import deafultMenus from "../../common/menus";

export default {
  data() {
    return {
      isCollapse: true,
      buyModule:
        JSON.parse(localStorage.getItem("routeList") || "{}").buyModule || "",
    };
  },
  methods: {},
  mounted() {},
  computed: {
    activeIndex() {
      return (
        this.$route.matched.find((r) => r.path !== "").path ||
        `/${this.menus[0].route}`
      );
    },
    menus() {
      return deafultMenus;
    },
  },
};
</script>

<style lang="scss" scoped>
.sider {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 64px;
  z-index: 10;

  .logo {
    position: absolute;
    left: 0;
    right: 0;
    height: 65px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;

    ::v-deep .el-menu {
      padding-top: 65px;
      height: 100%;

      i {
        color: #999999;
        display: inline-block;
        width: 25px;
        text-align: center;
      }
      .el-menu-item {
        span {
          // padding-left: 10px;
          width: 70px;
          text-align: center;
        }
      }

      .el-menu-item:hover {
        background-color: #eaf5fe;
        i {
          color: #1890ff;
          display: inline-block;
          width: 25px;
          // text-align: center;
        }
        span {
          color: #1890ff;
        }
      }
      // .el-menu-item:nth-last-of-type(1) {
      //   position: absolute;
      //   bottom: 160px;
      //   left: 0;
      //   right: 0;
      // }

      .el-menu-item.is-active {
        border-left: 5px solid #1890ff;
        padding: 0 15px !important;
        background: #eaf5fe !important;
        .el-tooltip {
          background: #eaf5fe;
          padding: 0 15px !important;
        }
        i {
          color: #1890ff;
        }
      }
    }

    ::v-deep .el-menu-vertical:not(.el-menu--collapse) {
      width: 180px;
    }
  }

  .lang {
    position: absolute;
    left: 0;
    right: 0;
    height: 56px;
    bottom: 38px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      color: #1890ff;
      text-decoration: none;
    }
  }
}
</style>
