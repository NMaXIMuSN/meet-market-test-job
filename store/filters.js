export const state = () => ({
  brands: [
    'Air Jordan',
    'Nike',
    'Adidas',
    'New Balance',
    'Сonverse',
    'Louis Vuitton',
  ],
  currenBrands: [],
  currenModel: null,
  model: null,
  price: null,
  sizes: [38, 39, 40, 41, 42, 43, 44],
  currenSizes: [],
  sex: ['мужские', 'женские'],
  currenSex: [],
})

export const mutations = {
  setCurretnBrands(state, brand) {
    state.currenBrands = brand
  },
}
export const actions = {}
export const getters = {
  getBrands: (state) => state.brands,
  countBrand: (state) => state.currenBrands.length,
  getCurrenBrands: (state) => state.currenBrands,
}
