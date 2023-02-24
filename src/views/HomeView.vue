<template>
  <div class="home">
    <h1>Hello, This is Home Page.</h1>
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/about">
      About
    </router-link>
    <hr>
    <HelloWorld />
  </div>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue'

</script>

<style scoped>
</style>
ㄋ
