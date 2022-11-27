<template>
  <div>
    <div class="text-area" :class="{ toggle: !isBoard }">
      <i
        class="fa-solid fa-x"
        :class="{ neuMorpFaX: itemMorp }"
        @click="close"
      ></i>
      <div>
        <input
          type="text"
          class="title text-light"
          :class="{ neuMorpTitle: itemMorp }"
          v-model="title"
          placeholder="Keyword.. (at least 3 letters)"
          ref="inputFocus"
        />

        <textarea
          class="area text-light"
          :class="{ neuMorpTextArea: itemMorp }"
          placeholder="What are you think..?"
          v-model="textInput"
        ></textarea>
        <div class="opt">
          <select
            class="min"
            :class="{ neuMorpSelect: itemMorp }"
            v-model="minute"
          >
            <option value="">Min</option>

            <option v-for="num in number"  v-bind:key="num" >{{ num }}</option>
          </select>
          <select
            class="sec"
            :class="{ neuMorpSelect: itemMorp }"
            v-model="second"
          >
            <option value="">Sec</option>
            <option v-for="num in number"  :key="num">{{ num }}</option>
          </select>
        </div>
        <button
          class="run"
          :class="{ neuMorpButton: itemMorp }"
          @click="setText"
        >
          Do it
        </button>
      </div>
    </div>

    <div
      class="write"
      :class="[{ toggle: isBoard }, { neuMorpWrite: itemMorp }]"
    >
      <p>{{ text }}</p>
      <i class="bi bi-pen" @click="changeBoard"></i>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  props: ["itemMorp"],
  data() {
    return {
      isBoard: false,
      timer: false,
      number: [],
      textInput: "",
      text: "",
      title: "",
      second: 0,
      minute: 0,
      hour: 0,
      id: null,
    };
  },

  methods: {
    // seconds&minutes loop
    changeBoard() {
      this.isBoard = !this.isBoard;
      this.$emit("toggle", this.isBoard);
  
    },

    // send data
    setText() {
      if (this.title.split("").length < 3) {
        this.$vToastify.warning("min 3 character"); 
        this.$refs.inputFocus.focus();
      } else {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let padSecond = this.second.toString().padStart(2, "0");
        let padMinute = this.minute.toString().padStart(2, "0");

        this.$emit("reData", {
          id: uuidv4(),
          title: this.title,
          date: { day, month, year },
          text: this.textInput,
          isCompleted: false,
          second: 0,
          timerS: padSecond,
          minute: 0,
          timerM: padMinute,
          hour: 0,
          timerH: 0,
          cardActive: false,
          cardComplete: false,
        });
      }

      this.textInput = "";
      this.title = "";
    },

    // board toogle
    close() {
      this.isBoard = !this.isBoard;
      console.log(this.itemMorp);
      this.$emit("toggle", this.isBoard);
    },
  },

  created(){
    for (let i = 0; i <= 59; i++) {
        this.number.push(i);
      }
  }
};
</script>

<style>

.neuMorpSelect {
  border: none;
  color: rgb(182, 182, 182);
  border-radius: 2px;
  background: #131419 !important;
  box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.1),
    2px 2px 4px rgba(0, 0, 0, 0.5) !important;
}



@media only screen and (max-width: 576px) {
  .text-area {
    right: -1%;
    top: 20%;
  }

  .opt {
    display: block;
    position: absolute;
    top: 99%;
    right: 10%;
  }
}

@media only screen and (max-width: 768px) {
  .text-area {
    top: 20%;
  }
}


</style>
