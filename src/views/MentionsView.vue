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

  <p class="flex text-center text-3xl font-bold text-black">Mentions légales :</p>
</template>