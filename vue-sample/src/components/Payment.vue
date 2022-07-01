<script setup lang="ts">
import { computed, reactive, ref, toRefs, watch } from "vue";

const itemName1 = ref<string>("Desk");
const itemName2: string = "Bike";

interface Too {
  name: string;
  price: number;
}

const item1 = reactive<Too>({
  name: "desk",
  price: 40000,
});

const price1: number = 40000;
const price2: number = 20000;
const url1 =
  "https://github.com/poco-tech/poco-tech-spring-boot-web-api/blob/main/src/main/resources/api-schema.yaml";

const buy = (itemName: string) => {
  alert("Are you sure to buy" + itemName + "?");
};

const clear = () => {
  item1.name = "";
  item1.price = 0;
};
const budget = 50000;
// const priceLabel = computed(() => {
//   if (budget < item1.price) {
//     return "too expensive";
//   } else {
//     return item1.price + "円";
//   }
// });
const priceLabel = ref<string>(item1.price + "yen");
const { price } = toRefs<Too>(item1);
watch(price, () => {
  if (budget < price.value) {
    priceLabel.value = "tooo expensive";
  } else {
    priceLabel.value = item1.price + "yen";
  }
});
</script>
<template>
  <div class="container">
    <h1>Payment</h1>
    <input v-model="item1.name" />
    <input v-model="item1.price" />
    <button v-on:click="clear">Clear</button>
    <div class="payment">
      <label>{{ item1.name }}</label>
      <label>{{ priceLabel }}</label>
      <a v-bind:href="url1">bought at...</a>
      <button v-on:click="buy(itemName1)">BUY</button>
    </div>
    <div class="payment">
      <label>{{ itemName2 }}</label>
      <label>{{ price2 }}円</label>
      <a href="">bought at...</a>
      <button v-on:click="buy(itemName2)">BUY</button>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.payment {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 400px;
  background-color: aliceblue;
  margin-bottom: 8px;
}
input {
  margin: 8px;
}
label {
  font-size: 20px;
  font-weight: bold;
}
</style>
