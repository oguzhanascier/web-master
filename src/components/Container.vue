<template>
  <div class="relative">
    <input
      type="text"
      v-model="searchInput"
      class="search"
      placeholder=" Search Keywords.."
      :class="{ neuMorpSearch: morpToggle }"
    />

    <SideBar
      @range="blurV = $event"
      @rangeC="colorV = $event"
      @rgba="rgbaC = $event"
      @sideBar="isOpen = $event"
      @morp="morpToggle = $event"
    ></SideBar>

    <div class="container">
      <div class="row d-flex justify-content-around">
        <!-- loop -->
        <div
          class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-8 col-xs-12 mb-5"
          v-for="(item, index) in filteredPosts"
          :key="index"
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
  props: ["setData"],
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
      let lowerValue = this.searchInput.toLowerCase();
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
/* .card-title {
  font-weight: 700;
  margin-bottom: 20px;
}

.trashSpan {
  position: absolute;
  top: 4%;
  right: 6%;
  border-top: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
}

.fa-trash {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(128, 0, 128, 0.341);
  color: rgb(255, 255, 255);

  width: 25px;
  height: 25px;
  border-radius: 5px;
}
.timer {
  display: flex;
  align-items: center;
}

.pl-pa {
  margin-left: 15px;
}

.pl-pa button {
  border: none;
  box-shadow: 0mm 0mm 2mm rgba(255, 255, 255, 0.587);
  border-top: 1px solid rgba(255, 255, 255, 0.585);
  border-right: 1px solid rgba(255, 255, 255, 0.427);
  border-radius: 5px;

  background: rgba(255, 255, 255, 0.369);
  color: rgba(128, 0, 128, 0.495);
  transition: 0.5s ease;
}

.pl-pa button:hover {
  box-shadow: 0mm 0mm 6mm rgba(255, 255, 255, 1);
  color: rgba(128, 0, 128, 0.795);
} */

/* .bi-alarm {
  color: #666;
  font-size: 24px;
  padding: 0;
  margin: 0;
  color: white;
  text-shadow: 0mm 0mm 2mm black;
  cursor: pointer;
} */
/* .scrollText {
  font-size: medium;
  overflow: auto;
  height: 100%;
  width: 100%;
} */
/* width */
/* ::-webkit-scrollbar {
  width: 4px;
} */

/* Track */
/* ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(128, 128, 128, 0.287);
  border-radius: 10px;
} */

/* Handle */
/* ::-webkit-scrollbar-thumb {
  background: rgba(128, 18, 206, 0.403);
  border-radius: 10px;
} */

/* .completeTimer {
  color: rgba(128, 0, 128, 0.529);
}

.active {
  display: none;
} */

/* .search {
  display: block;
  position: fixed;
  top: 2%;
  left: 50%;
  transform: translate(-50%);
  width: 400px;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.444);
  backdrop-filter: blur(0.1rem);
  border-radius: 15px;
  border: none;
  box-shadow: 0mm 0mm 1mm rgba(128, 0, 128, 0.555);
  padding: 5px 15px;
  outline: none;
  transition: 0.3s ease-in-out;
}

.neuMorpSearch {
  background: #131419;
  border: 1px solid #ffffff0b !important;
  color: #999;
  border-radius: 50px;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.05),
    5px 5px 15px rgba(0, 0, 0, 0.5);
}

.neuMorpSearch:focus {
  box-shadow: -2px -2px 6px rgba(0, 0, 0, 0.8) inset,
    2px 2px 6px rgba(0, 0, 0, 0.5) inset !important;
  color: #333; */

/* } */

/* @media only screen and (max-width: 768px) {
  .relative {
    position: relative;
  }
  .search {
    position: absolute;
    top: 0%;
    left: 50%;
    width: 350px;
    z-index: 1;
  }
} */

/* .search:focus {
  box-shadow: (0mm 0mm 1mm rgba(248, 167, 6, 0.555));
}

.blur {
  backdrop-filter: blur(9px);
}

.customCard {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
} */
</style>
