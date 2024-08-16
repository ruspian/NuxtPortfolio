<script setup>
  // memanggil useHead untuk mengubah title head
  useHead({
    // titleTemplate nanti akan mengganti title head
    // '%s' => akan berubah dinamis sesuai title
    titleTemplate: '%s - Portofolio',
  });


  // memanggil useSeoMeta untuk mengubah SEO meta
  useSeoMeta({
    title: 'Portofolio - My Website',
    ogTitle: 'My Website',
    description: 'This is my website',
    ogDescription: 'This is my website',
    ogImage: 'https://example.com/og-image.png',
    twitterCard: 'summary_large_image',
  });
</script>

<template>
  <!-- mengambil layout menggunakan NuxtLayout -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

