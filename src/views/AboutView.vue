
<script setup>

</script>

<template>
  <h1>This is About page.</h1>
  <VForm>
    <VField
      name="email"
      type="email"
      rules="required|email"
    />
    <ErrorMessage name="email" />
  </VForm>
  <router-link to="/">
    Home
  </router-link> |
  <router-link to="/about">
    About
  </router-link>
</template>

<style scoped>
</style>
