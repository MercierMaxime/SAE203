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
  <div class="bg-gradient-to-bl from-indigo-500 to-sky-400 pt-6"></div>
</template>