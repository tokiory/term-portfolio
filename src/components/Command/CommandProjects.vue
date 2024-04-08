<template>
  <CommandWrapper class="command-projects">
    <div class="command-projects__title">Projects:</div>
    <div
      v-for="(project, idx) of projects"
      :key="idx"
      class="command-projects__item"
    >
      -
      <a :href="project.url" class="command-projects__link">{{
        project.name
      }}</a>
    </div>
  </CommandWrapper>
</template>

<script lang="ts" setup>
import CommandWrapper from "./CommandWrapper.vue";
import { projects } from "@/data/projects.ts";
</script>
