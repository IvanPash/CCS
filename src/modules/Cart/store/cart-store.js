/* eslint-disable no-param-reassign */
export default {
  state: () => ({
    cart: {},
  }),

  mutations: {
    addProduct(state, data) {
      const idForCart = `${data.groupId}-${data.item.id}`
      const hasIdInCart = idForCart in state.cart

      if (!hasIdInCart) {
        state.cart[idForCart] = {
          ...data.item,
          idForCart,
          selectValue: 1,
          errors: [],
        }
        return
      }

      if (state.cart[idForCart].selectValue < state.cart[idForCart].amount) {
        state.cart[idForCart].selectValue += 1
      }
    },
    removeProduct(state, id) {
      delete state.cart[id]
    },
    changeValueProduct(state, data) {
      this.commit('clearErrors', data.id)

      const cartItem = state.cart[data.id]

      if (!data.value || data.value <= 1) {
        cartItem.selectValue = 1
        return
      }

      if (data.value > cartItem.amount)
        cartItem.errors.push(
          `Превышено максимальное количество (${cartItem.amount})`
        )

      cartItem.selectValue = data.value
    },

    clearErrors(state, id) {
      state.cart[id].errors = []
    },
  },
  actions: {
    addProduct(context, payload) {
      const { groupId, item } = payload
      context.commit('addProduct', { groupId, item })
    },
    removeProduct(context, id) {
      context.commit('removeProduct', id)
    },
    changeValueProduct(context, payload) {
      context.commit('changeValueProduct', payload)
    },
  },
  getters: {
    getProductsCart(state) {
      return state.cart
    },
  },
}
