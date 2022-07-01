<script setup lang="ts">
interface Tweet {
  id: number;
  description: string;
}
interface Props {
  tweets: Tweet[];
}

defineProps<Props>();
const emit = defineEmits(["delete-tweet"]);
const deleteTweet = (id: number) => {
  emit("delete-tweet", id);
};
</script>
<template>
  <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
    <span>{{ tweet.description }}</span>
    <button class="delete-button" @click="deleteTweet(tweet.id)">delete</button>
  </li>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.save-button {
  color: #fff;
  font-weight: bold;
  background-color: #68c9c9;
  border-radius: 2px;
  border: none;
  width: 60px;
  height: 22px;
}

.delete-button {
  color: #fff;
  font-weight: bold;
  background-color: #c99a68;
  border-radius: 2px;
  border: none;
  width: 60px;
  height: 22px;
}

.delete-button:hover {
  background-color: #9d6324;
}

input {
  margin-bottom: 16px;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  padding: 24px 0;
  width: 60%;
  margin-bottom: 12px;
  border-radius: 4px;
}

.tweet-list {
  list-style: none;
  margin: 12px;
  border-radius: 4px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(204, 219, 233);
  padding: 8px 20px;
  width: 300px;
}
</style>
