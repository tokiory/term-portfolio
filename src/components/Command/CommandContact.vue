<template>
  <CommandWrapper class="command-contact">
    Contacts:
    <div class="command-contact__list">
      <div
        v-for="(contact, idx) in contacts"
        :key="idx"
        class="command-contact__item"
      >
        <Icon :icon="contact.icon" />
        <a target="_blank" :href="contact.url" class="command-contact__link">{{
          contact.name
        }}</a>
      </div>
    </div>
  </CommandWrapper>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import CommandWrapper from "@/components/Command/CommandWrapper.vue";
import { contacts } from "@/data/contacts.ts";
</script>

<style lang="scss" scoped>
.command-contact {
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1ch;

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px 16px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 1ch;
  }
}
</style>
