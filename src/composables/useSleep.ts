import { ref } from "vue";

const isEnvSleeping = JSON.parse(import.meta.env.VITE_SLEEP);
const isSleeping = ref(isEnvSleeping);

export const useSleep = () => {
  return {
    isSleeping,
  };
};
