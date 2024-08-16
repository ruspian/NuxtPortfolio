

<template>
  <div class="container mx-auto">
    <Header />
    <main class="p-2 mt-10">
      <!-- menggunakan slot untuk menambahkan konten -->
      <slot />
    </main>
  </div>
</template>

<style>
  body {
    @apply bg-white dark:bg-gray-900 text-gray-800 dark:text-white;
  }
</style>
