import { onMounted, onUnmounted } from "vue";

interface TerminalActions {
  onClear: () => void;
}

export const useTerminalActions = (actions: TerminalActions) => {
  const onKeydown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "l") {
      actions.onClear();
      return;
    }
  };

  onMounted(() => {
    document.addEventListener("keydown", onKeydown);
  });

  onUnmounted(() => {
    document.removeEventListener("keydown", onKeydown);
  });

  return {
    clear: actions.onClear,
  };
};
