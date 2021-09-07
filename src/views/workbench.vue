<template>
  <div class="about">
    <h1>This is an 12121 page</h1>
    <a href="/api/s?ie=UTF-8&wd=vue.config.js">测试代理配置</a>
    <a href="javaScript:;" @click="setSignStatus(true)">去登录</a>-{{this.isSignIn}}
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {},
  computed: {
    ...mapGetters(['isSignIn']),
  },
  methods: {
    ...mapActions(['setSignStatus']),
  },
};
</script>
