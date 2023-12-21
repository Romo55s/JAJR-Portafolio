<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import HomeView from "@/views/HomeView.vue";
import Resume from "@/views/Resume.vue";
import Portfolio from "@/views/Portfolio.vue";
import About from "@/views/About.vue";
</script>

<template>
  <header>
    <NavBar/>
  </header>
  <HomeView/>
  <Resume/>
  <Portfolio/>
  <About/>
</template>