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
  <img src="../components/img/Illustration_3.png" alt="Illustration3" />

  <div class="bg-gradient-to-bl from-indigo-500 to-sky-400 pt-6">
    <p class="text-center font-bold text-white sm:text-2xl lg:text-3xl xl:text-5xl">
      Afin d’inaugurer nôtre première tournée en France, nous avons choisi Aubenas pour commencer !
    </p>
    <p class="pt-8 pb-10 text-center font-bold text-white sm:text-2xl lg:text-3xl xl:text-5xl">
      Vieux Comme 9(0) se démarque des autres festivaux grâce à :
    </p>

    <div class="m-auto flex w-4/5 flex-col items-center justify-center gap-4 rounded-lg bg-white pb-7">
      <div class="relative flex flex-grow flex-col items-center justify-center gap-2 self-stretch pt-3">
        <p class="flex text-center text-3xl font-bold text-Vert">Sa ruralité :</p>
      </div>
      <div class="relative flex flex-col items-center justify-center gap-2.5 self-stretch">
        <p class="flex-shrink-0 flex-grow-0 px-2 text-left text-base text-black">
          <span class="flex-shrink-0 flex-grow-0 px-2 text-left text-base text-black"
            >Nous avons du coeur pour nos campagnes françaises, elles aussi ont besoin de vibrer durant le printemps et l’été. </span
          ><br /><span class="flex-shrink-0 flex-grow-0 px-2 text-left text-base text-black"
            >Les habitants des villages des différentes régions de France vont pouvoir enfin se divertir comme dans les milieux ruraux
            !</span
          >
        </p>
      </div>
    </div>
  </div>
</template>