<template>
  <CommandWrapper class="command-about">
    <PortraitAscii />
    <div class="command-about__description">
      <div class="command-about__name">
        Hi! My name is
        <span class="command-about__highlight">{{ NICKNAME }}</span>
      </div>
      <div class="command-about__job">
        <span class="command-about__keyword">Job</span>: I am a front-end
        developer. I have been working in this field for 4 years and always
        strive to make interesting applications. You can see one of these
        applications right now :)
      </div>
      <div class="command-about__stack">
        <span class="command-about__keyword">Stack</span>: I mainly write in
        Javascript and Typescript. <br />If we talk about frameworks, my choice
        is Vue, however, I wrote applications in each of the well-known
        frameworks for fun (React, Svelte, Lit).
        <br />
        Also, I love learning something new, so sometimes I play with Go and Zig
      </div>
      <div class="command-about__hobbies">
        <span class="command-about__keyword">Hobbies</span>: Everything is quite
        simple here: my work is not only a job, but also a hobby >:) <br />
        Well, jokes aside, in the evenings I like to play some Rogue-like games,
        watch popular shows with my wife, and sometimes I go out to touch the
        grass (otherwise I’ll look like a caveman)
      </div>
      <div class="command-about__blog">
        <span class="command-about__keyword">Blog</span>: Throughout my career,
        I try to write down interesting things that I find along the way while
        working or studying. It is for this reason that I decided to start a
        <a href="https://developer-log.vercel.app">blog</a>. I don’t write on
        the blog so regularly, however, I try to make my notes interesting and
        my tutorials well-developed to the smallest detail.
      </div>
    </div>
  </CommandWrapper>
</template>

<script setup lang="ts">
import { NICKNAME } from "@/data/personal";
import CommandWrapper from "./CommandWrapper.vue";
import PortraitAscii from "@/components/Ascii/AsciiPortrait.vue";
</script>

<style lang="scss" scoped>
.command-about {
  display: flex;
  gap: 12ch;

  &__description {
    margin-top: 4ch;
    display: flex;
    flex-direction: column;
    gap: 2ch;
  }

  &__highlight {
    color: var(--theme-secondary);
  }

  &__keyword {
    color: var(--theme-primary);
  }
}
</style>
