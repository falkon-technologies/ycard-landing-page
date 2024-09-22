<template>
  <div class="bg-dark flex flex-col items-center">
    <div class="flex items-center justify-center mt-10 lg:mr-auto">
      <img class="lg:ml-12" src="/static/images/logo-ycard.png" alt="ycard-logo">
      <span class="linear-dark-text ml-6 text-2xl">yCard</span>
    </div>
    <div class="flex bg-transparent mt-10 p-10" style="position: relative; height: auto;">
      <div class="flex-grow z-10 bg-transparent p-2" style="width: 100%;">
        <h1 class="title text-4xl tablet:text-7xl font-bold text-center bg-transparent lg:text-6xl"
            style="width: 100%;">
          Construa seu <span class="linear-dark-text"> espaço profissional </span> e customize como quiser
        </h1>
      </div>
      <img class="hidden laptop:block absolute top-20 right-20 z-0" src="/static/images/logo-ycard-bigger.png"
           alt="logo-blur">
    </div>

    <div class="flex items-center justify-center">
      <p class="linear-light-text tablet:text-xl z-10 text-sm lg:mt-0" style="letter-spacing: 0.2em">
        mostre as suas capacidades com estilo
      </p>
    </div>
    <div class="flex flex-col items-center mt-20 lg:flex-row lg:space-x-64 lg:justify-center lg:w-full">
      <img class="lg:mt-auto w-fit" src="/static/images/card.png" alt="card">
      <div class="mt-20 flex flex-col text-2xl font-bold text-center w-full lg:w-1/3 lg:mt-auto lg:items-end">
        <div class="lg:text-3xl lg:w-1/2 lg:text-right">
          Escolha a sua stack e deixe seu cartão com a
          <span style="color: var(--color-primary)">sua cara!</span>
        </div>
        <div class="w-full mt-16 flex flex-col justify-center items-center lg:items-end">
          <div class="">
            <img src="/static/images/tech-icons.png" alt="tech-icons">
          </div>
        </div>
      </div>
    </div>
    <img class="w-fit p-20 mt-4" src="/static/images/app.png" alt="card">
    <div class="text-3xl font-bold text-center w-2/3 lg:text-6xl">
      Comece a ter produtividade agora
    </div>
    <div class="p-4 text-center mt-8 lg:text-2xl">
      Transforme a experiência de criar visuais criativos e performáticos com rapidez
    </div>
    <ToggleButton class="mt-24"/>
    <!-- <PricingCard class="mt-24" text-color="text-secondary" bg-color="bg-white" secondary=""
                 hover-color="hover:bg-orange-800"/> -->
    <PricingCard class="mb-20 linear-container mt-12" text-color="text-white" primary="white" btn-font="primary"
                 hover-color="hover:bg-gray-300"/>
    <!--
    <PricingCard class="mt-12" text-color="text-secondary" bg-color="bg-white" hover-color="hover:bg-orange-800"/> -->
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.title {
  max-width: 1200px;
}


</style>
