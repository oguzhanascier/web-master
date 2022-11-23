<template>
  <!-- <div class="container-fluid" :class="{ neuCont: morp }">
    <Container :setData="cardList" :dptoggle="toggle"  @moon="morp = $event"></Container>
    <NewItem @reData="cardList.push($event)" @toggle="toggle=$event" :itemMorp="morp" ></NewItem>
  </div> -->
  <Home></Home>

</template>

<script>
import Container from "./components/Container.vue";
import NewItem from "./components/NewItem.vue";
import Home from "./components/Home.vue";
export default {
  components: {
    Container,
    NewItem,
    Home,
  },
  data() {
    return {
      cardList: [],
      morp: null,
      toggle: false,
    };
  },

  mounted() {
    if (localStorage.cardList) {
      this.cardList = JSON.parse(localStorage.cardList);
    }
    if (localStorage.cssMorp) {
      this.morp = JSON.parse(localStorage.cssMorp);
    }
  },
  watch: {
    cardList(newNotes) {
      localStorage.cardList = JSON.stringify(newNotes);
    },
  },
};
</script>

<style>
/* body { */

/* @import './assets/style/main' */

/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */
/* body {  */
/* Importing a font from google fonts. */
/* @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap");
  font-family: "Open Sans", sans-serif;

  min-height: 100vh; */
/* Centering the content of the page. */
/* display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  z-index: -9999;
  position: relative;

}  */
.container-fluid {
  background: url(./assets/shapelined-_JBKdviweXI-unsplash.jpg);
  background-position: center center;
  background-size: 100% 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  transition: 0.3s ease-in-out;
}



</style>
