<template>
  <div class="vp-home">
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-2">
        <clock-card></clock-card>
      </div>
      <div class="col-span-6 md:col-span-2 text-center mt-5">
        <user-card></user-card>
      </div>
      <div class="col-span-6 md:col-span-2">
        <calender-card></calender-card>
      </div>
    </div>
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-3">Todo List</div>
      <div class="col-span-6 md:col-span-3">Shopping List</div>
      <div class="col-span-6 md:col-span-3">
        <h2 class="mt-5">Fridge List</h2>
        <fridge-card></fridge-card>
      </div>
    </div>
  </div>
</template>

<script>
import FridgeCard from "../components/fridge/card.vue";
import ClockCard from "../components/clock/card.vue";
import CalenderCard from "../components/calender/card.vue";
import UserCard from "../components/user/card.vue";

export default {
  name: "Homepage",
  components: {
    "fridge-card": FridgeCard,
    "clock-card": ClockCard,
    "calender-card": CalenderCard,
    "user-card": UserCard,
  },
};
</script>
