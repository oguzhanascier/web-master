<template>
  <div>
  

    <div
      v-show="!customBar"
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

</style>
