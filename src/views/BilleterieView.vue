<script>
import Headerpart from "../components/Header.vue";
import Footerpart from "../components/Footer.vue";

export default {
  name: "App",
  components: { Headerpart, Footerpart },
};
</script>

<template>
  <Headerpart />
  <div class="bg-gradient-to-bl from-indigo-500 to-sky-400 pt-6">
    <p class="flex pl-5 pt-5 font-bold text-white sm:text-3xl lg:text-5xl xl:text-7xl">Billeterie :</p>

    <p class="px-5 pt-6 text-center text-white sm:text-xl lg:text-3xl xl:text-5xl">
      Ici, vous pouvez acheter vos places pour assister aux spectacles de vos chanteurs préférés !
    </p>

    <p class="px-5 pt-6 text-left text-white sm:text-xl lg:text-3xl xl:text-5xl">Choix du concert :</p>

    <div class="relative m-auto mt-5 flex w-3/5 items-center justify-center gap-20 rounded-lg border-4 border-black bg-white px-4 py-2.5">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="relative h-5 w-5 flex-shrink-0 flex-grow-0"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M63.3332 30L39.9998 53.3333L16.6665 30"
          stroke="#111827"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <p class="flex-grow text-left text-black sm:text-base lg:text-xl xl:text-3xl">Jean Ferrat par Hervé ROGNARD</p>
    </div>
  </div>
</template>