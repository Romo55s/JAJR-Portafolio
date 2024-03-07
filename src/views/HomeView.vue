<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div class="back relative h-[1280px]">
    <NavBar />
    <div class="flex flex-col items-center justify-center h-full">
      <div
        class="title font-robuck text-white text-center relative z-10 h-auto w-auto"
      >
        <h1 class="text">TONY<span class="smaller">ROMO</span></h1>
      </div>
      <div
        class="subtitle font-winter text-black text-center absolute top-1/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <h2>Software Engineer</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.back {
  background-image: url("@/assets/background-test-optimize.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.text {
  font-size: 520px;
}
.smaller {
  margin-left: 20px;
}

.subtitle {
  font-size: 80px;
}
.NavBar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
</style>
