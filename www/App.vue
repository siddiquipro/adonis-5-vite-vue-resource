<template>
  <h1>Vue + Adonis 5 + Vite</h1>
  <div class="f">
    <div class="f1">
      <h3>{{ state.count }}</h3>
      <button class="button" @click="add">ADD</button>
    </div>
    <div class="f1">
      <pre>{{ state.users }}</pre>
      <button class="button" @click="fetchData">Fetch Posts</button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({ count: 0, users: [] });

const fetchData = async () => {
  let res = await fetch("/api/crud/posts");
  if (res.ok) {
    state.users = await res.json();
  }
};

const add = () => {
  state.count++;
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

h1 {
  text-align: center;
  margin: 30px 20px;
}

button {
  background-color: #4caf50;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 4px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  line-height: 1;
  font-size: 1rem;
  font-weight: 500;
  min-width: 100px;
  margin-top: 30px;
  box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
}

.f {
  display: flex;
  width: 100%;
}

.f1 {
  border-radius: 4px;
  flex: 1;
  background: #eee;
  margin: 1rem;
  padding: 2rem;
}
</style>
