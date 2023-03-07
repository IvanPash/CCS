<template>
  <div class="w-[1024px]">
    <h2 class="text-2xl font-semibold text-left">Каталог</h2>
    <div class="grid grid-cols-2 gap-2 mt-7 items-start">
      <GoodsBlock
        v-for="category in goods"
        :key="category.group.name"
        v-bind="category"
      />
    </div>
  </div>
</template>

<script>
import GoodsBlock from './GoodsBlock.vue'

export default {
  components: { GoodsBlock },
  data() {
    return {}
  },
  computed: {
    goods() {
      return this.$store.getters.getGoods
    },
  },
  created() {
    this.$store.dispatch('startWatchesGoods')
    this.$store.dispatch('startWatchesDollars')
  },
}
</script>
