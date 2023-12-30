<script lang="ts" setup></script>

<template>
  <div class="footer p-10 mt-10 flex flex-col items-center justify-center">
    <div class="font-robuck text-center text-red">
      <h1 class="text text-4xl md:text-6xl">TONY<span class="smaller">ROMO</span></h1>
    </div>
    <p class="text-white mt-4 border-t border-white pt-4">
      @COPYRIGHT 2023 TONYROMO, INC, ALL RIGHTS RESERVED
    </p>
  </div>
</template>

<style scoped>
.text {
  font-size: 520px;
  margin: 0;
  padding: 0;
  height: 400px;
  margin-bottom: 20px;
}

.smaller {
  margin-left: 20px;
}
.border-t {
  border-color: white;
}

.text-white {
  color: white;
}

/* Ajusta el tamaño del h1 para dispositivos más pequeños */
@media screen and (max-width: 767px) {
  .text-4xl {
    font-size: 2rem; /* Ajusta el tamaño del texto según tus preferencias */
  }
}
</style>
