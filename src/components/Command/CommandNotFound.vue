<template>
  <CommandWrapper class="command-not-found">
    <div>
      No such command:
      <span class="command-not-found__error">{{command}}</span>
    </div>
  </CommandWrapper>
</template>

<script setup lang="ts">
import CommandWrapper from "./CommandWrapper.vue";

interface CommandNoneProps {
  command: string;
}

defineProps<CommandNoneProps>();
</script>

<style lang="scss" scoped>
.command-not-found {
  &__error {
    color: var(--theme-error);
  }
}
</style>
