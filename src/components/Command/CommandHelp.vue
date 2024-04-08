<template>
  <CommandWrapper class="command-help">
    <div
      class="command-help__item"
      v-for="(command, idx) of availableCommands"
      :key="idx"
    >
      <span class="command-help__command">{{ command.name }}</span>
      ―
      <span class="command-help__description">{{ command.description }}</span>
    </div>
  </CommandWrapper>
</template>

<script lang="ts" setup>
import CommandWrapper from "./CommandWrapper.vue";

const availableCommands = [
  {
    name: "help",
    description: "List available commands",
  },
  {
    name: "ls",
    description: "List available projects",
  },
  {
    name: "whoami",
    description: "Show information about author",
  },
  {
    name: "neofetch",
    description: "Show information about the current system",
  },
  {
    name: "ping",
    description: "Ping the author",
  },
  {
    name: "wget",
    description: "Show contact information",
  },
  {
    name: "clear",
    description: "Clear the terminal",
  },
] as const;
</script>
<style lang="scss" scoped>
.command-help {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: fit-content;

  &__item:not(:first-child) {
    margin-top: 4px;
  }
  &__command {
    font-weight: bold;
    color: var(--theme-primary);
  }
}
</style>
