
<template>
    <!-- Header -->
    <header class="flex justify-between items-center mt-10">
        <div>
            <NuxtLink to="/" class="text-3xl font-semibold link">
                Portofolio
            </NuxtLink>
        </div>
        
        <nav>
            <ul class="flex space-x-4">
                <!-- menggunakan NuxtLink untuk routing -->
                <li>
                    <NuxtLink to="/" class="link">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" class="link">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/blog" class="link">Blog</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/project" class="link">Project</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    .link {
        /* menggunakan apply untuk menggunakan tailwindCSS */
        @apply p-2 hover:text-blue-500 hover:bg-blue-100 rounded-lg;
    }
</style>