<script setup>
const { data, error, loading } = await useFetch('https://api.github.com/users/ruspian/repos', {
    lazy: true,
});

// memfilter data berdasarkan ada atau tidak descriptionnya dan mengurutkan berdasarkan star
const repos = computed(() => {
    return data.value.filter((repo) => repo.description).sort((a, b) => b.stargazers_count - a.stargazers_count);
})

</script>

<template>
    <div class="mt-5">
        <section v-if="loading">Loading...</section>
        <section v-else-if="error">Error: {{ error }}</section>
        <section v-else="data"">
        <ul class=" grid grid-cols-1 gap-4">
            <li v-for="repo in repos" :key="repo.id"
                class="border border-gray-200 rounded-md p-4 hover:bg-gray-100 cursor-pointer">
                
                <a :href="repo.html_url" target="_blank">
                    <div class="flex items-center justify-between text-sm">
                    <div class="font-semibold">{{ repo.name }}</div>
                    <div>{{ repo.stargazers_count }}</div>
                </div>
                <p class="text-sm">{{ repo.description }}</p>
                </a>
            </li>
            </ul>
        </section>
    </div>
</template>