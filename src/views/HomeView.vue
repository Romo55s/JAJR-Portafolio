<script setup lang="ts"></script>

<template>
  <div class="back flex items-center justify-center h-screen relative">
    <div class="title font-robuck text-white text-center relative z-10">
      <h1 class="text">TONY<span class="smaller">ROMO</span></h1>
    </div>
    <div class="subtitle font-winter text-black text-center absolute top-1/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
      <h2>Software Engineer</h2>
    </div>
  </div>
</template>

<style scoped>
.back {
  background-image: url("../assets/img/background.png");
  background-position: center;
  background-size: cover;
}

.text {
  font-size: 520px;
}

.title {
  width: 100%;
}

/* Estilo para reducir el espacio entre las letras */
.smaller {
  margin-left: 20px;
}

.subtitle{
  font-size: 80px;
}
</style>
