<template>
  <section class="sidebar">
    <div :class="{neuMorpItem:morphism}" class="item">
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

      <i class="bi bi-linkedin"></i>
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
      morphism:false
    };
  },


 

  methods: {
    //sidebar toogle
    openClose() {
      this.open = !this.open;
      this.$emit("sideBar", this.open);
    },
    // neu or glass
    morphismToggle(){
      this.morphism=!this.morphism
      this.$emit('morp', this.morphism)

    }
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

<style >
/* .sidebar {
  position: absolute;
  height: 300px;
  width: 100%;
}

.changeGlass {
  position: absolute;
  top: 25%;
  left: 103%;
  width: 100px;
  background-color: rgba(128, 0, 128, 0.276);
}

.changeColorOpacity {
  position: absolute;
  top: 10%;
  left: 103%;
  width: 100px;
  background-color: #dcc58f;
}
.colorInput {
  position: absolute;
  top: 40%;
  left: 103%;
  width: 40px;
  height: 40px;
} */

/* @media only screen and (max-width: 768px) {
  .changeGlass {
    position: absolute;
    top: 80%;
    left: 93%;
    width: 100px;
    background-color: rgba(128, 0, 128, 0.276);
    transform: rotate(-90deg);
  }

  .changeColorOpacity {
    position: absolute;
    top: 80%;
    left: 103%;
    width: 100px;
    background-color: #dcc58f;
    transform: rotate(-90deg);
  }
  .colorInput {
    position: absolute;
    top: 10%;
    left: 97%;
    width: 40px;
    height: 40;
    transform: rotate(-90deg);
    z-index: 1;
  }
  .changeMen {
    z-index: 1;
  }
} */

/* .neuMorpItem{
  background: #131419;
  border: none;
  border-radius: 50px;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.05),
    5px 5px 15px rgba(0, 0, 0, 0.5);
}

.neuMorpItem i {
  color: rgb(154, 154, 154);
}

.neuMorpItem i:hover {
  color: rgb(69, 68, 68);
} */
</style>
