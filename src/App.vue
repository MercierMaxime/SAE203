<template>
  <RouterView />
</template>

<script>
import Logo from "./components/icones/Logo_petit.vue";
export default {
  components: { Logo },
};
</script>

<style>
@font-face {
  font-family: Beckman;
  src: url(./fonts/Beckman-Free.woff2) format("woff2");
}
.custom-font {
  font-family: Beckman;
}
</style>