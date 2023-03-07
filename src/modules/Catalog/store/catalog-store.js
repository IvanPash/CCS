/* eslint-disable no-param-reassign */
import data from '../mock/data.json'
import names from '../mock/names.json'

export default {
  state: () => ({
    goods: {},
  }),

  mutations: {
    setGoods(state, payload) {
      state.goods = payload
    },
  },
  actions: {
    startWatchesGoods(context) {
      const goodsIsDontEmpty = Object.keys(context.state.goods).length
      if (goodsIsDontEmpty) return

      context.dispatch('fetchGoods')
      setInterval(() => context.dispatch('fetchGoods'), 15000)
    },
    fetchGoods(context) {
      const result = {}
      const goods = data.Value.Goods
      const namesForGoods = names

      goods.forEach((item) => {
        const idGroup = item.G

        if (!result[idGroup]) {
          result[idGroup] = {
            group: {
              name: namesForGoods[item.G].G,
              id: item.G,
            },
            goods: [],
          }
        }

        result[idGroup].goods.push({
          id: item.T,
          price: item.C,
          title: namesForGoods[item.G].B[item.T].N,
          amount: Number(item.P),
        })
      })
      context.commit('setGoods', result)
    },

    addToCart(context, payload) {
      context.dispatch('addProduct', payload)
    },
  },
  getters: {
    getGoods(state) {
      return state.goods
    },
  },
}
