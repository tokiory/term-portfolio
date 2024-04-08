<template>
  <span class="terminal-cursor" />
</template>

<style lang="scss" scoped>
.terminal-cursor {
  display: inline-block;
  width: 1ch;
  height: 1em;
  background-color: var(--theme-primary);
  animation: blink 0.7s infinite step-end;
}

@keyframes blink {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
