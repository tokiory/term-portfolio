<template>
  <div class="terminal-overview">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.terminal-overview {
  display: flex;
  flex-direction: column;
  padding: 12px;

  &__input {
    position: sticky;
    top: 0;
    padding: 12px 0 24px;
    background: var(--theme-background);
    border-bottom: 1px solid var(--theme-faded);
  }
}
</style>
