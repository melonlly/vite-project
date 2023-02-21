<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1 class="header">{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <h1 className="font-bold text-2xl mb-2">哈哈哈</h1>

  <div className="flex-c">flex-c</div>
  <div className="flex justify-center items-center">
    flex justify-center items-center
  </div>

  <button
    bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
    text="sm white"
    font="mono light"
    p="y-2 x-4"
    border="2 rounded blue-200"
  >
    Button
  </button>

  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style lang="scss" scoped>
.header {
  color: $theme-color;

  text-decoration: dashed;
}
.read-the-docs {
  color: #888;
}
</style>
