<template>
  <div class="mt-20 w-[1024px]">
    <h2 class="text-2xl font-semibold text-left">Корзина</h2>
    <table class="mt-5 w-full">
      <tr>
        <th class="text-left">Наименование товара и описание</th>
        <th>Количество</th>
        <th>Цена</th>
        <th></th>
      </tr>
      <CartTableItem
        v-for="item in productsCart"
        :key="item.idForCart"
        v-bind="item"
        @input-value="inputSelectValue"
        @remove-product="removeProduct"
      />
    </table>
    <div class="mt-8 text-right">
      <CartTotal :value="getTotalPrice" />
    </div>
  </div>
</template>

<script>
import CartTableItem from './CartTableItem.vue'
import CartTotal from './CartTotal.vue'

export default {
  components: { CartTableItem, CartTotal },
  computed: {
    productsCart() {
      return this.$store.getters.getProductsCart
    },
    getTotalPrice() {
      const value = Object.values(this.productsCart).reduce((acc, current) => {
        const amount =
          current.selectValue > current.amount
            ? current.amount
            : current.selectValue
        return acc + current.price * amount
      }, 0)
      return value || 0
    },
  },

  methods: {
    inputSelectValue(id, value) {
      this.$store.dispatch('changeValueProduct', { id, value })
    },
    removeProduct(id) {
      this.$store.dispatch('removeProduct', id)
    },
  },
}
</script>
