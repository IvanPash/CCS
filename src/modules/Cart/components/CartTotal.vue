<template>
  <div class="inline-grid grid-flow-col gap-3 items-center justify-end">
    <span class="font-semibold">Общая стоимость:</span>
    <div>
      <span class="text-2xl font-bold">{{ convertValue }}</span>
      <span class="inline-block ml-2 text-2xl font-bold">руб.</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  computed: {
    convertValue() {
      return this.$store.getters.convertPrice(this.value)
    },
  },
}
</script>
