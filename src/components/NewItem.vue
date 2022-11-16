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

            <option v-for="i in number" :key="i" clas>{{ i }}</option>
          </select>
          <select
            class="sec"
            :class="{ neuMorpSelect: itemMorp }"
            v-model="second"
          >
            <option value="">Sec</option>
            <option v-for="i in number" :key="i">{{ i }}</option>
          </select>
        </div>
        <button
          class="run"
          :class="{ neuMorpButton: itemMorp }"
          @click="setText"
        >
          Go
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
      for (let i = 0; i <= 59; i++) {
        this.number.push(i);
      }
      console.log(this.isBoard);
    },

    // send data
    setText() {
      if (this.title.split("").length < 3) {
        this.$refs.inputFocus.focus();
      } else {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let padSecond = this.second.toString().padStart(2, "0");
        let padMinute = this.minute.toString().padStart(2, "0");

        let randomNumber = Math.floor(Math.random() * 90100990);
        this.$emit("reData", {
          id: randomNumber,
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
    },
  },
};
</script>

<style>
/* .toggle {
  display: none;
}

.run {
  display: block;
  position: absolute;
  right: 12%;
  width: 300px;
  height: 40px;
  border: none;
  background: rgba(255, 255, 255, 0.082);
  backdrop-filter: blur(0.5rem);
  border-radius: 10px;
  box-shadow: 0mm 0mm 1mm white;
  color: white;
  transition: 0.3s ease-in-out;
}

.run:hover {
  background: rgba(255, 255, 255, 0.482);
  color: rgba(0, 0, 0, 0.53);
}

.fa-solid {
  display: block;
  position: absolute;
  right: 7%;
  cursor: pointer;
  color: #ffffff9b;
}

.title {
  display: block;
  position: absolute;
  width: 300px;
  padding: 10px;
  right: 13%;
  bottom: 97%;
  background: rgba(255, 255, 255, 0.082);
  backdrop-filter: blur(1rem);
  box-shadow: 0mm 0mm 1mm white;
  border: none;
  border-radius: 10px;
  z-index: 999999999;
} */

/* .opt {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10%;
  right: 95%;
}
select {
  background: rgba(128, 0, 128, 0.084);
  backdrop-filter: blur(1rem);
  border: none;
  border-top: 1px solid white;
  margin-bottom: 5px;
  border-radius: 5px;
} */

.neuMorpSelect {
  border: none;
  color: rgb(182, 182, 182);
  border-radius: 2px;
  background: #131419 !important;
  box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.1),
    2px 2px 4px rgba(0, 0, 0, 0.5) !important;
}

/* .text-area {
  position: fixed;
  top: 8%;
  right: 0;
  width: 400px;
  height: 400px;
  transition: 0.3s ease-in-out; */

/* background: rgba(136, 136, 136, 0.093);
  box-shadow: 0mm 0mm 1mm white; */
/* } */

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

/* .area {
  height: 400px;
  width: 350px;
  margin: 1.3rem;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.093);
  backdrop-filter: blur(0.5rem);
  box-shadow: 0mm 0mm 1mm rgba(255, 255, 255, 0.52);
  border: none;
  border-radius: 30px;
  outline: none;
  z-index: 990000;
}

.fa-x {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: rgba(128, 0, 128, 0.536);
  width: 20px;
  height: 20px;
  border-radius: 2px;
} */

/* .neuMorpFaX {
  border-radius: 2px;
  background: #131419 !important;
  box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.1),
    2px 2px 4px rgba(0, 0, 0, 0.5) !important;
  border: 1px solid #ffffff0b !important;

}

.neuMorpFaX:hover {
  border-radius: 2px;
  background: #131419;
  color: rgb(98, 97, 97);
  box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.5), 1px 1px 3px rgba(0, 0, 0, 0.5);
  transition: all .3s ease-in-out;
  border: 1px solid #ffffff0b !important;

}

.neuMorpTextArea {
  background: #131419 !important;
  border-radius: 50px !important;
  border: 1px solid #ffffff0a !important;

  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.05),
    5px 5px 15px rgba(0, 0, 0, 0.5) !important;
}

.neuMorpTextArea:focus {
  box-shadow: -2px -2px 6px rgba(0, 0, 0, 0.8) inset,
    2px 2px 6px rgba(0, 0, 0, 0.5) inset !important;
}

.neuMorpTitle {
  background: #131419 !important;
  border: 1px solid #ffffff0b !important;

  box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.05) inset,
    2px 2px 4px rgba(0, 0, 0, 0.5) inset !important;
  outline: none;
}

.neuMorpTitle:focus {
  box-shadow: -2px -2px 6px rgba(0, 0, 0, 0.8) inset,
    2px 2px 6px rgba(0, 0, 0, 0.5) inset !important;
}

.neuMorpButton {
  background: #131419 !important;
  border: 1px solid #ffffff0b !important;

  box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.05),
    2px 2px 4px rgba(0, 0, 0, 0.5) !important;
  outline: none;
}

.neuMorpButton:hover {
  box-shadow: -2px -2px 6px rgba(0, 0, 0, 0.8) inset,
    2px 2px 6px rgba(0, 0, 0, 0.5) inset !important;
  color: #333;
}

.neuMorpWrite {
  background: #131419 !important;
  border: 1px solid #ffffff0b !important;
  box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.05),
    2px 2px 4px rgba(0, 0, 0, 0.5) !important;
  outline: none;
}


.neuMorpWrite:hover {
  box-shadow: -2px -2px 6px rgba(0, 0, 0, 0.8) inset,
    2px 2px 6px rgba(0, 0, 0, 0.5) inset !important;
  color: #333;
  border: 1px solid #ffffff0a !important;

}

.neuMorpWrite .bi-pen:hover{
  color: #333;
} */
</style>
