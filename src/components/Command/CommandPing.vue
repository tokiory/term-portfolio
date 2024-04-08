<template>
  <CommandWrapper class="command-contact">
    <div class="command-contact__text">Pong!</div>
    <div class="command-contact__text">
      <Icon icon="pixelarticons:loader" />
      Contacting the author...
    </div>
    <div class="command-contact__text">
      <Icon icon="pixelarticons:check" />
      Connection established!
    </div>
  </CommandWrapper>
</template>

<script setup lang="ts">
import CommandWrapper from "@/components/Command/CommandWrapper.vue";
import { Icon } from "@iconify/vue";
import { onMounted } from "vue";

onMounted(() => {
  const link = document.createElement("a");
  link.target = "_blank";
  link.href = "https://t.me/tokiory";
  link.click();
});
</script>

<style lang="scss" scoped>
.command-contact {
  display: flex;
  flex-direction: column;

  &__text {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
