<script setup>
// memanggil layout default dengan definePageMeta
definePageMeta({
  // menggunakan layout default
  layout: 'default'
});

// memanggil useHead untuk mengubah title head
useHead({
    title: 'Blog',
});

// memanggil useAsyncData untuk mengambil data dari dokumen markdown
const { data: posts } = await useAsyncData('blog-list', () => queryContent('/blog').only(['_path', 'title']).find())

const route = useRoute()
</script>

<template>
  <section class="prose dark:prose-invert">
    <h1 class="text-2xl font-bold mb-10">Blog</h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <NuxtLink :to="post._path">
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
