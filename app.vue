<template>
  <div>
    <nav>
      <ul>
        <!-- menggunakan NuxtLink untuk routing -->
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
      </ul>
    </nav>
  </div>
  <NuxtPage />
</template>

