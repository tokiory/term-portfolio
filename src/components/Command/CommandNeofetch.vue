<template>
  <CommandWrapper class="command-neofetch">
    <div class="command-neofetch__container">
      <AsciiCat />
      <div class="command-neofetch__key">
        <span v-for="(item, idx) of information" :key="idx">
          {{ item.name }}
        </span>
      </div>
      <div class="command-neofetch__value">
        <span v-for="(item, idx) of information" :key="idx">
          {{ item.value }}
        </span>
      </div>
    </div>
    <div class="command-neofetch__divider">--- --- --- --- ---</div>
    <div class="command-neofetch__footer">
      <div class="command-neofetch__fact">Fun facts:</div>
      <div>
        - System, Host, Kernel, Shell, De, WM, CPU, GPU and Terminal is real
        hardware/software, that I'm using right now.
      </div>
      <div>
        - Uptime is real time, that I've been coded in any editor like VSCode,
        Webstorm and Neovim.
      </div>
    </div>
  </CommandWrapper>
</template>

<script lang="ts" setup>
import AsciiCat from "@/components/Ascii/AsciiCat.vue";
import { ref } from "vue";
import CommandWrapper from "./CommandWrapper.vue";
import { system } from "@/data/system.ts";

const information = ref(structuredClone(system));
information.value.uptime.value = "1966 hrs";
</script>

<style lang="scss" scoped>
.command-neofetch {
  &__container {
    display: flex;
    align-items: flex-start;
    gap: 4ch;
  }

  &__key,
  &__value {
    margin-top: 2ch;
    display: flex;
    gap: 6px;
    flex-direction: column;
  }

  &__key,
  &__fact {
    margin-left: 16px;
    font-weight: bold;
    color: var(--theme-primary);
  }

  &__divider {
    display: block;
    color: var(--theme-secondary);
  }
}
</style>
