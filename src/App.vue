<script setup lang="ts">
import CommandContact from "@/components/Command/CommandContact.vue";
import CommandNeofetch from "@/components/Command/CommandNeofetch.vue";
import CommandPing from "@/components/Command/CommandPing.vue";
import CommandAbout from "@/components/Command/CommandAbout.vue";
import CommandHelp from "@/components/Command/CommandHelp.vue";
import CommandProjects from "@/components/Command/CommandProjects.vue";
import CommandNone from "./components/Command/CommandNotFound.vue";
import CommandSleep from "./components/Command/CommandSleep.vue";
import TerminalOverview from "./components/Terminal/TerminalOverview.vue";
import TerminalOutput from "./components/Terminal/TerminalOutput.vue";
import TerminalInput from "./components/Terminal/TerminalInput.vue";
import { Component, VNode, createVNode, shallowRef } from "vue";
import { useTerminalInput } from "./composables/useTerminalInput";
import { useTerminalActions } from "./composables/useTerminalActions";
import { useSleep } from "./composables/useSleep";

const commands = {
  help: CommandHelp,
  ls: CommandProjects,
  whoami: CommandAbout,
  wget: CommandContact,
  ping: CommandPing,
  neofetch: CommandNeofetch,
  sleep: CommandSleep,
} as const;

const blocks = shallowRef<Array<VNode | Component>>([commands.help]);
const { isSleeping } = useSleep();
const { input, clear: clearInput } = useTerminalInput();

const processCommand = (value: string) => {
  const hasCommand = input.value in commands;

  if (!hasCommand) {
    const notFoundOutput = createVNode(CommandNone, {
      command: input.value,
    });
    blocks.value = [...blocks.value, notFoundOutput];
    return;
  }

  switch (value) {
    case "sleep":
      blocks.value = [
        ...blocks.value,
        createVNode(commands["sleep"], {
          sleeping: isSleeping.value,
        }),
      ];
      isSleeping.value = !isSleeping.value;
      break;
    default:
      blocks.value = [
        ...blocks.value,
        commands[input.value as keyof typeof commands],
      ];
  }
};

const onEnter = () => {
  input.value = input.value.trim();
  if (input.value.length === 0) {
    return;
  }

  switch (input.value) {
    case "clear":
      clear();
      break;
    default: {
      processCommand(input.value);
    }
  }

  clearInput();
};

const { clear } = useTerminalActions({
  onClear: () => {
    blocks.value = [];
  },
});
</script>

<template>
  <div class="app">
    <terminal-overview>
      <terminal-input @enter="onEnter" v-model="input" ref="inputRef" />
      <terminal-output :output="blocks" />
    </terminal-overview>
  </div>
</template>

<style lang="scss" scoped>
.app {
  font-family: "Pro Font", monospace;
  font-variant-ligatures: none;
  font-size: 16px;
  min-height: 100vh;
}
</style>
