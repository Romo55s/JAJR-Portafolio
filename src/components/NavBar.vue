<template>
  <div class="font-sfMedium bg-red">
    <nav class="p-2">
      <div class="container ml-5">
        <div class="grid grid-cols-5 items-center justify-center w-auto">
          <!-- Center the items -->
          <!-- Logo -->
          <div class="text-white col-span-1 flex justify-center">
            <!-- Center the logo -->
            <img
              src="../assets/logo-wird-black.svg"
              alt=""
              class="w-15"
              style="height: 125px"
            />
          </div>
          <!-- Menú de opciones -->
          <div class="hidden md:flex col-span-4">
            <a
              v-for="(item, index) in menuItems"
              :key="index"
              :class="[
                'text-white',
                'mx-4',
                'ml-60',
                'w-48',
                'justify-center',
                'text-center',
                'font',
                'text-xl',
                'transition-transform',
                'duration-500',
                'transform',
                'hover:scale-110',
              ]"
              v-smooth-scroll="{ duration: 500 }"
              :href="'#' + item.link"
            >
              {{ item.label }}
            </a>
          </div>
          <!-- Menú desplegable para pantallas más pequeñas -->
          <div class="md:hidden col-span-1 flex justify-end">
            <!-- Puedes agregar un icono de hamburguesa aquí -->
            <button class="text-white">Menu</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const menuItems = [
  { label: "Resume", link: "resume" },
  { label: "About", link: "about" },
  { label: "Portfolio", link: "portafolio" },
  { label: "Contact", link: "contact" },
];
</script>
