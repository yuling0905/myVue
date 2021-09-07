<template>
  <div class="about">
    <ul>
      <li>2</li>
      <li>3</li>
      <li>5</li>
    </ul>
    {{ this.isGetterLoading }}
    <button @click="setLoading(true)">触发loading</button>
    <button @click="setLoading(false)">关闭loading</button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// import { getUserAuth } from "@/views/list/index.js";
export default {
  data() {
    return {};
  },
  mounted() {},
  computed: {
    ...mapGetters(["isGetterLoading"]),
  },
  methods: {
    ...mapActions(["setLoading"]),
  },
};
</script>
