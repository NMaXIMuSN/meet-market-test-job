export const state = () => ({
  shopItems: [],
  loading: false,
  error: null,
})

export const mutations = {
  setShopItems(state, payload) {
    state.shopItems = payload
  },
  setLoading(state) {
    state.loading = !state.loading
  },
  setError(state, error) {
    state.error = error
  },
}
export const actions = {
  async featchShopItems({ commit }) {
    commit('setLoading')
    try {
      const { data } = await this.$axios.get('/items.json')
      commit('setShopItems', data)
    } catch (error) {
      commit('setError', error)
    } finally {
      commit('setLoading')
    }
  },
}
export const getters = {
  getShopItems: (state) => state.shopItems,
  getCountShopItems: (state) => state.shopItems.length,
  getMaxPrice: (state) =>
    state.shopItems.reduce((max, item) => {
      return max > item ? max : item
    }, -1).price,
}
