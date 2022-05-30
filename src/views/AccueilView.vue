<script>
import Header from "../components/Header.vue";

export default {
  name: "App",
  components: { Header },
};
</script>

<template>
  <Header />
  <img src="../components/img/Illustration_1.png" alt="Illustration1" />

  <div class="bg-gradient-to-bl from-indigo-500 to-sky-400 pt-6">
    <div class="m-auto flex w-4/5 flex-col items-center justify-center gap-4 rounded-lg bg-white">
      <div class="relative flex flex-grow flex-col items-center justify-center gap-2 self-stretch pt-3">
        <p class="flex text-center text-xl font-bold text-black">“Vieux Comme 9(0)”, c’est quoi ?</p>
      </div>
      <div class="relative flex flex-col items-center justify-center gap-2.5 self-stretch">
        <p class="flex-shrink-0 flex-grow-0 text-left text-base text-black">
          <span class="flex-shrink-0 flex-grow-0 px-2 text-left text-base text-black"
            >C’est un festival qui retrace les souvenirs de vôtre enfance en vous replongeant dans le folklore des années phares que sont
            les années 90.</span
          ><br /><span class="flex-shrink-0 flex-grow-0 px-2 text-left text-base text-black"
            >Les chansons de vos chanteurs adorés sont reproduites à la perfection grâce à nos artistes talentueux, pour faire vivre une
            expérience de nostalgie intense et unique !</span
          >
        </p>
      </div>
      <div class="flex flex-col items-center justify-center gap-2 pb-3">
        <div class="relative flex flex-col items-center justify-center gap-1 rounded-lg bg-[#322e88] px-5 py-3">
          <p class="text-center text-base text-white">Plus de détails</p>
        </div>
      </div>
    </div>
    <p class="pt-20 text-center font-beckman sm:text-xl lg:text-3xl xl:text-5xl">Retrouver vos concerts favorits</p>
  </div>
</template>

