<template>
  <div class="flex items-center space-x-4">
    <span :class="{ 'text-gray-500': isAnnual }">Mensal</span>
    <div @click="togglePlan" class="relative cursor-pointer">
      <div class="bg-gray-700 w-12 h-6 rounded-full p-1 transition-colors" :class="{'bg-primary': isAnnual}">
        <div class="bg-white w-4 h-4 rounded-full transition-transform transform"
             :class="{'translate-x-6': isAnnual}"></div>
      </div>
    </div>
    <div class="flex items-center space-x-2">
      <span class="mr-4" :class="{ 'text-gray-500': !isAnnual }">Anual</span>
      <span v-if="isAnnual" class="white bg-primary px-2 py-1 rounded-full text-xs font-bold w-24 text-center">
        25% OFF
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {isAnnual} from "~/components/global";

export default defineComponent({
  setup() {
    const togglePlan = () => {
      isAnnual.value = !isAnnual.value;
    };

    return {
      isAnnual,
      togglePlan
    };
  }
});
</script>

<style scoped>
</style>
