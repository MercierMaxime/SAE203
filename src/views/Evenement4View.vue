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
        <p class="flex text-center font-bold text-black sm:text-xl lg:text-3xl xl:text-5xl">Jean-Jacques GOLDMAN par Flavien LEMONT</p>
      </div>

      <div class="relative flex flex-col items-center justify-center gap-2.5 self-stretch px-2 pt-8">
        <p class="flex-shrink-0 flex-grow-0 px-2 text-center text-base text-black">
          <span class="flex-shrink-0 flex-grow-0 px-2 text-center font-bold text-black sm:text-base lg:text-xl xl:text-3xl"
            >Retrouvez votre chanteur préféré le :</span
          ><span
            class="flex-shrink-0 flex-grow-0 px-2 text-center text-Violet-foncer underline-offset-2 sm:text-base lg:text-xl xl:text-3xl"
            >14 Avril 2023 à 23h15</span
          >
        </p>

        <p class="flex-shrink-0 flex-grow-0 px-2 pt-8 text-center text-base text-black">
          <span class="flex-shrink-0 flex-grow-0 px-2 text-center font-bold text-black sm:text-base lg:text-xl xl:text-3xl">Lieu :</span
          ><span class="flex-shrink-0 flex-grow-0 px-2 text-center text-Bleu-ciel underline-offset-2 sm:text-base lg:text-xl xl:text-3xl"
            >Château d’Aubenas
          </span>
        </p>

        <p class="flex-shrink-0 flex-grow-0 px-2 pt-8 text-center text-base text-black">
          <span class="flex-shrink-0 flex-grow-0 px-2 text-center font-bold text-black sm:text-base lg:text-xl xl:text-3xl">Durée :</span
          ><span class="flex-shrink-0 flex-grow-0 px-2 text-center text-black underline-offset-2 sm:text-base lg:text-xl xl:text-3xl"
            >2H
          </span>
        </p>

        <p class="flex-shrink-0 flex-grow-0 px-2 pt-8 text-center text-base text-black">
          <span class="flex-shrink-0 flex-grow-0 px-2 text-center font-bold text-black sm:text-base lg:text-xl xl:text-3xl">Adresse :</span
          ><span class="flex-shrink-0 flex-grow-0 px-2 text-center text-black underline-offset-2 sm:text-base lg:text-xl xl:text-3xl"
            >Pl. de l'Hôtel de ville, 07200 Aubenas
          </span>
        </p>

        <p class="flex-shrink-0 flex-grow-0 px-2 pt-8 text-center text-base text-black">
          <span class="flex-shrink-0 flex-grow-0 px-2 text-center font-bold text-black sm:text-base lg:text-xl xl:text-3xl">Aperçu :</span>
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2839.8405540117715!2d4.387671314426122!3d44.62073479734732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b4dffc87830ce3%3A0xb98445ccff60b82a!2sPl.%20de%20l&#39;H%C3%B4tel%20de%20ville%2C%2007200%20Aubenas!5e0!3m2!1sfr!2sfr!4v1653997734074!5m2!1sfr!2sfr"
          class="h-96 w-full"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <p class="flex-shrink-0 flex-grow-0 px-2 pt-8 pb-8 text-center text-base text-black">
          <span class="flex-shrink-0 flex-grow-0 px-2 text-center font-bold text-black sm:text-base lg:text-xl xl:text-3xl"
            >N° de téléphone de l’établissement :</span
          ><span class="flex-shrink-0 flex-grow-0 px-2 text-center text-black underline-offset-2 sm:text-base lg:text-xl xl:text-3xl"
            >04 75 87 81 11
          </span>
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

    <p class="px-16 pb-10 pt-20 text-center font-helvetica font-bold sm:text-xl lg:text-3xl xl:text-5xl">Biographie :</p>

    <div class="relative m-auto mt-16 flex w-4/5 flex-col items-center justify-center pb-10">
      <img src="../components/img/Flavien_LEMONT.png" class="flex-grow self-stretch rounded-tl-[25px] rounded-tr-[25px] object-cover" />
      <div
        class="
          relative
          flex flex-grow flex-col
          items-center
          justify-center
          gap-5
          self-stretch
          rounded-bl-xl rounded-br-xl
          bg-[#322e88]/60
          px-1.5
          py-2
        "
      >
        <p class="flex-grow self-stretch text-center text-2xl">
          <span class="flex-grow self-stretch text-center text-2xl text-white">Flavien LEMONT :</span>
        </p>

        <p class="flex-grow self-stretch text-center text-2xl">
          <span class="flex-grow self-stretch text-center text-base text-white">Né à Paris, France</span>
        </p>

        <p class="flex-grow self-stretch text-center text-2xl">
          <span class="flex-grow self-stretch text-center text-base text-white">Age : 28 ans </span>
        </p>

        <p class="flex-grow self-stretch text-center text-2xl">
          <span class="flex-grow self-stretch text-center text-base text-white"
            >Diplôme supérieur en musique (Spécialité : Guitariste)
          </span>
        </p>

        <p class="flex-grow self-stretch text-center text-2xl">
          <span class="flex-grow self-stretch text-center text-base text-white">Pratiquant depuis 8 ans </span>
        </p>

        <p class="flex-grow self-stretch text-center text-2xl">
          <span class="flex-grow self-stretch text-center text-base text-white">Intéprêteur de Jean-Jacques GOLDMAN </span>
        </p>

        <p class="flex-grow self-stretch text-center text-2xl">
          <span class="flex-grow self-stretch text-center text-xl font-bold text-white">En tournée prochainement à Aubenas, France</span>
        </p>
      </div>
    </div>

    <RouterLink to="/Evenement3">
      <div class="relative m-auto mt-20 flex w-3/5 items-center justify-center rounded-lg bg-white">
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
        <p class="py-8 text-center text-black sm:text-lg lg:text-xl xl:text-2xl">Maxime LE FORESTIER par Slyvain GUILLAUME</p>
      </div>
    </RouterLink>
    <br />
  </div>
  <Footerpart />
</template>