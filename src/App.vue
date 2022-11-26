<template>
  <transition name="fade" mode="out-in">
  <router-view></router-view>

  </transition>
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

<style>

.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s ease-out;
}
.fade-leave{}
.fade-leave-active{
  transition: opacity .5s ease-out;
  opacity: 0;
}
</style>
