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
    <p class="flex pl-5 pt-5 font-bold text-white sm:text-3xl lg:text-5xl xl:text-7xl">Contact :</p>

    <p class="px-5 pt-6 text-center text-white sm:text-xl lg:text-3xl xl:text-5xl">
      Veuillez remplir les conditions ci-dessous pour que nous puissions répondre dans les plus brefs délais à vos questions.
    </p>

    <p class="px-5 pt-6 text-left text-white sm:text-xl lg:text-3xl xl:text-5xl">Nom :</p>
    <input
      type="text"
      class="
        lg:h-15
        relative
        m-auto
        mt-5
        flex
        w-3/5
        items-center
        justify-center
        gap-20
        rounded-lg
        border-4 border-black
        bg-white
        px-4
        py-2.5
        sm:h-10
        xl:h-20
      "
    />

    <p class="px-5 pt-6 text-left text-white sm:text-xl lg:text-3xl xl:text-5xl">Prénom :</p>
    <input
      type="text"
      class="
        lg:h-15
        relative
        m-auto
        mt-5
        flex
        w-3/5
        items-center
        justify-center
        gap-20
        rounded-lg
        border-4 border-black
        bg-white
        px-4
        py-2.5
        sm:h-10
        xl:h-20
      "
    />

    <p class="px-5 pt-6 text-left text-white sm:text-xl lg:text-3xl xl:text-5xl">E-mail :</p>
    <input
      type="text"
      class="
        lg:h-15
        relative
        m-auto
        mt-5
        flex
        w-3/5
        items-center
        justify-center
        gap-20
        rounded-lg
        border-4 border-black
        bg-white
        px-4
        py-2.5
        sm:h-10
        xl:h-20
      "
    />

    <p class="px-5 pt-6 text-left text-white sm:text-xl lg:text-3xl xl:text-5xl">Message :</p>
    <input
      type="text"
      class="
        sm:h-50
        xl:h-100
        relative
        m-auto
        mt-5
        flex
        w-4/5
        items-center
        justify-center
        gap-20
        rounded-lg
        border-4 border-black
        bg-white
        px-4
        py-2.5
        lg:h-80
      "
    />

    <p class="px-20 pt-14 text-center text-white sm:text-lg lg:text-xl xl:text-2xl">
      Veuillez remplir les conditions ci-dessous pour que nous puissions répondre dans les plus brefs délais à vos questions.
    </p>

    <div class="flex flex-col items-center justify-center gap-10 pt-12 pb-20">
      <div class="relative flex flex-col items-center justify-center gap-1 rounded-lg bg-[#322e88] px-5 py-3">
        <RouterLink to="/"><p class="px-20 py-1 text-center text-white sm:text-lg lg:text-2xl xl:text-4xl">Envoyer</p></RouterLink>
      </div>
    </div>
  </div>
  <Footerpart />
</template>