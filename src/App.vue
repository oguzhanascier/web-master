<template>
  <div class="container-fluid" :class="{ neuCont: morp }">
    <Container :setData="cardList" :dptoggle="toggle"  @moon="morp = $event"></Container>
    <NewItem @reData="cardList.push($event)" @toggle="toggle=$event" :itemMorp="morp" ></NewItem>
  </div>
  <!-- <Home></Home> -->

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



/* .neuCont{
  background: #131419; */

/* } */
/* .container {
  top: 13%;

  display: flex;
  position: relative;
  justify-content: start;
  width: 100%;
  min-height: 100vh !important;
  border-radius: 30px;
  margin-top: 3%;
  margin-bottom: 3%;
} */

/* .card {
  background: #00000008;
  backdrop-filter: blur(8px);
  margin: 1.5rem;
  padding: 1.3rem;
  margin-bottom: 1rem;
  width: 350px;
  height: 450px;
  left: 50%;
  transform: translate(-50%);
  border: none;
  border-top: 3px solid rgba(255, 255, 255, 0.936);
  border-right: 1px solid rgba(255, 255, 255, 0.664);
  border-radius: 30px;
  transition: 0.3s ease-in-out;
  color: white;
} */

/* @media only screen and (max-width: 1232px) { */
/* .card { */
/* top: 80%; */
/* width: 300px;
    height: 450px;
    left: 45%;
    transform: translate(-50%);
    margin-bottom: 1rem;
  } */

/* .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .row {
    margin-top: 3%;
  }
}

@media only screen and (max-width: 768px) {
  .row {
    margin-top: 30%;
  }
} */

/* .item {
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: space-between;
  top: 15%;
  padding: 10px;
  border-radius: 10px;
  border-top: 3px solid #ffffff;
  border-right: 2px solid #ffff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.364);
  border-left: 1px solid rgba(255, 255, 255, 0.364);
  transition: 0.3s ease-in-out;

  z-index: 1;
} */

/* @media only screen and (max-width: 768px) {
  .item {
    position: absolute;
    display: flex;

    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 50px;
    bottom: -10%;
    left: 50%;
    transform: translate(-50%);
    z-index: 1;
  }
}

@media only screen and (max-width: 992) {
  .item {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 50px;
    bottom: -10%;
    left: 20%;
    z-index: 1;
  }
} */

/* .bi-github,
.bi-linkedin,
.bi-window,
.bi-moon {
  transition: 0.3s ease-in-out;
  font-size: 30px;
  margin: 10px 10px 10px 10px;
  color: #7524ab83;
  text-shadow: 0mm 0mm 1mm rgba(11, 6, 6, 0.478);
  cursor: pointer;
}

.bi-github,
.bi-linkedin,
.bi-window,
.bi-moon:hover {
  backdrop-filter: blur(1rem);
  transition: 0.3s ease-in-out;
  color: #ffffff;
} */

/* .write {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: rgba(255, 255, 255, 0.089);
  width: 5rem;
  height: 5rem;
  bottom: 3.5%;
  right: 4.4%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  box-shadow: 0mm 0mm 1mm white;
  transition: 0.3s ease-in-out;

}
.write i {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 5rem;
  height: 5rem;
  color: white;
}
.write:hover {
  cursor: pointer;
  transition: 0.3s ease-in-out;
  box-shadow: 0mm 0mm 1mm purple;
  background: rgb(255, 255, 255);
}

.bi-pen {
  font-size: 26px;
}
.bi-pen:hover {
  transition: 0.3s ease-in-out;
  color: purple;
} */
</style>
