<template>
  <div @click="onFocus" class="terminal-input">
    <span class="terminal-input__wrapper">
      <span class="terminal-input__welcome">station-tokiory@user:~$&nbsp;</span>
      <span
        @input="onInput"
        @keydown="onKeydown"
        class="terminal-input__inner"
        spellcheck="false"
        ref="inputRef"
        contenteditable
        autofocus
        >{{ modelValue }}</span
      >
      <terminal-cursor :style="cursorStyles" class="terminal-input__cursor" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from "vue";
import TerminalCursor from "./TerminalCursor.vue";

const inputRef = ref<HTMLDivElement | null>(null);
const cursorPosition = ref(0);
const cursorStyles = computed(() => {
  if (!inputRef.value) return {};

  return {
    right: `${inputRef.value.innerText.length - cursorPosition.value - 1}ch`,
  };
});

const modelValue = defineModel<string>();

const emit = defineEmits<{
  (e: "enter"): void;
}>();

const onInput = (e: Event) => {
  modelValue.value = (e.target as HTMLDivElement).innerText;
};

const onFocus = () => {
  inputRef.value?.focus();
};

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    e.preventDefault();
    emit("enter");
    return;
  }

  if (e.ctrlKey && e.key === "u") {
    console.log("here");
    modelValue.value = "";
  }
};

const onSelectionChange = (event: Event) => {
  const rootElement = event.target as Document;
  rootElement.activeElement;

  if (rootElement.activeElement === inputRef.value) {
    const { focusOffset } = document.getSelection()!;
    cursorPosition.value = focusOffset;
  }
};

onMounted(() => {
  document.addEventListener("selectionchange", onSelectionChange);
  window.addEventListener("focus", onFocus);
});

onUnmounted(() => {
  document.removeEventListener("selectionchange", onSelectionChange);
  window.removeEventListener("focus", onFocus);
});

// TODO: Implement terminal keybindings
</script>

<style lang="scss" scoped>
.terminal-input {
  padding-block: 12px;
  position: sticky;
  top: 0;
  background: var(--theme-background);

  &__wrapper {
    position: relative;
    line-height: 1;
  }

  &__welcome {
    line-height: 1;
    white-space: nowrap;
    display: inline;
  }

  &__cursor {
    display: none;
    position: absolute;
    z-index: -1;
  }

  &__inner {
    display: inline;
    caret-color: transparent;
    outline: none;
    border: none;
    line-height: 1;
    padding: 0;
    max-width: fit-content;
    width: 100%;
  }

  &__inner:focus + .terminal-input__cursor {
    display: inline-block;
  }
}
</style>
