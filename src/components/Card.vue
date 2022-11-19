<template>
  <div>
    <!-- <div
        v-if="!customBar"
        class="card"
        :class="{ cardComplete: sendItems.cardComplete }"
      >
        <div class="card-body scrollText">
          <span class="trashSpan"
            ><i class="fa-solid fa-trash" @click="deleteCard(cardIndex)"></i
          ></span>

          <h5 class="card-title">{{ sendItems.title }}</h5>

          <h6 class="card-subtitle mb-2 text-muted">
            {{ sendItems.date.day }}.{{ sendItems.date.month }}.{{
              sendItems.date.year
            }}
          </h6>
          <p class="card-text">
            {{ sendItems.text }}
          </p>
        </div>

        <div
          class="timer"
          :class="{ completeTimer: sendItems.cardActive }"
          v-if="sendItems.timerM > 0 || sendItems.timerS > 0"
        >
          <div class="totalTime">
            Total Time: {{ sendItems.timerM }}:{{ sendItems.timerS }}
          </div>

          <i
            class="bi bi-alarm"
            @click="timerStart(sendItems)"
            v-show="!sendItems.cardActive"
          ></i>
          <span style="margin-left: 15px" v-if="sendItems.hour < 10"
            >0{{ sendItems.hour }}:</span
          >
          <span style="margin-left: 15px" v-else>{{ sendItems.hour }}:</span>

          <span v-if="sendItems.minute < 10">0{{ sendItems.minute }}:</span>
          <span v-else>{{ sendItems.minute }}:</span>

          <span v-if="sendItems.second < 10">0{{ sendItems.second }}</span>
          <span v-else>{{ sendItems.second }}</span>
          <span
            class="stopWatch ms-2"
            @click="stopWatch(sendItems)"
            v-show="sendItems.cardActive"
            ><i class="fa-solid fa-pause"></i
          ></span>
        </div>
      </div> -->

    <div
      v-if="!customBar"
      class="card"
      :class="[{ cardComplete: sendItems.cardComplete }, { neuMorpCard: moon }]"
    >
      <div class="card-body scrollText">
        <span class="trashSpan"
          ><i
            class="fa-solid fa-trash"
            :class="{ neuMorpTrash: moon }"
            @click="deleteCard(cardIndex)"
          ></i
        ></span>

        <h5 class="card-title neuTitle" :class="[{ neuTitle: moon }]">
          {{ sendItems.title }}
        </h5>

        <h6 class="card-subtitle mb-2 text-muted">
          {{ sendItems.date.day }}.{{ sendItems.date.month }}.{{
            sendItems.date.year
          }}
        </h6>
        <p class="card-text" :class="[{ neuNext: moon }]">
          {{ sendItems.text }}
        </p>
      </div>

      <div
        class="timer"
        :class="[
          { completeTimer: sendItems.cardActive },
          { neuMorpTimer: moon },
        ]"
        v-if="sendItems.timerM > 0 || sendItems.timerS > 0"
      >
        <div class="totalTime">
          Total Time: {{ sendItems.timerM }}:{{ sendItems.timerS }}
        </div>

        <i
          class="bi bi-alarm"
          :class="{ neuMorpStop: moon }"
          @click="timerStart(sendItems)"
          v-show="!sendItems.cardActive"
        ></i>
        <span style="margin-left: 15px" v-if="sendItems.hour < 10"
          >0{{ sendItems.hour }}:</span
        >
        <span style="margin-left: 15px" v-else>{{ sendItems.hour }}:</span>

        <span v-if="sendItems.minute < 10">0{{ sendItems.minute }}:</span>
        <span v-else>{{ sendItems.minute }}:</span>

        <span v-if="sendItems.second < 10">0{{ sendItems.second }}</span>
        <span v-else>{{ sendItems.second }}</span>
        <span
          class="stopWatch ms-2"
          @click="stopWatch(sendItems)"
          v-show="sendItems.cardActive"
          ><i class="fa-solid fa-pause" :class="{ neuMorpPause: moon }"></i
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "sendItems",
    "timer",
    "customBar",
    "deleteCard",
    "customCard",
    "cardIndex",
    "stopW",
    "moon",
  ],
  data() {
    return {
      interval: null,
    };
  },
  methods: {
    padTimer() {
      this.sendItems.timerS.padStart(2, "0");
      this.sendItems.timerM.padStart(2, "0");
    },
    // timer
    timerStart(item) {
      const currentItem = item;
      item.cardActive = true; //clock icon open/close
      if (item.cardActive === true) {
        this.interval = setInterval(() => {
          const localstorageData = JSON.parse(localStorage.cardList);
          currentItem.second++;
          if (currentItem.second >= 60) {
            currentItem.minute += 1;
            currentItem.second = 0;
          }
          if (currentItem.minute >= 60) {
            currentItem.hour += 1;
            currentItem.minute = 0;
          }
          if (
            currentItem.second == currentItem.timerS &&
            currentItem.minute == currentItem.timerM
          ) {
            this.$vToastify.success(currentItem.title + " completed");
            currentItem.cardActive = true;
            currentItem.cardComplete = true;
            clearInterval(this.interval);
          }
          const updatedList = localstorageData.map((donenItem) => {
            if (donenItem.id === currentItem.id) {
              return {
                ...donenItem,
                second: currentItem.second,
                minute: currentItem.minute,
                cardComplete: currentItem.cardComplete,
                cardActive: currentItem.cardActive,
              };
            } else {
              return donenItem;
            }
          });
          localStorage.cardList = JSON.stringify(updatedList);
          console.log(updatedList);
        }, 1000);
      }
    },
    // stop
    stopWatch(item) {
      item.cardActive = false;
      clearInterval(this.interval);
    },
  },
  mounted() {
    if (localStorage.cssMorp) {
      this.moon = JSON.parse(localStorage.cssMorp);
    }
  },
};
</script>

