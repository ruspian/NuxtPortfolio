<script setup>

// memanggil layout default dengan definePageMeta
definePageMeta({
    // menggunakan layout default
    layout: 'default'
});

// memanggil useHead untuk mengubah title head
useHead({
    title: 'Project',
});
</script>

<template>
    <div>
        <h1>ini adalah halaman project</h1>
        <ProjectList />
    </div>
</template>