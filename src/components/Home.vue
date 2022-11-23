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
    <section class="row webRow">
      <div class="col-lg-6 col-md-12">
        <div class="presentation">
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
                <span style="margin-left: 15px">You can set the timer</span>
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
            <p class="text-light w-75">Your internet data is not used after accessing this website</p>
          </div>
        </div>
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
</style>
