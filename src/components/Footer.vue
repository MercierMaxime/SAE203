<script>
import Logo from "./icones/Logo_grand.vue";

export default {
  name: "App",
  components: { Logo },
};
</script>


<template>
  <footer class="bg-Violet-60% bg-opacity-75">
    <div class="grid grid-cols-3 pl-6">
      <p class="pt-8 font-helvetica text-white sm:text-lg lg:text-xl xl:text-3xl">Le Festival</p>
      <p class="pt-8 font-helvetica text-white sm:text-lg lg:text-xl xl:text-3xl">Billeterie</p>
      <p class="pt-8 font-helvetica text-white sm:text-lg lg:text-xl xl:text-3xl">La ville d'Aubenas</p>
      <p class="pt-8 font-helvetica text-white sm:text-lg lg:text-xl xl:text-3xl">Evénements</p>
      <p class="pt-8 font-helvetica text-white sm:text-lg lg:text-xl xl:text-3xl">Contact</p>
      <p class="pt-8 font-helvetica text-white sm:text-lg lg:text-xl xl:text-3xl">Mentions légales</p>
    </div>
    <Logo class="m-auto" />
  </footer>
</template>
