<template>
  <CommandWrapper class="command-sleep">
    {{ sleeping ? wakePhrase : sleepPhrase }}
  </CommandWrapper>
</template>

<script setup lang="ts">
import { computed } from "vue";
import CommandWrapper from "./CommandWrapper.vue";

interface CommandSleepProps {
  sleeping?: boolean;
}

defineProps<CommandSleepProps>();

const wakePhrases = ["Wake up, samurai, we have a city to burn"];
const sleepPhrases = ["See ya later"];

const wakePhrase = computed(() => {
  const randomIdx = Math.floor(Math.random() * wakePhrases.length);
  return wakePhrases[randomIdx];
});

const sleepPhrase = computed(() => {
  const randomIdx = Math.floor(Math.random() * sleepPhrases.length);
  return sleepPhrases[randomIdx];
});
</script>

<style lang="scss" scoped>
.command-sleep {
  font-size: 24px;
  color: var(--theme-error);
}
</style>
