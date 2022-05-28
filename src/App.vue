<template>
  <RouterView />
</template>

<script>
import IconLogo from "./components/icones/Logo.vue";
import { FilmIcon } from "@heroicons/vue/outline";
export default {
  components: { IconLogo, FilmIcon },
};
</script>