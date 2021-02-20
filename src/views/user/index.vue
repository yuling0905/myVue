<template>
  <div class="about">
    <router-view></router-view>
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
