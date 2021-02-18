<template>
  <div class="about">
    <ul>
      <li>2</li>
      <li>3</li>
      <li>5</li>
    </ul>
  </div>
</template>
<script>
import {getUserAuth} from "@/views/list/index.js";
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(getUserAuth,"getUserAuth");
  },
};
</script>
