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

    <div class="m-auto mb-10 flex w-4/5 flex-col items-center justify-center gap-4 rounded-lg bg-white pb-7">
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

    <div class="m-auto mb-10 flex w-4/5 flex-col items-center justify-center gap-4 rounded-lg bg-white pb-7">
      <div class="relative flex flex-grow flex-col items-center justify-center gap-2 self-stretch pt-3">
        <p class="flex text-center text-3xl font-bold text-Bleu-ciel">Sa convivialité :</p>
      </div>
      <div class="relative flex flex-col items-center justify-center gap-2.5 self-stretch">
        <p class="flex-shrink-0 flex-grow-0 px-2 text-left text-base text-black">
          <span class="flex-shrink-0 flex-grow-0 px-2 text-left text-base text-black"
            >L’amour pour la chanson française n’est pas un choix, c’est un art de vivre, de transmettre les héritages musicaux et de faire
            vivre le patrimoine musical français. </span
          ><br /><span class="flex-shrink-0 flex-grow-0 px-2 text-left text-base text-black"
            >Ainsi que nouer de magnifiques relations avec les différentes catégories d’âge de la population, pouvoir faire revivre les
            meilleurs moments de nos aînés et de faire découvrir aux plus jeunes, les folies et les joies de la musique folkorique des
            années 90 !</span
          >
        </p>
      </div>
    </div>

    <div class="m-auto mb-10 flex w-4/5 flex-col items-center justify-center gap-4 rounded-lg bg-white pb-7">
      <div class="relative flex flex-grow flex-col items-center justify-center gap-2 self-stretch pt-3">
        <p class="flex text-center text-3xl font-bold text-Violet-foncer">Sa générosité :</p>
      </div>
      <div class="relative flex flex-col items-center justify-center gap-2.5 self-stretch">
        <p class="flex-shrink-0 flex-grow-0 px-2 text-left text-base text-black">
          <span class="flex-shrink-0 flex-grow-0 px-2 text-left text-base text-black"
            >Notre objectif principal, pouvoir faire vivre des sensations uniques dans les villages et dans les petites villes, de CHAQUE
            département français ! </span
          ><br /><span class="flex-shrink-0 flex-grow-0 px-2 text-left text-base text-black"
            >On ne laissera aucun coin de France sans avoir pu faire vibrer et faire danser ceux et celles qui apprécient chaque jour, les
            plaisirs de la musique française !</span
          >
          <br /><span class="flex-shrink-0 flex-grow-0 px-2 text-left text-base text-black"
            >Nous souhaitons pouvoir vous aussi, vous faire vivre les sensations qui nous emballent quand à l’idée incroyable de pouvoir
            faire revivre à la France, sa meilleure époque musicale !</span
          >
        </p>
      </div>
    </div>

    <p class="pt-8 pb-4 text-center font-bold text-white sm:text-2xl lg:text-3xl xl:text-5xl">La seule chose qui manque,</p>

    <p class="pb-10 text-center font-bold text-Violet-foncer sm:text-2xl lg:text-3xl xl:text-5xl">C’EST VOUS !</p>

    <div class="flex flex-col items-center justify-center gap-2 pb-20 pt-5">
      <div class="relative flex flex-col items-center justify-center gap-1 rounded-lg bg-[#322e88] px-5 py-3">
        <RouterLink to="/"><p class="px-20 py-1 text-center text-white sm:text-lg lg:text-2xl xl:text-4xl">Rejoignez-nous !</p></RouterLink>
      </div>
    </div>
  </div>
  <Footerpart />
</template>