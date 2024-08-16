<script setup>
// memanggil layout default dengan definePageMeta
definePageMeta({
  // menggunakan layout default
  layout: 'default'
});

// memanggil useHead untuk mengubah title head
useHead({
    title: 'Home',
  });


const route = useRoute()
</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Pelajari lebih lanjut tentang routing</a>
  </div>
</template>
