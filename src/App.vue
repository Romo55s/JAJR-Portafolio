<script setup lang="ts">
import { onMounted } from "vue";
import HomeView from "@/views/HomeView.vue";
import Resume from "@/views/Resume.vue";
import Portfolio from "@/views/Portfolio.vue";
import About from "@/views/About.vue";
import Footer from "./components/Footer.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

onMounted(() => {
  toast.warn("Work in progress", {
    position: toast.POSITION.TOP_RIGHT,
    theme: "dark",
    duration: 2000,
  });
});
</script>

<template>
  <HomeView />
  <Resume />
  <Portfolio />
  <About />
  <footer>
    <Footer />
  </footer>
</template>
