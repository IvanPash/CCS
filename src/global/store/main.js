/* eslint-disable no-param-reassign */
export default {
  state: () => ({
    dollarValue: null,
  }),
  mutations: {
    updateDollar(state) {
      state.dollarValue = Math.floor(Math.random() * (80 - 20 + 1)) + 20
    },
  },
  actions: {
    startWatchesDollars(context) {
      if (context.state.dollarValue) return

      context.commit('updateDollar')

      setInterval(() => {
        context.commit('updateDollar')
      }, 15000)
    },
  },
  getters: {
    getDollarValue(state) {
      return state.dollarValue
    },
    convertPrice(state) {
      return (price) => {
        const toRuble = (state.dollarValue * price).toFixed(2)
        return Number(toRuble).toLocaleString()
      }
    },
  },
}
