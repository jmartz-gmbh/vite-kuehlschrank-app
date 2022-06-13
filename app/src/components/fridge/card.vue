<template>
  <div class="vc-fridge-card">
    <div class="tw-table block border border-black">
      <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
        <div class="col col-span-12 md:col-span-5">Name</div>
        <div class="col col-span-12 md:col-span-5">Marke</div>
        <div class="col col-span-12 md:col-span-2">Anzahl</div>
        <div class="col col-span-12 md:col-span-8">Kaufdatum | Ablaufdatum</div>
        <div class="col col-span-12 md:col-span-4">Aktionen</div>
      </div>
      <div
        v-for="(item, index) in items"
        class="row grid grid-cols-12 px-2 py-2"
      >
        <div class="col col-span-12 md:col-span-5">
          <span class="text-sm font-bold">{{ item.name }}</span>
        </div>
        <div class="col col-span-12 md:col-span-5">
          <span class="text-sm">{{ item.brand }}</span>
        </div>
        <div class="col col-span-12 md:col-span-2">
          <span class="text-sm">{{ item.qty }} / {{ item.of }}</span>
        </div>
        <div class="col col-span-12 md:col-span-8">
          <span class="text-sm">{{ item.bought }} | {{ item.expires }}</span>
        </div>
        <div class="col col-span-12 md:col-span-4">
          <button class="bg-white px-2 py-2"><fa icon="trash" /></button>
          <button class="bg-white px-2 py-2"><fa icon="edit" /></button>
        </div>
        <div class="col-span-12">
            <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FridgeCard",
  data() {
    return {
      items: [
        {
          name: "Choco Krispies",
          qty: 1,
          of: 2,
          brand: "Kellogs",
          bought: "13.06.2022",
          expires: "20.06.2022",
        },{
          name: "Tomaten",
          qty: 3,
          of: 4,
          brand: "Kellogs",
          bought: "13.06.2022",
          expires: "20.06.2022",
        },
      ],
    };
  },
};
</script>
