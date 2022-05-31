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
    <p class="pb-10 pt-20 text-center font-beckman text-white sm:text-3xl lg:text-4xl xl:text-6xl">Erreur - 404</p>

    <p class="pb-10 pt-10 text-center font-helvetica text-white sm:text-xl lg:text-2xl xl:text-4xl">
      Il semblerait que la page que vous cherchiez ne sois pas ici...
    </p>

    <p class="px-20 pb-10 pt-10 text-center font-helvetica text-white sm:text-xl lg:text-2xl xl:text-4xl">
      Si vous le souhaitez, vous pouvez revenir à l'accueil du festival en cliquant sur le bouton présent ci-dessous :
    </p>

    <RouterLink to="/"
      ><div class="flex flex-col items-center justify-center gap-2 pb-3 pt-10">
        <div class="relative flex flex-col items-center justify-center gap-1 rounded-lg bg-[#322e88] px-5 py-3">
          <p class="px-20 text-center text-white sm:text-lg lg:text-2xl xl:text-4xl">Retour à l'accueil</p>
        </div>
      </div></RouterLink
    >

    <p class="px-20 pb-10 pt-16 text-center font-helvetica text-white sm:text-xl lg:text-2xl xl:text-4xl">
      Ou bien, vous pouvez toujours naviguer plus rapidement sur les pages du site grâce au haut et pied de page.
    </p>

    <p class="pb-32 pt-10 text-center font-helvetica font-bold text-white sm:text-2xl lg:text-4xl xl:text-5xl">
      Passez une excellente visite !
    </p>
  </div>
  <Footerpart />
</template>