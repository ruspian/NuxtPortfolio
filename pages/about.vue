<script setup>

// memanggil layout default dengan definePageMeta
definePageMeta({
    // menggunakan layout default
    layout: 'default'
});

// memanggil useHead untuk mengubah title head
useHead({
    title: 'About',
  })
</script>

<template>
    <h1 class="mb-10">ini adalah halaman about</h1>
    <div class="prose dark:prose-invert">
        <ContentDoc path="/about" />
    </div>
</template>