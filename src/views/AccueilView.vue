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
  <img src="../components/img/Illustration_1.png" alt="Illustration1" />

  <div class="bg-gradient-to-bl from-indigo-500 to-sky-400 pt-6">
    <div class="m-auto flex w-4/5 flex-col items-center justify-center gap-4 rounded-lg bg-white">
      <div class="relative flex flex-grow flex-col items-center justify-center gap-2 self-stretch pt-3">
        <p class="flex text-center font-bold text-black sm:text-xl lg:text-3xl xl:text-5xl">“Vieux Comme 9(0)”, c’est quoi ?</p>
      </div>
      <div class="relative flex flex-col items-center justify-center gap-2.5 self-stretch px-2">
        <p class="flex-shrink-0 flex-grow-0 px-2 text-left text-base text-black">
          <span class="flex-shrink-0 flex-grow-0 px-2 text-left text-base text-black"
            >C’est un festival qui retrace les souvenirs de vôtre enfance en vous replongeant dans le folklore des années phares que sont
            les années 90.</span
          ><br /><span class="flex-shrink-0 flex-grow-0 px-2 text-left text-base text-black"
            >Les chansons de vos chanteurs adorés sont reproduites à la perfection grâce à nos artistes talentueux, pour faire vivre une
            expérience de nostalgie intense et unique !</span
          >
        </p>
      </div>
      <RouterLink to="/Festival"
        ><div class="flex flex-col items-center justify-center gap-2 pb-3">
          <div class="relative flex flex-col items-center justify-center gap-1 rounded-lg bg-[#322e88] px-5 py-3">
            <p class="text-center text-base text-white">Plus de détails</p>
          </div>
        </div>
      </RouterLink>
    </div>

    <p class="custom-font pb-10 pt-20 text-center sm:text-3xl lg:text-4xl xl:text-6xl">Retrouver vos concerts favorits</p>

    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      <div class="relative m-auto flex w-4/5 flex-col items-center justify-center pb-10">
        <img src="../components/img/Concert_1.png" class="flex-grow self-stretch rounded-tl-lg rounded-tr-lg object-none" />
        <div class="relative flex flex-grow flex-col items-center justify-center gap-2.5 self-stretch bg-[#c4c4c4] px-[18px] py-2.5">
          <p class="flex-shrink-0 flex-grow-0 self-stretch text-center text-base text-black">Jean FERRAT - Interprêté par Hervé ROGNARD</p>
          <p class="flex-shrink-0 flex-grow-0 self-stretch text-center text-base text-[#322e88]">Salle “Le Bournot”</p>
        </div>
        <div
          class="
            relative
            flex flex-grow flex-col
            items-center
            justify-center
            gap-8
            self-stretch
            rounded-bl-lg rounded-br-lg
            bg-white
            px-3
            py-3
          "
        >
          <p class="flex-grow self-stretch text-center text-2xl">
            <span class="flex-grow self-stretch text-center text-2xl text-[#54bb30]"> 14 Avril 2023</span
            ><span class="flex-grow self-stretch text-center text-2xl text-black"> - </span
            ><span class="flex-grow self-stretch text-center text-2xl text-[#29c0f1]">18H45</span>
          </p>
          <RouterLink to="/Evenement">
            <div
              class="
                relative
                flex flex-shrink-0 flex-grow-0 flex-col
                items-center
                justify-center
                gap-2.5
                rounded-lg
                bg-[#ffe607]/40
                px-10
                py-1
              "
            >
              <p class="flex-shrink-0 flex-grow-0 text-center text-base text-black">En savoir plus</p>
            </div>
          </RouterLink>
        </div>
      </div>

      <div class="relative m-auto flex w-4/5 flex-col items-center justify-center pb-10">
        <img src="../components/img/Concert_2.png" class="flex-grow self-stretch rounded-tl-lg rounded-tr-lg object-none" />
        <div class="relative flex flex-grow flex-col items-center justify-center gap-2.5 self-stretch bg-[#c4c4c4] px-[18px] py-2.5">
          <p class="flex-shrink-0 flex-grow-0 self-stretch text-center text-base text-black">
            Maxime LE FORESTIER - Interprêté par Slyvain GUILLAUME
          </p>
          <p class="flex-shrink-0 flex-grow-0 self-stretch text-center text-base text-[#322e88]">Le château d’Aubenas</p>
        </div>
        <div
          class="
            relative
            flex flex-grow flex-col
            items-center
            justify-center
            gap-8
            self-stretch
            rounded-bl-lg rounded-br-lg
            bg-white
            px-3
            py-3
          "
        >
          <p class="flex-grow self-stretch text-center text-2xl">
            <span class="flex-grow self-stretch text-center text-2xl text-[#54bb30]"> 14 Avril 2023</span
            ><span class="flex-grow self-stretch text-center text-2xl text-black"> - </span
            ><span class="flex-grow self-stretch text-center text-2xl text-[#29c0f1]">20h15</span>
          </p>
          <RouterLink to="/Evenement3">
            <div
              class="
                relative
                flex flex-shrink-0 flex-grow-0 flex-col
                items-center
                justify-center
                gap-2.5
                rounded-lg
                bg-[#ffe607]/40
                px-10
                py-1
              "
            >
              <p class="flex-shrink-0 flex-grow-0 text-center text-base text-black">En savoir plus</p>
            </div>
          </RouterLink>
        </div>
      </div>

      <div class="relative m-auto flex w-4/5 flex-col items-center justify-center pb-10">
        <img src="../components/img/Concert_3.png" class="flex-grow self-stretch rounded-tl-lg rounded-tr-lg object-none" />
        <div class="relative flex flex-grow flex-col items-center justify-center gap-2.5 self-stretch bg-[#c4c4c4] px-[18px] py-2.5">
          <p class="flex-shrink-0 flex-grow-0 self-stretch text-center text-base text-black">
            Charles AZNAVOUR - Interprêté par Roger GUICHARD
          </p>
          <p class="flex-shrink-0 flex-grow-0 self-stretch text-center text-base text-[#322e88]">Salle “Le Bournot”</p>
        </div>
        <div
          class="
            relative
            flex flex-grow flex-col
            items-center
            justify-center
            gap-8
            self-stretch
            rounded-bl-lg rounded-br-lg
            bg-white
            px-3
            py-3
          "
        >
          <p class="flex-grow self-stretch text-center text-2xl">
            <span class="flex-grow self-stretch text-center text-2xl text-[#54bb30]"> 14 Avril 2023</span
            ><span class="flex-grow self-stretch text-center text-2xl text-black"> - </span
            ><span class="flex-grow self-stretch text-center text-2xl text-[#29c0f1]">21h30</span>
          </p>
          <RouterLink to="/Evenement2">
            <div
              class="
                relative
                flex flex-shrink-0 flex-grow-0 flex-col
                items-center
                justify-center
                gap-2.5
                rounded-lg
                bg-[#ffe607]/40
                px-10
                py-1
              "
            >
              <p class="flex-shrink-0 flex-grow-0 text-center text-base text-black">En savoir plus</p>
            </div>
          </RouterLink>
        </div>
      </div>

      <div class="relative m-auto flex w-4/5 flex-col items-center justify-center pb-10">
        <img src="../components/img/Concert_4.png" class="flex-grow self-stretch rounded-tl-lg rounded-tr-lg object-none" />
        <div class="relative flex flex-grow flex-col items-center justify-center gap-2.5 self-stretch bg-[#c4c4c4] px-[18px] py-2.5">
          <p class="flex-shrink-0 flex-grow-0 self-stretch text-center text-base text-black">
            Jean-Jacques GOLDMAN - Interprêté par Flavien LEMONT
          </p>
          <p class="flex-shrink-0 flex-grow-0 self-stretch text-center text-base text-[#322e88]">Le château d’Aubenas</p>
        </div>
        <div
          class="
            relative
            flex flex-grow flex-col
            items-center
            justify-center
            gap-8
            self-stretch
            rounded-bl-lg rounded-br-lg
            bg-white
            px-3
            py-3
          "
        >
          <p class="flex-grow self-stretch text-center text-2xl">
            <span class="flex-grow self-stretch text-center text-2xl text-[#54bb30]"> 14 Avril 2023</span
            ><span class="flex-grow self-stretch text-center text-2xl text-black"> - </span
            ><span class="flex-grow self-stretch text-center text-2xl text-[#29c0f1]">23h15</span>
          </p>
          <RouterLink to="/Evenement4">
            <div
              class="
                relative
                flex flex-shrink-0 flex-grow-0 flex-col
                items-center
                justify-center
                gap-2.5
                rounded-lg
                bg-[#ffe607]/40
                px-10
                py-1
              "
            >
              <p class="flex-shrink-0 flex-grow-0 text-center text-base text-black">En savoir plus</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>

    <p class="custom-font pb-10 pt-20 text-center sm:text-3xl lg:text-4xl xl:text-6xl">Réserver vos places</p>

    <p class="pb-3 text-center text-black sm:text-base lg:text-xl xl:text-2xl">
      <span class="text-center text-black sm:text-base lg:text-xl xl:text-2xl">Nous avons l’honneur de vous proposez un total de </span
      ><span class="text-center font-bold text-black sm:text-base lg:text-xl xl:text-2xl">500</span
      ><span class="text-center text-black sm:text-base lg:text-xl xl:text-2xl"> tickets disponibles par concert !</span>
    </p>

    <p class="text-center text-black sm:text-base lg:text-xl xl:text-2xl">
      <span class="text-left text-black sm:text-base lg:text-xl xl:text-2xl">Tarif unique : </span
      ><span class="text-left font-bold text-black sm:text-base lg:text-xl xl:text-2xl">20 €</span
      ><span class="text-left text-black sm:text-base lg:text-xl xl:text-2xl"> par personne (+18 ans)</span>
    </p>

    <p class="m-auto h-4 w-64 text-center text-[#322e88] sm:text-base lg:text-lg xl:text-xl">(Seulement 347 places restantes !)</p>

    <RouterLink to="/Billeterie"
      ><div class="flex flex-col items-center justify-center gap-2 pb-3 pt-20">
        <div class="relative flex flex-col items-center justify-center gap-1 rounded-lg bg-[#322e88] px-5 py-3">
          <p class="px-20 py-1 text-center text-white sm:text-lg lg:text-2xl xl:text-4xl">Réservation</p>
        </div>
      </div></RouterLink
    >

    <p class="custom-font pb-10 pt-20 text-center sm:text-3xl lg:text-4xl xl:text-6xl">Retrouver vos artistes préférés</p>

    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      <div class="relative m-auto flex w-4/5 flex-col items-center justify-center pb-10">
        <img
          src="../components/img/Slyvain_GUILLAUME.png"
          class="flex-grow self-stretch rounded-tl-[25px] rounded-tr-[25px] object-cover"
        />
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
            <span class="flex-grow self-stretch text-center text-2xl text-white">Slyvain GUILLAUME</span>
            <br />
            <span class="flex-grow self-stretch text-center text-base text-white">dans le rôle de</span>
            <br />
            <span class="flex-grow self-stretch text-center text-2xl text-white">Maxime LE FORESTIER</span>
          </p>
          <RouterLink to="/Evenement3">
            <div
              class="
                relative
                flex flex-shrink-0 flex-grow-0 flex-col
                items-center
                justify-center
                gap-2.5
                rounded-lg
                bg-[#54bb30]/80
                px-5
                py-1.5
              "
            >
              <p class="flex-shrink-0 flex-grow-0 text-left text-base text-white">Voir son prochain concert</p>
            </div>
          </RouterLink>
        </div>
      </div>

      <div class="relative m-auto flex w-4/5 flex-col items-center justify-center pb-10">
        <img src="../components/img/Roger_GUICHARD.png" class="flex-grow self-stretch rounded-tl-[25px] rounded-tr-[25px] object-cover" />
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
            <span class="flex-grow self-stretch text-center text-2xl text-white">Roger GUICHARD</span>
            <br />
            <span class="flex-grow self-stretch text-center text-base text-white">dans le rôle de</span>
            <br />
            <span class="flex-grow self-stretch text-center text-2xl text-white">Charles AZNAVOUR</span>
          </p>
          <RouterLink to="/Evenement2">
            <div
              class="
                relative
                flex flex-shrink-0 flex-grow-0 flex-col
                items-center
                justify-center
                gap-2.5
                rounded-lg
                bg-[#54bb30]/80
                px-5
                py-1.5
              "
            >
              <p class="flex-shrink-0 flex-grow-0 text-left text-base text-white">Voir son prochain concert</p>
            </div>
          </RouterLink>
        </div>
      </div>

      <div class="relative m-auto flex w-4/5 flex-col items-center justify-center pb-10">
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
            <span class="flex-grow self-stretch text-center text-2xl text-white">Flavien LEMONT</span>
            <br />
            <span class="flex-grow self-stretch text-center text-base text-white">dans le rôle de</span>
            <br />
            <span class="flex-grow self-stretch text-center text-2xl text-white">Jean-Jacques GOLDMAN</span>
          </p>
          <RouterLink to="/Evenement4">
            <div
              class="
                relative
                flex flex-shrink-0 flex-grow-0 flex-col
                items-center
                justify-center
                gap-2.5
                rounded-lg
                bg-[#54bb30]/80
                px-5
                py-1.5
              "
            >
              <p class="flex-shrink-0 flex-grow-0 text-left text-base text-white">Voir son prochain concert</p>
            </div>
          </RouterLink>
        </div>
      </div>

      <div class="relative m-auto flex w-4/5 flex-col items-center justify-center pb-10">
        <img src="../components/img/Herve_ROGNARD.png" class="flex-grow self-stretch rounded-tl-[25px] rounded-tr-[25px] object-cover" />
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
            <span class="flex-grow self-stretch text-center text-2xl text-white">Hervé ROGNARD</span>
            <br />
            <span class="flex-grow self-stretch text-center text-base text-white">dans le rôle de</span>
            <br />
            <span class="flex-grow self-stretch text-center text-2xl text-white">Jean FERRAT</span>
          </p>
          <RouterLink to="/Evenement">
            <div
              class="
                relative
                flex flex-shrink-0 flex-grow-0 flex-col
                items-center
                justify-center
                gap-2.5
                rounded-lg
                bg-[#54bb30]/80
                px-5
                py-1.5
              "
            >
              <p class="flex-shrink-0 flex-grow-0 text-left text-base text-white">Voir son prochain concert</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <Footerpart />
</template>

<style>
@font-face {
  font-family: Beckman;
  src: url(./fonts/Beckman-Free.woff2) format("woff2");
}
.custom-font {
  font-family: Beckman;
}
</style>

