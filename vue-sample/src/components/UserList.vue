<template>
  <ul>
    <transition-group tag="ul" name="user-list">
      <li v-for="user in users" :key="user" @click="removeUser(user)">
        {{ user }}
      </li>
    </transition-group>
  </ul>
  <div>
    <input type="text" v-model="inputtinguser" />
    <button @click="addUser(inputtinguser)">add User</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const users = ref(["John", "Max", "Michael", "Jolie"]);
const inputtinguser = ref<string>("");
const addUser = (newUser: string) => {
  users.value.push(newUser);
  inputtinguser.value = "";
};
const removeUser = (user: string) => {
  users.value = users.value.filter((v) => v !== user);
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid rgb(104, 104, 104);
  padding: 1rem;
  text-align: center;
}
.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.user-list-enter-active {
  transition: all 1s ease-out;
}
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.user-list-leave-active {
  transition: all 5s ease-in;
}
</style>
