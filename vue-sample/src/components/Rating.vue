<script setup lang="ts">
import { ref } from "vue";

const props = defineProps(["modelvalue"]);
const emits = defineEmits(["update:modelValue"]);

const isActiveButton = ref<string>(props.modelvalue);
const onClick = (buttonType: string) => {
  isActiveButton.value = buttonType;
  emits("update:modelValue", isActiveButton.value);
};
</script>
<template>
  <ul>
    <li>
      <button
        :class="{ active: isActiveButton === 'bad' }"
        @click="onClick('bad')"
        type="button"
      >
        Bad
      </button>
    </li>
    <li>
      <button
        :class="{ active: isActiveButton === 'average' }"
        @click="onClick('average')"
        type="button"
      >
        Average
      </button>
    </li>
    <li>
      <button
        :class="{ active: isActiveButton === 'great' }"
        @click="onClick('great')"
        type="button"
      >
        Great
      </button>
    </li>
  </ul>
</template>
<style scoped>
.active {
  color: pink;
}
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid gray;
  padding: 1rem;
  justify-content: center;
  align-content: center;
}
button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
