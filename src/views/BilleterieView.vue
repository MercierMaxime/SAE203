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
    <p class="flex pl-5 pt-5 font-bold text-white sm:text-3xl lg:text-5xl xl:text-7xl">Billeterie :</p>

    <p class="px-5 pt-6 text-center text-white sm:text-xl lg:text-3xl xl:text-5xl">
      Ici, vous pouvez acheter vos places pour assister aux spectacles de vos chanteurs préférés !
    </p>

    <p class="px-5 pt-6 text-left text-white sm:text-xl lg:text-3xl xl:text-5xl">Choix du concert :</p>

    <div class="relative m-auto mt-5 flex w-3/5 items-center justify-center gap-20 rounded-lg border-4 border-black bg-white px-4 py-2.5">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="relative h-5 w-5 flex-shrink-0 flex-grow-0"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M63.3332 30L39.9998 53.3333L16.6665 30"
          stroke="#111827"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <p class="flex-grow text-center text-black sm:text-base lg:text-xl xl:text-3xl">Jean Ferrat par Hervé ROGNARD</p>
    </div>

    <p class="px-5 pt-6 text-left text-white sm:text-xl lg:text-3xl xl:text-5xl">Nombre de places :</p>

    <div class="relative m-auto mt-5 flex w-2/5 items-center justify-center gap-5 rounded-lg border-4 border-black bg-white px-2 py-1">
      <svg
        width="30"
        height="40"
        viewBox="0 0 86 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="relative flex-grow self-stretch"
        preserveAspectRatio="xMidYMid meet"
      >
        <path d="M64.5 40H21.5" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      <p class="flex-grow self-stretch text-center font-bold text-black sm:text-xl lg:text-3xl xl:text-5xl">0</p>
      <svg
        width="30"
        height="40"
        viewBox="0 0 86 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="relative flex-grow self-stretch"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M43.0002 13.3333V66.6666M71.6668 40L14.3335 40"
          stroke="#111827"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>

    <p class="px-5 pt-6 text-left text-white sm:text-xl lg:text-3xl xl:text-5xl">Type de paiement :</p>

    <div class="m-auto mt-5 grid w-3/5 grid-cols-3 space-x-4">
      <img src="../components/img/CB.png" alt="Carte bleue" />
      <img src="../components/img/Visa.png" alt="Carte VISA" />
      <img src="../components/img/MasterCard.png" alt="Carte MasterCard" />
    </div>

    <div class="mt-20 justify-center text-center">
      <div>
        <div class="form-check">
          <input
            class="
              form-check-input
              xl:h-30 xl:w-30
              sm:h-15 sm:w-15
              float-center
              mt-1
              mr-2
              cursor-pointer
              rounded-sm
              border border-gray-300
              bg-white bg-contain bg-center bg-no-repeat
              text-center
              transition
              duration-200
              checked:border-blue-500 checked:bg-white
              focus:outline-none
              lg:h-20 lg:w-20
            "
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label inline-block text-white sm:text-base lg:text-xl xl:text-3xl" for="flexCheckDefault">
            Vous vous engagez à accepter les conditions générales,
          </label>
          <label class="form-check-label inline-block text-white sm:text-base lg:text-xl xl:text-3xl" for="flexCheckDefault">
            ainsi que les règles de paiements européennes (DSP2).
          </label>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center gap-10 pt-12 pb-20">
      <div class="relative flex flex-col items-center justify-center gap-1 rounded-lg bg-[#322e88] px-5 py-3">
        <RouterLink to="/"><p class="px-20 py-1 text-center text-white sm:text-lg lg:text-2xl xl:text-4xl">Paiement</p></RouterLink>
      </div>
    </div>
  </div>
  <Footerpart />
</template>