<template>
  <div class="vc-clock-card">
    <h2 class="text-lg text-center block mt-5">Uhrzeit</h2>
    <div class="px-2 py-2 bg-white text-center text-5xl mb-5 mt-2">
      {{ time.hours }} : {{ time.minutes }} : {{ time.seconds }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ClockCard",
  data() {
    return {
      time: {
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  },
  methods: {
    tik: function () {
      this.time.hours = new Date().getHours();
      this.time.minutes = new Date().getMinutes();
      this.time.seconds = new Date().getSeconds();
    },
  },
  mounted() {
    const that = this;
    setInterval(function () {
      that.tik();
    }, 500);
  },
};
</script>
