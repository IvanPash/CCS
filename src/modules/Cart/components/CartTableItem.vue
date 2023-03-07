<template>
  <tr>
    <td class="text-left align-text-top">{{ title }}</td>
    <td class="align-text-top">
      <div class="max-w-[200px] mx-auto">
        <input
          type="text"
          class="rounded p-1 border mb-2 w-full"
          :value="selectValue"
          @change="handleInput"
        />
        <BaseError v-if="errors.length" class="w-full">{{
          errors[0]
        }}</BaseError>
      </div>
    </td>
    <td class="align-text-top">
      <b>{{ convertPrice }} руб.</b>/шт.
    </td>
    <td class="align-text-top">
      <BaseButton @click="handleRemove">Удалить</BaseButton>
    </td>
  </tr>
</template>

<script>
import BaseButton from '@/UI/BaseButton/BaseButton.vue'
import BaseError from '@/UI/BaseError/BaseError.vue'

export default {
  components: { BaseButton, BaseError },
  props: {
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    selectValue: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    idForCart: {
      type: String,
      required: true,
    },
    errors: {
      type: Array,
      required: true,
    },
  },
  emits: ['input-value', 'remove-product'],
  computed: {
    convertPrice() {
      return this.$store.getters.convertPrice(this.price)
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input-value', this.idForCart, Number(e.target.value))
      e.target.value = this.selectValue
    },
    handleRemove() {
      this.$emit('remove-product', this.idForCart)
    },
  },
}
</script>
