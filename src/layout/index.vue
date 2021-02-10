<template>
  <div>
    <div class="layout">
      <layout-sider></layout-sider>
      <div class="dashboard">
        <div>
          <layout-top></layout-top>
        </div>
        <div class="content">
          <div class="wrapper">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import LayoutSider from "../components/layout/slider";
import LayoutTop from "../components/layout/top";
export default {
  components: {
    LayoutSider,
    LayoutTop,
  },

  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.layout {
  margin: 0;
  padding: 0;
  .dashboard {
    padding-left: 65px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .content {
      background: #fafafa;
      overflow-y: scroll;
      padding: 30px 20px 20px 20px;
      flex: auto;
      .wrapper {
        width: 1260px;
        margin: 0 auto;
        min-height: 500px;
      }
    }
  }
}
</style>
