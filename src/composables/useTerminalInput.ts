import { ref } from "vue";

export const useTerminalInput = () => {
  const input = ref("");
  const clear = () => {
    input.value = "";
  };

  return {
    input,
    clear,
  };
};
