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
  <img src="../components/img/Illustration_2.png" alt="Illustration2" />
  <div class="bg-gradient-to-bl from-indigo-500 to-sky-400 pt-6">
    <div class="m-auto flex w-4/5 flex-col items-center justify-center gap-4 rounded-lg bg-white">
      <div
        class="relative flex flex-grow flex-col items-center justify-center self-stretch rounded-t-lg bg-Jaune-40% bg-opacity-60 pt-3 pb-2"
      >
        <p class="flex text-center font-bold text-black sm:text-xl lg:text-3xl xl:text-5xl">Charles AZNAVOUR par Roger GUICHARD</p>
      </div>

      <div class="relative flex flex-col items-center justify-center gap-2.5 self-stretch px-2 pt-8">
        <p class="flex-shrink-0 flex-grow-0 px-2 text-center text-base text-black">
          <span class="flex-shrink-0 flex-grow-0 px-2 text-center font-bold text-black sm:text-base lg:text-xl xl:text-3xl"
            >Retrouvez votre chanteur préféré le :</span
          ><span
            class="flex-shrink-0 flex-grow-0 px-2 text-center text-Violet-foncer underline-offset-2 sm:text-base lg:text-xl xl:text-3xl"
            >14 Avril 2023 à 21h30</span
          >
        </p>

        <p class="flex-shrink-0 flex-grow-0 px-2 pt-8 text-center text-base text-black">
          <span class="flex-shrink-0 flex-grow-0 px-2 text-center font-bold text-black sm:text-base lg:text-xl xl:text-3xl">Lieu :</span
          ><span class="flex-shrink-0 flex-grow-0 px-2 text-center text-Bleu-ciel underline-offset-2 sm:text-base lg:text-xl xl:text-3xl"
            >Salle “Le Bournot”
          </span>
        </p>

        <p class="flex-shrink-0 flex-grow-0 px-2 pt-8 text-center text-base text-black">
          <span class="flex-shrink-0 flex-grow-0 px-2 text-center font-bold text-black sm:text-base lg:text-xl xl:text-3xl">Durée :</span
          ><span class="flex-shrink-0 flex-grow-0 px-2 text-center text-black underline-offset-2 sm:text-base lg:text-xl xl:text-3xl"
            >2H15
          </span>
        </p>

        <p class="flex-shrink-0 flex-grow-0 px-2 pt-8 text-center text-base text-black">
          <span class="flex-shrink-0 flex-grow-0 px-2 text-center font-bold text-black sm:text-base lg:text-xl xl:text-3xl">Adresse :</span
          ><span class="flex-shrink-0 flex-grow-0 px-2 text-center text-black underline-offset-2 sm:text-base lg:text-xl xl:text-3xl"
            >4 Bd Gambetta, 07200 Aubenas
          </span>
        </p>

        <p class="flex-shrink-0 flex-grow-0 px-2 pt-8 text-center text-base text-black">
          <span class="flex-shrink-0 flex-grow-0 px-2 text-center font-bold text-black sm:text-base lg:text-xl xl:text-3xl">Aperçu :</span>
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d689.7502064483286!2d4.391887527802655!3d44.62063196104215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b4dffc04f612bf%3A0x272b4d5aec386f73!2s4%20Bd%20Gambetta%2C%2007200%20Aubenas!5e0!3m2!1sfr!2sfr!4v1653986717340!5m2!1sfr!2sfr"
          class="h-96 w-full"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <p class="flex-shrink-0 flex-grow-0 px-2 pt-8 text-center text-base text-black">
          <span class="flex-shrink-0 flex-grow-0 px-2 text-center font-bold text-black sm:text-base lg:text-xl xl:text-3xl"
            >N° de téléphone de l’établissement :</span
          ><span class="flex-shrink-0 flex-grow-0 px-2 text-center text-black underline-offset-2 sm:text-base lg:text-xl xl:text-3xl"
            >04 75 89 02 02
          </span>
        </p>

        <p class="flex-shrink-0 flex-grow-0 px-2 pt-8 pb-12 text-center text-base text-black">
          <span class="flex-shrink-0 flex-grow-0 px-2 text-center font-bold text-black sm:text-base lg:text-xl xl:text-3xl"
            >Site Internet de l’établissement :</span
          ><a
            class="flex-shrink-0 flex-grow-0 px-2 text-center text-Bleu-ciel underline-offset-2 sm:text-base lg:text-xl xl:text-3xl"
            href="http://www.sallelebournot.fr/"
            >Salle "Le Bournot"</a
          >
        </p>
      </div>
    </div>

    <RouterLink to="/Billeterie"
      ><div class="flex flex-col items-center justify-center gap-2 pb-3 pt-6">
        <div class="relative flex flex-col items-center justify-center gap-1 rounded-lg bg-[#322e88] px-5 py-3">
          <p class="px-20 py-1 text-center text-white sm:text-lg lg:text-2xl xl:text-4xl">Réservation</p>
        </div>
      </div></RouterLink
    >

    <p class="px-16 pb-10 pt-20 text-center font-helvetica font-bold sm:text-xl lg:text-3xl xl:text-5xl">
      Pour toutes autres informations complémentaires :
    </p>

    <RouterLink to="/Contact"
      ><div class="flex flex-col items-center justify-center gap-2 pb-8">
        <div class="relative flex flex-col items-center justify-center gap-1 rounded-lg bg-[#322e88] px-5 py-3">
          <p class="px-20 py-1 text-center text-white sm:text-lg lg:text-2xl xl:text-4xl">Envoyer un message</p>
        </div>
      </div></RouterLink
    >

    <div class="grid grid-cols-2 gap-10">
      <RouterLink to="/Evenement">
        <div class="relative mt-20 ml-10 flex items-center justify-center rounded-lg bg-white">
          <div class="relative flex flex-col items-center justify-center gap-1">
            <svg viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-1/5 rotate-180" preserveAspectRatio="none">
              <path
                d="M76 46L98.5 68.5M98.5 68.5L76 91M98.5 68.5L38.5 68.5M136 68.5C136 105.779 105.779 136 68.5 136C31.2208 136 1 105.779 1 68.5C1 31.2208 31.2208 1 68.5 1C105.779 1 136 31.2208 136 68.5Z"
                stroke="#111827"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <p class="py-8 text-center text-black sm:text-lg lg:text-xl xl:text-2xl">Jean FERRAT par Hervé ROGNARD</p>
        </div>
      </RouterLink>

      <div class="relative mr-10 mt-20 flex items-center justify-center rounded-lg bg-white">
        <p class="py-8 text-center text-black sm:text-lg lg:text-xl xl:text-2xl">Charles AZNAVOUR par Roger GUICHARD</p>
        <div class="relative flex flex-col items-center justify-center gap-1">
          <svg viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-1/5" preserveAspectRatio="none">
            <path
              d="M76 46L98.5 68.5M98.5 68.5L76 91M98.5 68.5L38.5 68.5M136 68.5C136 105.779 105.779 136 68.5 136C31.2208 136 1 105.779 1 68.5C1 31.2208 31.2208 1 68.5 1C105.779 1 136 31.2208 136 68.5Z"
              stroke="#111827"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <br />
  </div>
  <Footerpart />
</template>