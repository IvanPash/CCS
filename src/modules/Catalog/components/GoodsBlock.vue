<template>
  <div class="rounded-md shadow p-5">
    <div
      class="grid grid-flow-col justify-between gap-10 items-center cursor-pointer"
      @click="openGoods = !openGoods"
    >
      <h3 class="text-left text-xl font-semibold">{{ group.name }}</h3>
      <img
        src="@/global/assets/arrow.svg"
        class="w-4 h-4 opacity-20 cursor-pointer hover:opacity-50 transition-all"
        :class="{ 'arrow-active': openGoods }"
      />
    </div>

    <div v-show="openGoods">
      <GoodsItem
        v-for="item in goods"
        :key="item.title"
        v-bind="item"
        @add-cart="addToCart(group.id, item)"
      />
    </div>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'

export default {
  components: { GoodsItem },
  props: {
    group: {
      type: Object,
      required: true,
    },
    goods: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      openGoods: false,
    }
  },
  methods: {
    addToCart(groupId, item) {
      this.$store.dispatch('addToCart', { groupId, item })
    },
  },
}
</script>

<style scoped>
.arrow-active {
  transform: rotate(180deg);
}
</style>
