<template>
  <div class="grid grid-flow-col gap-5 py-3 justify-between items-center">
    <h4 class="text-left">{{ title }} ({{ amount }})</h4>
    <div>
      <span
        class="inline-block text-right font-bold mr-4 dinamic text-gray-800 transition-all"
        :class="[`dinamic-${dinamicPrice}`]"
        >{{ convertPrice }} Р.</span
      >
      <BaseButton @click="$emit('add-cart')">в корзину</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/UI/BaseButton/BaseButton.vue'

export default {
  components: { BaseButton },
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      dinamicPrice: null,
    }
  },
  computed: {
    convertPrice() {
      return this.$store.getters.convertPrice(this.price)
    },
  },
  watch: {
    convertPrice(newPrice, OldPrice) {
      this.dinamicPrice = Number(newPrice) >= Number(OldPrice) ? 'top' : 'down'
      setTimeout(() => (this.dinamicPrice = null), 1000)
    },
  },
}
</script>

<style scoped>
.dinamic {
  transition: all 0.2s ease;
}
.dinamic-top {
  color: red;
}
.dinamic-down {
  color: #4efb1a;
}
</style>
