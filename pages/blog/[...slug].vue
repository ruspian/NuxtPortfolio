<script setup>
definePageMeta({
    layout: 'default',
});

useHead({
    title: 'Blog',
})
</script>

<template>
    <!-- menggunakan prose dari tailwind typografi untuk mengatur style markdown.md -->
    <article class="prose dark:prose-invert prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300">
        <!-- menggunakan ContentDoc untuk membaca dokumen markdown dan lain lain -->
        <ContentDoc/>
    </article>
</template>