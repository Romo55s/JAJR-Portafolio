<template>
  <div>
    <div class="font-sfMedium bg-black mb-8">
      <nav class="p-2 w-[auto] mx-[4rem]">
        <div class="container mx-[5rem] flex justify-center items-center">
          <div
            v-for="(item, index) in menuItems"
            :key="index"
            class="hidden md:flex"
          >
            <a
              class="flex items-center justify-center text-white hover:text-gray-500 w-40 text-center font text-xl"
            >
              <span class="text-sm">{{ item.label }}</span>
            </a>
            <!-- Check if it's not the last item to show the arrow -->
            <img
              v-if="index < menuItems.length - 1"
              src="@/assets/Arrow.svg"
              alt=""
              class="mx-32"
            />
          </div>
        </div>
      </nav>
    </div>

    <div class="container-port relative">
      <img src="@/assets/portafolio.svg" alt="" class="mx-auto h-[425px]" />
      <h1
        class="font-winter text-red text-7xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        Experience
      </h1>
    </div>
    <div class="views-container flex justify-evenly mt-10 mb-10">
      <div v-for="(project, index) in portafolio" :key="index" class="img-web">
        <div class="img-container">
          <img :src="project.url" :alt="project.name" />
          <div class="project-overlay">
            <div class="project-name font-sfMedium">{{ project.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="subtitle text-center text-white font-sfLight w-auto h-[10px] mb-28 mt-20 text-xl m-10"
    >
      <p>
        Discover my portfolio of web projects, showcasing a variety of creative
        and technically engaging endeavors. From captivating user interfaces to
        imaginative designs, this collection highlights my skills and commitment
        to crafting meaningful digital experiences. Explore a showcase of school
        projects that reflect my dedication to learning and applying design
        principles in practical, real-world contexts.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import page1 from "@/assets/page1.svg";
import page2 from "@/assets/page2.svg";
import page3 from "@/assets/page3.svg";

const menuItems = [
  { label: "RESUME", link: "#" },
  { label: "ABOUT", link: "#" },
  { label: "RETURN", link: "#" },
  { label: "CONTACT", link: "#" },
];

const portafolio = [
  { url: page1, name: "Hotel Jaqueline" },
  { url: page2, name: "Animales del Bosque" },
  { url: page3, name: "FastOrder" },
];
</script>

<style scoped>
a {
  text-decoration: none;
  padding: 10px;
  border: 2px solid white;
  border-radius: 2rem;
  cursor: pointer;
}

.img-web {
  border: 2px solid white;
  margin: 10px;
  cursor: pointer;
}

.img-web img {
  max-width: 100%;
  height: auto;
}

.img-container {
  position: relative;
  overflow: hidden;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.3s;
}

.project-name {
  color: white;
  text-align: center;
  padding: 10px;
}

.img-container:hover .project-overlay {
  opacity: 1;
}
</style>
