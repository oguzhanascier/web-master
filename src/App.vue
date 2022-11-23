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

.container-fluid {
  background: url(./assets/shapelined-_JBKdviweXI-unsplash.jpg);
  background-position: center center;
  background-size: 100% 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  transition: 0.3s ease-in-out;
}



</style>
