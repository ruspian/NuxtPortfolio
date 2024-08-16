<script setup>
// memanggil layout blog dengan definePageMeta
definePageMeta({
    // menggunakan layout blog
    layout: 'blog'
});

// memanggil useHead untuk mengubah title head
useHead({
    title: 'Blog',
  })
</script>

<template>
    <p>current route : {{ $route.path }}</p>
    <h1>ini adalah halaman blog</h1>
</template>