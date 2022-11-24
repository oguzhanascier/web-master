<template>
  <div class="homeContainer">
    <div class="header">
      <div class="banner">Zamazingo</div>
      <div class="todo">TODO</div>
      <div class="faq">FAQ</div>
    </div>
    <div class="row d-flex justify-content-center repROW pb-5">
      <div class="col-lg-5 col-md-8 p-0 ms-2 repoCont">
        <div class="repo">
          <div class="i-m">I'm a</div>
          <div class="flash">
            <h2>Developer</h2>
          </div>
          <ul class="skill">
            <li><i class="fa-brands fa-html5"></i></li>
            <li><i class="fa-brands fa-css3-alt"></i></li>
            <li><i class="fa-brands fa-sass"></i></li>
            <li><i class="fa-brands fa-bootstrap"></i></li>
            <li><i class="fa-brands fa-js"></i></li>
            <li><i class="fa-brands fa-vuejs"></i></li>
          </ul>
          <a href="https://github.com/oguzhanascier"
            ><i class="fa-brands fa-github"></i
          ></a>
          <a href="https://www.linkedin.com/in/oguzhanascier/"
            ><i class="fa-brands fa-linkedin"></i
          ></a>
        </div>
      </div>

      <div class="col-lg-5 col-md-8 p-0 ms-2 repoCont">
        <h2 class="repoTitle">My GitHub</h2>
        <div class="repo">
          <div class="row repROW">
            <div class="col-5 gitRepo w-100">
              <ul
                class="repoGroup"
                v-for="repo in repositories"
                :key="repo.title"
              >
                <li class="repoItem">
                  <i class="bi bi-cpu"></i
                  ><a :href="repo.link" class="ms-3">{{ repo.title }} </a>
                  <span></span><strong>{{ repo.lang }}</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="row faqsRow">
      <div class="col-lg-6 col-md-12">
        <div class="presentation not-selectable">
          <div class="col-lg-12 p-0 ms-2">
            <div class="card neuMorpCard">
              <div class="card-body scrollText">
                <span class="trashSpan"
                  ><i class="fa-solid fa-trash neuMorpTrash"></i
                ></span>

                <h5 class="card-title neuTitle">Title</h5>

                <h6 class="card-subtitle mb-2 text-muted">Date</h6>
                <p class="card-text neuNext">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis eos iste nihil placeat optio facere iusto tenetur
                  inventore nisi voluptatum. Veniam id voluptatem sequi.
                  Inventore laudantium incidunt quibusdam repellat dolor.
                </p>
              </div>

              <div class="neuMorpTimer">
                <i class="bi bi-alarm neuMorpStop"></i>
                <span style="margin-left: 15px" class=""
                  >You can set the timer</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12">
        <div class="presentation">
          <div class="col-lg-12 col-md-12 col-sm-12 p-4 ms-2">
            <h2 class="text-center display-6 w-75 mb-5" style="color: #663399">
              How does it work?
            </h2>
            <p class="text-light w-75">
              We do not keep your data. All your data is stored in your browser
              and therefore we cannot access it.
            </p>
            <p class="text-light w-75 mb-5 mt-5">
              Therefore, you cannot access your information from different
              devices...
            </p>
            <p class="text-light w-75">
              Your internet data is not used after accessing this website
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="row generateRow">
      <div class="col-lg-6 col-md-12">
        <div class="genaretor">
          <span class="forGlass mb-3"> </span>
          <div class="card">
            <h3 class="text-center">CSS</h3>
            <p class="mt-3 not-selectable">backdrop-filter: blur( 4px );</p>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12">
        <img
          src="../assets/busy-project-manager-overwhelmed-by-work.png"
          class="img-fluid"
          alt=""
        />
      </div>
      <div class="col-12">
        <p class="text-center glassText">
          You can take note moreover you can get css code
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repositories: [
        {
          title: "pokedex",
          pureJS: true,
          link: "https://github.com/oguzhanascier/Pokedex",
          lang: "JS",
        },
        {
          title: "pokedex with vue",
          pureJS: false,
          link: "https://github.com/oguzhanascier/pokedex-vue-axios",
          lang: "Vue",
        },

        {
          title: "this website (not all codes) ",
          pureJS: false,
          link: "https://github.com/oguzhanascier/web",
          lang: "Vue",
        },

        {
          title: "todo",
          pureJS: true,
          link: "https://github.com/oguzhanascier/CRUD-1",
          lang: "JS",
        },
        {
          title: "todo with vue",
          pureJS: false,
          link: "https://github.com/oguzhanascier/todo",
          lang: "Vue",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin topMargin {
  margin-top: 15px;
}

@mixin social {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 15%;
  bottom: 10px;
  width: 75px;
  height: 75px;
  font-size: 36px;
  color: #663399;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  box-shadow: -1px -1px 4px #fffff7b2, 2px 2px 5px rgba(94, 104, 121, 0.288);
  backdrop-filter: blur(1rem);
  &:hover {
    color: #663399a8;
    box-shadow: -1px -1px 4px #fffff7b2 inset,
      2px 2px 5px rgba(94, 104, 121, 0.288) inset;
  }
}

ul li {
  list-style: none;
}

.homeContainer {
  width: 100vw;
  height: 150vh;
}
header {
  position: fixed;

  width: 100vw;
}

.header {
  display: grid;
  height: 50px;
  grid {
    template-columns: repeat(6, 1fr);
    template-rows: 1fr;
    column-gap: 0px;
    row-gap: 0px;
  }
  background: #663399;
}

.banner {
  grid-area: 1 / 2 / 2 / 3;
  @include topMargin();
}
.todo {
  grid-area: 1 / 4 / 2 / 5;
  @include topMargin();
}
.faq {
  grid-area: 1 / 5 / 2 / 5;
  @include topMargin();
}
.row {
  margin: 0;
  padding: 0;
}

.repROW {
  background: #dde1e7;
  padding: 5% 1%;
  width: 100%;
}

.repoCont {
  display: flex;
  justify-content: center;
  margin-top: 2%;
  position: relative;
}

.repo {
  display: flex;
  position: relative;
  height: 500px;
  width: 90%;
  padding: 20px;
  box-shadow: -1px -1px 4px #fffff7b2, 2px 2px 5px rgba(94, 104, 121, 0.288);
}

.skill {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 250px;
  width: 350px;
  transform: translate(-50%, -45%);
  backdrop-filter: blur(1rem);
  top: 50%;
  left: 15%;
  box-shadow: -1px -1px 4px #fffff7b2, 2px 2px 5px rgba(94, 104, 121, 0.288);
}

.fa-html5,
.fa-css3-alt,
.fa-sass,
.fa-bootstrap,
.fa-js,
.fa-vuejs {
  color: #663399;
  font-size: 36px;
}

.fa-css3-alt {
  margin-left: 40px;
}

.fa-sass {
  margin-left: 80px;
}

.fa-bootstrap {
  margin-left: 120px;
}

.fa-js {
  margin-left: 160px;
}

.fa-vuejs {
  margin-left: 200px;
}

.fa {
  display: flex;
  bottom: 100px;
}
.fa-github {
  margin-left: 10px;
  @include social();
}

.fa-linkedin {
  margin-left: 130px;
  @include social();
}

.flash {
  position: relative;
  top: 5px;
  left: 30px;
}

.i-m {
  position: relative;
  top: 0;
  left: 20px;
  font-size: 35px;
}

.flash::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 2px;
  height: 45px;
  background: #663399;
  animation: blinkCursor 0.9s steps(3) infinite;
}

@keyframes blinkCursor {
  0%,
  75% {
    opacity: 1;
  }
  76%,
  100% {
    opacity: 0;
  }
}

.flash h2 {
  position: relative;
  color: #663399;
  letter-spacing: 2px;
  font-size: 35px;
  text-transform: uppercase;
  animation: flashTyping 8s steps(9) infinite;
  overflow: hidden;
}

@keyframes flashTyping {
  0%,
  90%,
  100% {
    width: 0;
  }
  30%,
  60% {
    width: 232.42px;
  }
}

.repoGroup {
  position: relative;
  top: -20px;
  width: 100%;
  height: 70px;
}

.repoGroup li {
  display: flex;
  margin-top: 20px;
  box-shadow: -1px -1px 4px #fffff7b2, 2px 2px 5px rgba(94, 104, 121, 0.288);
  padding: 15px;
  width: 90%;
  height: 100%;
}

.repoItem span {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #663399;
  bottom: 15%;
  right: 20%;
}

.repoItem strong {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  bottom: 20%;
  right: 15%;
}

a {
  text-decoration: none;
  color: #663399;
  font-size: 18px;
  cursor: pointer;
  font-weight: 600;
}

.bi-cpu {
  color: #663399;
}

.repoTitle {
  position: absolute;
  left: -150px;
  letter-spacing: 15px;
  font-size: 60px;
  bottom: 200px;
  color: #dde1e7;
  z-index: 1;
  text-shadow: -1px -1px 4px #fffff7b2, 2px 2px 5px rgba(94, 104, 121, 0.288);

  transform: rotate(-90deg);
}

.faqsRow {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 75%;
  padding-top: 6%;
  padding-bottom: 6%;
  position: relative;
  background: #131419;
}
.neuMorpCard {
  padding: 30px;
  width: 50%;
  height: 500px;
  color: #999;
}

.presentation {
  height: 100vh;
}

.not-selectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.generateRow {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 100%;
  background: #663399;
}

.genaretor {
  position: relative;
}

.card {
  backdrop-filter: blur(0.3rem);
  top: 100px;
}

.forGlass {
  content: "";
  width: 100%;
  height: 5px;
  position: absolute;
  margin-bottom: 10px;
  top: 50%;
  background: rgba(255, 255, 255, 0.27);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
