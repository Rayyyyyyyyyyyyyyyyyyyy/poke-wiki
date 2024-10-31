<script setup lang="ts">
</script>

<template>
    <UContainer class="page-wrapper">
        <slot />

    </UContainer>

<!--    <div class="title">-->
<!--        <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>-->
<!--    </div>-->
</template>

<style lang="scss" scoped>

.page-wrapper {
    @apply w-screen h-screen;
    max-width: 100vw;
    max-height: 100vh;
    @apply overflow-x-auto overflow-y-auto;

}
</style>
