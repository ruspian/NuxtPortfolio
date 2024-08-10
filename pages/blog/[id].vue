<script setup>
const route = useRoute();

console.log(route);

</script>

<template>
    <p>current route : {{ $route.path }}</p>
    <h1>ini adalah halaman blog</h1>
</template>