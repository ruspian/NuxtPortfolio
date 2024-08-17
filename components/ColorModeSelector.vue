<script setup>
const ColorMode = useColorMode();
const modes = ['system', 'light', 'dark'];
const nextModeIcons = {
    'system': '😀',
    'light': '😍',
    'dark': '🥰',
};

const tampilkanNextMode = ref(false);
const nextMode = computed(() => {
    const currentModeIndex = modes.indexOf(ColorMode.preference);
    let nextModeIndex = null;
    if (currentModeIndex + 1 === modes.length) {
        nextModeIndex = 0;
    } else {
        nextModeIndex = currentModeIndex + 1;
    }

    return modes[nextModeIndex];
});

const nextModeIcon = computed(() => nextModeIcons[nextMode.value]);

function toggleMode() {
    ColorMode.preference = nextMode.value;
}
</script>

<template>
    <div class="flex space-x-2 items-center">
        <div class="text-gray-500 text-xs" v-if="tampilkanNextMode">Ganti Ke {{ nextMode }}</div>
        <button @click="toggleMode" class="hover:bg-gray-300 dark:hover:bg-gray-700 px-2 py-1 text-gray-500"
            @mouseenter="() => (tampilkanNextMode = true)" @mouseleave="() => (tampilkanNextMode = false)">{{ nextModeIcon }}</button>
    </div>
</template>