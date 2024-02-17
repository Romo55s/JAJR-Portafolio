<template>
  <div>
    <div class="flex h-[250px] mx-10">
      <div class="container-port relative flex-1">
        <h1
          class="font-winter text-red text-7xl absolute top-44 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        >
          About Me
        </h1>
        <div class="title font-robuck text-white text-center relative">
          <h1 class="text">LEARN<span class="smaller">MORE</span></h1>
        </div>
      </div>
      <img
        src="@/assets/img/back-test.webp"
        alt=""
        class="flex-1 mt-12 max-w-[35%] h-[250px] mr-10"
      />
    </div>
    <div class="grid grid-cols-2 items-center">
      <div class="w-auto h-[700px] m-28">
        <img
          src="@/assets/img/grayRomo.webp"
          alt=""
          class="w-full h-full object-cover"
          style="object-position: 50% 20%"
        />
      </div>
      <div class="container w-[800px] text-white font-sfLight text-2xl">
        <p class="mb-8">
          I'm Tony Romo, a detail-oriented Computer Engineering student
          currently in the eighth semester. I am passionate about learning new
          technologies and am on the lookout for opportunities as a front-end
          developer. My current focus includes mastering Flutter and UI/UX
          design. In addition, I have hands-on experience with JavaScript
          frameworks such as Angular and Vue.js, and I am eager to contribute to
          innovative projects that challenge and enhance my skills.
        </p>
        <table class="w-full mb-8">
          <tbody>
            <tr>
              <td class="py-2 px-4 border">Birthday</td>
              <td class="py-2 px-4 border">June 4, 2002</td>
            </tr>
            <tr>
              <td class="py-2 px-4 border">City</td>
              <td class="py-2 px-4 border">Aguascalientes</td>
            </tr>
            <tr>
              <td class="py-2 px-4 border">Age</td>
              <td class="py-2 px-4 border">21</td>
            </tr>
            <tr>
              <td class="py-2 px-4 border">Phone</td>
              <td class="py-2 px-4 border">(+52) 33-3189-0526</td>
            </tr>
            <tr>
              <td class="py-2 px-4 border">Email</td>
              <td class="py-2 px-4 border">
                jimenez.romo.jose.antonio@gmail.com
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="flex mx-10 items-center w-auto justify-evenly">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div
          class="flex flex-row justify-center items-center text-center font text-sm p-4 md:w-full md:h-20"
          v-for="(item, index) in menuItems"
          :key="index"
        >
          <a class="block text-white hover:text-gray-500 w-full">
            {{ item.label }}
          </a>
        </div>
      </div>
      <img src="@/assets/img/Interests.svg" alt="" class="ml-4 w-[1000px]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface MenuItem {
  label: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { label: "ANGULAR", link: "#" },
  { label: "NODE JS", link: "#" },
  { label: "FIGMA", link: "#" },
  { label: "PYTHON", link: "#" },
  { label: "MONGODB", link: "#" },
  { label: "TAILWIND", link: "#" },
  { label: "JS", link: "#" },
  { label: "VUE", link: "#" },
  { label: "ADOBE", link: "#" },
  { label: "ANDROID", link: "#" },
  { label: "FLUTTER", link: "#" },
  { label: "JAVA", link: "#" },
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
.smaller {
  margin-left: 20px;
}

.text{
  font-size: 15vw;
}

.container-port {
  width: 50%;
}
</style>
