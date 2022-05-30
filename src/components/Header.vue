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
      <p class="pt-8 font-helvetica text-black sm:text-lg lg:text-xl xl:text-3xl">Le Festival</p>
      <p class="pt-8 font-helvetica text-black sm:text-lg lg:text-xl xl:text-3xl">Evénements</p>
      <Logo class="pb-2" />
      <p class="pt-8 font-helvetica text-black sm:text-lg lg:text-xl xl:text-3xl">Billeterie</p>
      <p class="pt-8 font-helvetica text-black sm:text-lg lg:text-xl xl:text-3xl">Contact</p>
    </div>
  </header>
</template>
