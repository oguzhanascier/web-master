<template>
  <section class="sidebar">
    <div :class="{ neuMorpItem: morphism }" class="item">
      <i class="bi bi-window" @click="openClose()" v-if="!morphism"></i>
      <div class="changeMen" v-show="this.open">
        <input
          class="changeGlass blur"
          type="range"
          v-model="blurInput"
          max="30"
        />
        <input
          class="colorInput"
          type="color"
          v-model="rgbaColor"
          value="#e66465"
        />
        <input
          class="changeColorOpacity"
          deafult=""
          type="range"
          v-model="colorInput"
          max="999"
        />
      </div>
      <a
        href="https://github.com/oguzhanascier"
        target="_blank"
        rel="noopener noreferrer"
        ><i class="bi bi-github"> </i
      ></a>
      
      <a
        href="https://www.linkedin.com/in/oguzhanascier/"
        target="_blank"
        rel="noopener noreferrer"
      ><i class="bi bi-linkedin"></i></a>
      <i class="bi bi-moon" @click="morphismToggle"></i>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      blurInput: null,
      colorInput: null,
      open: false,
      rgbaColor: null,
      morphism: false,
    };
  },

  methods: {
    //sidebar toogle
    openClose() {
      this.open = !this.open;
      this.$emit("sideBar", this.open);
    },
    // neu or glass
    morphismToggle() {
      this.morphism = !this.morphism;
      this.$emit("morp", this.morphism);
      this.open = false;
      this.$emit("sideBar", false);
    },
  },
  //  blur & color send parent & morphism

  mounted() {
    if (localStorage.cssMorp) {
      this.morphism = JSON.parse(localStorage.cssMorp);
    }
  },

  watch: {
    blurInput() {
      this.$emit("range", this.blurInput);
    },
    colorInput() {
      this.$emit("rangeC", this.colorInput);
    },
    rgbaColor(value) {
      this.$emit("rgba", value);
    },

    morphism(neu) {
      localStorage.cssMorp = JSON.stringify(neu);
    },
  },
};
</script>

<style>

</style>
