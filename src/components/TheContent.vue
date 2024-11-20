<template>
    <div class="content">
        <slot />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from '#imports'

    export default defineComponent({})
</script>

<style lang="scss" scoped>
    .content {
        width: 100%;
        padding: 2rem;
    }
</style>
