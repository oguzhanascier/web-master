<template>
  <router-view></router-view>
</template>

<script>
import ToDo from "./components/ToDo.vue";
import Home from "./components/Home.vue";
export default {
  components: {
    ToDo,
    Home,
  },
};
</script>

<style></style>
