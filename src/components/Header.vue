<script>
import Logo from "./icones/Logo_petit.vue";

export default {
  name: "App",
  components: { Logo },
};
</script>

<template>
  <header class="bg-Jaune-40% bg-opacity-60 p-1">
    <div class="grid-wrap-2 m-4 grid grid-cols-5 space-x-4">
      <RouterLink to="/Festival"><p class="pt-8 font-helvetica text-black sm:text-lg lg:text-xl xl:text-3xl">Le Festival</p></RouterLink>
      <p class="pt-8 font-helvetica text-black sm:text-lg lg:text-xl xl:text-3xl">Evénements</p>
      <RouterLink to="/"><Logo class="pb-2" /></RouterLink>
      <RouterLink to="/Billeterie"><p class="pt-8 font-helvetica text-black sm:text-lg lg:text-xl xl:text-3xl">Billeterie</p></RouterLink>
      <p class="pt-8 font-helvetica text-black sm:text-lg lg:text-xl xl:text-3xl">Contact</p>
    </div>
  </header>
</template>
