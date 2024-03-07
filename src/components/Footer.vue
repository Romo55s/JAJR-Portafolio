<template>
  <div class="footer mt-10 font-sfMedium back-test">
    <div class="content grid grid-cols-2 gap-80 ml-20 w-auto pt-14 mb-24">
      <div class="col-span-1 md:col-span-1 md:col-start-1 contact text-white">
        <div class="flex flex-col justify-center">
          <p class="text-xl">
            CONTACT ME <br />
            QUICK RESPONSE
          </p>
          <div class="icons flex justify-center mt-2 w-36 gap-4 ">
            <fa :icon="['fab', 'instagram']" class="fa-xl button-pop" />
            <fa :icon="['fab', 'linkedin']" class="fa-xl button-pop" />
            <fa :icon="['fab', 'discord']" class="fa-xl button-pop" />
            <fa :icon="['fab', 'github']" class="fa-xl button-pop" />
          </div>
        </div>
      </div>
      <div class="col-span-1 md:col-span-1 text-white">
        <div class="flex flex-col justify-center">
          <p class="text-xl">
            GET IN TOUCH USING THE FORM BELOW <br />
            EXCITED TO CONNECT AND DISCUSS OPPORTUNITIES
          </p>
          <form class="mt-4">
            <div class="entry-area">
              <div class="input-container">
                <input type="email" placeholder="ENTER YOUR EMAIL" required />
                <button @click="sendForm">
                  <fa
                    :icon="['fas', 'paper-plane']"
                    class=" cursor-pointer fa-f"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center">
      <img src="@/assets/Title.svg" alt="" class="mr-5 ml-5" />
      <p
        class="text-white m-0 border-t border-white w-full text-center p-2"
        style="margin-top: -10px"
      >
        @COPYRIGHT 2023 TONYROMO, INC, ALL RIGHTS RESERVED
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const menuItems = [
  { label: "RESUME", link: "#" },
  { label: "ABOUT", link: "#" },
  { label: "RETURN", link: "#" },
  { label: "CONTACT", link: "#" },
];

const sendForm = () => {
  // Lógica para enviar el formulario
  console.log("Formulario enviado");
};
</script>

<style scoped>
.button-pop:hover {
  color: red;
  transform: scale(1.1);
  cursor: pointer;
}

.input-container {
  position: relative;
}

button {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
}

button .fa-f {
  color: rgb(162, 163, 163);
  
  margin: 0px 10px;
}

button:hover .fa-f {
  color: white;
}

.entry-area {
  display: flex;
  align-items: center;
  height: 80px;
  line-height: 80px;
}

input {
  width: 480px;
  flex-grow: 1;
  outline: none;
  font-size: 1.2em;
  padding: 0 30px;
  line-height: 80px;
  border-bottom: 4px solid #070707;
  transition: 0.1s ease;
  background: transparent;
}

input::placeholder {
  color: #e0e0e0;
}

input:focus,
input:valid {
  color: #ffffff;
  border: 4px solid #ffffff;
}

a {
  text-decoration: none;
  padding: 10px;
  border: 2px solid white;
  border-radius: 2rem;
  cursor: pointer;
}
.text {
  font-size: 29.5vw;
  margin: 0;
}

.smaller {
  margin-left: 20px;
}

.back-test {
  background-color: #050505;
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
