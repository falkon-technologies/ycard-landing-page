<template>
  <div :class="[bgColor, 'rounded-lg shadow-lg p-6 w-10/12 max-w-sm']">
    <h2 class="text-primary text-xl font-light">CRIATIVO</h2>
    <p :class="[textColor, ' text-4xl font-semibold mt-2']">{{ price }} <span
        class="text-lg font-normal">/mês</span></p>
    <p :class="[textColor, ' mt-16']">Para criadores que precisam escalar seu trabalho</p>
    <ul class="mt-12 space-y-3">
      <li class="flex items-center space-x-8">
        <span
            :class="['check-box bg-' + primary, ' text-' + btnFont + ' w-6 h-6 flex items-center justify-center']">✔</span>
        <span :class="[textColor]">1 Página</span>
      </li>
      <li class="flex items-center space-x-8">
        <span
            :class="['check-box bg-' + primary, ' text-' + btnFont + ' w-6 h-6 flex items-center justify-center']">✔</span>
        <span :class="[textColor]">2 Gerações por dia</span>
      </li>
      <li class="flex items-center space-x-8">
        <span
            :class="['check-box bg-' + primary, ' text-' + btnFont + ' w-6 h-6 flex items-center justify-center']">✔</span>
        <span :class="[textColor]">3 Modelos</span>
      </li>
      <li class="flex items-center space-x-8">
        <span
            :class="['check-box bg-' + primary, ' text-' + btnFont + ' w-6 h-6 flex items-center justify-center']">✔</span>
        <span :class="[textColor]">Até 2 projetos</span>
      </li>
    </ul>
    <button
        :class="['bg-' + primary, 'mt-12 w-full text-' + btnFont, ' text-lg py-2 rounded-lg ', hoverColor, ' transition-colors']">
      Experimente agora
    </button>
  </div>
</template>

<script lang="ts">
import {isAnnual} from "./global";

export default {
  name: 'PricingCard',
  computed: {
    price() {
      return isAnnual.value ? 'R$ 4,47' : 'R$ 5,97'
    },
    isAnnual() {
      return isAnnual
    }
  },
  props: {
    hoverColor: {
      type: String
    },
    bgColor: {
      type: String
    },
    primary: {
      type: String,
      default: 'primary'
    },
    textColor: {
      type: String
    },
    secondary: {
      type: String,
    },
    btnFont: {
      type: String,
      default: 'white'
    }
  }
}
</script>

<style scoped>

.check-box {
  padding: 16px;
  border-radius: 8px;
}

</style>
