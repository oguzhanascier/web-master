<template>
  <div class="homeContainer">
    <div class="header">
      <div class="banner">Zamazingo</div>
      <div class="todo">TODO</div>
      <div class="faq">FAQ</div>
    </div>
    <div class="row d-flex justify-content-center repROW">
      <div class="col-lg-5 col-md-8 p-0 ms-2 repoCont">
        <div class="repo">
          <div class="wrapper">
            <div class="static-txt">I'm</div>
            <ul class="dynamic-txts">
              <li><span>Oguzhan</span></li>
              <li><span>a Front-end</span></li>
              <li><span>Developer</span></li>
            </ul>
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
      <div class="col-lg-5 col-md-8 col-sm-5 p-0 ms-2 repoCont">
        <div class="repo">ddasdasd</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  padding: 2% 1%;
}

.repoCont {
  display: flex;
  justify-content: center;
  margin-top: 2%;
}

.repo {
  display: flex;
  position: relative;
  height: 500px;
  width: 90%;
  padding: 20px;
  box-shadow: -1px -1px 4px #fffff7b2, 2px 2px 5px rgba(94, 104, 121, 0.288);
}

.wrapper {
  display: inline-flex;
}

.wrapper .static-txt {
  font-size: 60px;
  font-weight: 400;
}

.wrapper .dynamic-txts {
  line-height: 90px;
  height: 90px;
  overflow: hidden;
}

.dynamic-txts li {
  list-style: none;
  font-size: 60px;
  font-weight: 500;
  color: #663399;
  word-break: break-all;
  position: relative;
  top: 0;
  animation: slide 6s steps(4) infinite;
}

.dynamic-txts li span {
  position: relative;
}
.dynamic-txts li span::after {
  content: "";
  position: absolute;
  left: 0;
  margin-top: 13px;
  height: 110%;
  width: 100%;
  background: #dde1e7;
  border-left: 2px solid #663399;
  animation: typing 1.5s steps(10) infinite;
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

@keyframes typing {
  100% {
    left: 100%;
    width: 70%;
    margin: 0 35px 0 35px;
  }
}

@keyframes slide {
  100% {
    top: -360px;
  }
}
</style>
