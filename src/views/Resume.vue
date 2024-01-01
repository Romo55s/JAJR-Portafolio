<template>
  <div class="flex text-white p-10 relative mt-10">
    <div class="flex-1 mr-10 font-sfLight ml-5">
      <p class="text-white mb-4 text-2xl">
        Explore my professional journey and education. Click on my Resume for a
        detailed overview of my experience and studies.
      </p>
      <a href="#">
        <span>Resume</span>
      </a>
    </div>

    <div class="image-back flex-2 mb-4 aspect-w-1 aspect-h-1">
      <img
        src="@/assets/img/back-ground-3.webp"
        alt="Background 1"
        class="object-cover w-80 h-full"
      />
    </div>

    <div class="absolute top-0 left-0">
      <div
        class="Style absolute left-[670px] top-[610px] -rotate-90 text-white text font-normal font-robuck"
      >
        STYLE
      </div>
      <div
        class="Simplicity absolute left-[680px] top-[290px] -rotate-90 text-white text font-normal font-robuck"
      >
        SIMPLiCITY
      </div>
    </div>

    <div class="img-2 flex-2 mb-4 aspect-w-1 aspect-h-1 justify-end">
      <img
        src="@/assets/img/back-ground-2.webp"
        alt="Background 1"
        class="object-cover max-w-auto h-full"
      />
    </div>

    <div class="absolute top-[620px] left-[150px] w-[600px] h-[300px]">
      <h1 class="Style text-red text-7xl font-normal font-winter">
        Your success <br class="mb-8" />
        my priority
      </h1>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.text {
  font-size: 14vw;
}

a {
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  border: 2px solid #ff0000;
  text-transform: uppercase;
  color: #ff0000;
  text-decoration: none;
  font-size: 20px;
}

a:before {
  content: "";
  position: absolute;
  top: 6px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% - 12px);
  background: #070707;
  transition: 0.5s ease-in-out;
  transform: scaleY(1);
  transition-delay: 0.5s;
}

a:hover:before {
  transform: scaleY(0);
}

a::after {
  content: "";
  position: absolute;
  top: -2px;
  left: 6px;
  height: calc(100% + 4px);
  width: calc(100% - 12px);
  background: #070707;
  transition: 0.5s ease-in-out;
  transform: scaleX(1);
}

a:hover::after {
  transform: scaleX(0);
}

a span {
  position: relative;
  z-index: 3;
}

.image-back {
  height: 1000px;
  width: 800px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.img-2 {
  height: 1000px;
  width: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.title {
  width: 100%;
}
</style>
