<template>
  <div class="about">
    <h1>This is an 12121 page</h1>
    <a href="/api/s?ie=UTF-8&wd=vue.config.js">测试代理配置</a>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(process.env, "---");
  },
  methods: {},
};
</script>
