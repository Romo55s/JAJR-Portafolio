<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import HomeView from "@/views/HomeView.vue";
import Resume from "@/views/Resume.vue";
</script>

<template>
  <header>
    <NavBar/>
  </header>
  <HomeView/>
  <Resume/>
</template>