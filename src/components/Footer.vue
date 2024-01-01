<script lang="ts" setup></script>
<template>
  <div class="footer mt-10 font-sfMedium">
    <div class="content grid grid-cols-2 gap-8 ml-16 w-auto pt-14">
      <div class="col-span-1 md:col-span-1 md:col-start-1 contact text-white">
        <p>
          CONTACT ME <br />
          QUICK RESPONSE
        </p>
      </div>
      <div class="col-span-1 md:col-span-1 text-white">
        <p>
          GET IN TOUCH USING THE FORM BELOW <br />
          EXCITED TO CONNECT AND DISCUSS OPPORTUNITIES
        </p>
      </div>
    </div>
    
    <div class="flex flex-col justify-center">
      <img src="@/assets/img/Title.svg" alt="" class="mr-5 ml-5">
      <p
        class="text-white m-0 border-t border-white w-full text-center p-2"
        style="margin-top: -10px"
      >
        @COPYRIGHT 2023 TONYROMO, INC, ALL RIGHTS RESERVED
      </p>
    </div>
  </div>
</template>

<style scoped>
.text {
  font-size: 29.5vw;
  margin: 0; 
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
