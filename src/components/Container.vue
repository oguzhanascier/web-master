<template>
  <div class="relative">
    <input
      type="text"
      v-model="searchInput"
      class="search"
      placeholder=" Search Keywords..."
      :class="[{ neuMorpSearch: morpToggle }, {display:dptoggle}]"
    />

    <SideBar
      @range="blurV = $event"
      @rangeC="colorV = $event"
      @rgba="rgbaC = $event"
      @sideBar="isOpen = $event"
      @morp="morpToggle = $event"
      :class="[{display:dptoggle}]"
    ></SideBar>

    <div class="container">
      <div class="row d-flex justify-content-around">
        <!-- loop -->
        <div
          class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-8 col-xs-12 mb-5"
          v-for="(item, index) in filteredPosts"
          :key="item.id"
        >
          <!--##############-->

          <Card
            :sendItems="item"
            :customBar="isOpen"
            :deleteCard="deleteItem"
            :customCard="customStyle"
            :cardIndex="index"
            :moon="morpToggle"
          ></Card>
        </div>
        <div class="card customCard" :style="customStyle" v-if="isOpen">
          <div class="card-body scrollText">
            <p class="card-text">
              <h3>CSS</h3>
              {{ customStyle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import NewItem from "./NewItem.vue";
import SideBar from "./SideBar.vue";
export default {
  props: ["setData","dptoggle"],
  components: {
    NewItem,
    SideBar,
    Card,
    
  },
  data() {
    return {
      isEditing: false,
      searchInput: "",
      clock: null,
      second: 0,
      minute: 0,
      interval: null,
      completeItem: [],
      blurV: "8",
      colorV: "30",
      rgbaC: "#00000008",
      isOpen: null,
      morpToggle: null,
    };
  },
  methods: {
    //setting watch

    // delete item
    deleteItem(index) {
      this.setData.splice(index, 1);
    },
  },

  computed: {
    // search
    filteredPosts() {
      let lowerValue = this.searchInput.toString().toLowerCase();

      return this.$props.setData.filter((item) =>
        item.title.toLowerCase().includes(lowerValue)
      );
    },

    // card style
    customStyle() {
      let color = this.colorV.padStart(3, "0");

      console.log(this.blurV);

      return {
        "backdrop-filter": `blur(${this.blurV}px)`,

        "-webkit-backdrop-filter": `blur(${this.blurV}px)`,

        background:
          "rgba(" +
          parseInt(this.rgbaC.slice(-6, -4), 16) +
          "," +
          parseInt(this.rgbaC.slice(-4, -2), 16) +
          "," +
          parseInt(this.rgbaC.slice(-2), 16) +
          "," +
          "." +
          color +
          ")",

        // width: [this.blurV + "px"],
        // height: [this.blurV + "px"],
      };
    },
  },
  watch: {
    morpToggle(value) {
      this.$emit("moon", value);
    },
  },
  mounted() {
    if (localStorage.cssMorp) {
      this.morpToggle = JSON.parse(localStorage.cssMorp);
    }
  },
};
</script>

<style>
</style>
