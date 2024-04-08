<template>
  <div ref="commandWrapperRef" class="command-wrapper">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const commandWrapperRef = ref<HTMLElement | null>(null);
onMounted(() => {
  commandWrapperRef.value?.scrollIntoView();
});
</script>