<style>
/* .cardComplete {
  background: #5f94ff0a;
  backdrop-filter: blur(0.5rem);

  border: none;
  border-top: 3px solid rgba(180, 0, 240, 0.43);
  border-right: 1px solid rgba(180, 0, 240, 0.264);
  border-radius: 30px;

  height: 450px;
  width: 350px;

  margin: 1.3rem;
  padding: 1rem;

  color: white;

  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.064) inset;
  -webkit-box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.064) inset;
  -moz-box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.064) inset;
} */

/* .stopWatch {
  position: relative;
  bottom: 50%;
  left: 10%;
}

.fa-pause {
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background-color: purple;
  color: rgba(255, 255, 255, 0.985);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
} */

/* .neuMorpPause {
  border-radius: 2px;
  background: #131419;
  box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.1),
    2px 2px 4px rgba(0, 0, 0, 0.5);
}

.neuMorpPause:hover {
  border-radius: 2px;
  background: #131419;
  box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.1) inset,
    2px 2px 4px rgba(0, 0, 0, 0.5) inset;
  color: rgb(132, 132, 132);
}

.totalTime {
  position: absolute;
  bottom: 15%;
  left: 8%;
  font-size: 12px;
}

.neuMorpCard {
  background: #131419;
  border: none;
  border-radius: 50px;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.05),
    5px 5px 15px rgba(0, 0, 0, 0.5);
}

.neuMorpTrash {
  border-radius: 2px;

  background: #131419;
  box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.1),
    2px 2px 4px rgba(0, 0, 0, 0.5);
}

.neuMorpTrash:hover {
  border-radius: 2px;
  border: 1px solid #ffffff0a !important;

  background: #131419;
  color: #ccc;
  box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.5), 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.neuMorpTimer {
  color: rgb(123, 123, 123);
}

.neuMorpStop {
  color: rgb(212, 212, 212);
} */
</style>
