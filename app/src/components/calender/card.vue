<template>
  <div class="vc-calender-card">
    <h2 class="text-lg text-center block mt-5">Datum</h2>
    <div class="px-2 py-2 bg-white text-center text-5xl mb-2mt-2">
      {{ date.day }} : {{ date.month }} : {{ date.year }}
    </div>
    <div class="actions block text-center mb-5">
      <span class="text-sm">
        <router-link to="/calendar" class="text-blue-400">zum Kalender</router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DateCard",
  data() {
    return {
      date: {
        day: 0,
        month: 0,
        year: 0,
      },
    };
  },
  methods: {
    tik: function () {
      this.date.day = new Date().getDate();
      this.date.month = ("0" + (new Date().getMonth() + 1)).slice(-2);
      this.date.year = new Date().getFullYear();
    },
  },
  mounted() {
    const that = this;
    setInterval(function () {
      that.tik();
    }, 1000);
  },
};
</script>
