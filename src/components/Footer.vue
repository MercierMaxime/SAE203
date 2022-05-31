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
      <RouterLink to="/Festival"><p class="pt-8 font-helvetica text-white sm:text-lg lg:text-xl xl:text-3xl">Le Festival</p></RouterLink>
      <RouterLink to="/Billeterie"><p class="pt-8 font-helvetica text-white sm:text-lg lg:text-xl xl:text-3xl">Billeterie</p></RouterLink>
      <a class="pt-8 font-helvetica text-white sm:text-lg lg:text-xl xl:text-3xl" href="https://www.ville-aubenas.fr/"
        >La ville d'Aubenas</a
      >
      <RouterLink to="/Evenement"><p class="pt-8 font-helvetica text-white sm:text-lg lg:text-xl xl:text-3xl">Evénements</p></RouterLink>
      <RouterLink to="/Contact"><p class="pt-8 font-helvetica text-white sm:text-lg lg:text-xl xl:text-3xl">Contact</p></RouterLink>
      <RouterLink to="/Mentions"
        ><p class="pt-8 font-helvetica text-white sm:text-lg lg:text-xl xl:text-3xl">Mentions légales</p></RouterLink
      >
    </div>
    <Logo class="m-auto pt-2" />
  </footer>
</template>
