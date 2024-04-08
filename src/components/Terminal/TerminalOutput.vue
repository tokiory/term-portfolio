<template>
  <div class="terminal-output">
    <template v-for="(item, idx) in output">
      <div :key="idx" v-if="item" class="terminal-output__item">
        <component :is="item" />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { Component, VNode } from "vue";

interface TerminalOutputProperties {
  output: Array<VNode | Component>;
}

defineProps<TerminalOutputProperties>();
</script>

<style lang="scss" scoped>
.terminal-output {
  &__item {
    padding-block: 12px;

    &:not(:first-child) {
      border-top: 1px solid var(--theme-faded);
    }
  }
}
</style>
