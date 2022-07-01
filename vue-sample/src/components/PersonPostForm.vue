<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ref } from "vue";

const inputtingName = ref<string>("");
const inputtingAge = ref<number>(0);
const emit = defineEmits(["register"]);
const register = () => {
  const person = {
    id: Math.random(),
    name: inputtingName.value,
    age: inputtingAge.value,
  };
  emit("register", person);
};
const nameLengthLimit = 15;
const isValidName = computed(() => {
  if (inputtingName.value.length >= nameLengthLimit) {
    return false;
  } else {
    return true;
  }
});
const color = computed(() => {
  return isValidName.value ? "white" : "rgb(244,193,190)";
});
</script>
<template>
  <div class="form-container">
    <div class="input-container">
      <div class="input-column">
        <span>name:</span>
        <input class="input-name" v-model="inputtingName" />
      </div>
      <span v-if="!isValidName" class="error"
        >{{ nameLengthLimit }} characters or less, please</span
      >
      <div class="input-column">
        <span>age:</span>
        <input type="number" class="input" v-model="inputtingAge" />
      </div>
    </div>
    <button @click="register" class="register-button" :disabled="!isValidName">
      register
    </button>
  </div>
</template>
<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 241, 226);
  padding: 24px 0;
  width: 50%;
  margin-bottom: 12px;
  border-radius: 4px;
}
span {
  font-size: 20px;
  font-weight: bold;
}
.input-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
  margin-bottom: 20px;
}
.input-column {
  width: 300px;
  display: flex;
  justify-content: space-between;
}
.input-name {
  background-color: v-bind(color);
}
input {
  width: 150px;
  margin-bottom: 8px;
}
.error {
  font-size: 12px;
  color: rgb(244, 193, 190);
}
</style>
