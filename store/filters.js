export const state = () => ({
  sort: [
    'По популярности',
    'По цене(мин)',
    'По цене(макс)',
    'По названию(А-Я)',
    'По названию(Я-А)',
  ],
  currenSort: 'По популярности',

  brands: [
    'Air Jordan',
    'Nike',
    'Adidas',
    'New Balance',
    'Сonverse',
    'Louis Vuitton',
  ],
  currenBrands: [],

  model: null,
  currenModel: null,

  price: [
    'Товары со скидкой',
    'До 3000 руб.',
    'До 5000 руб.',
    'До 9000 руб.',
    'До 15000 руб.',
  ],
  currentRadioPrice: null,

  sizes: [38, 39, 40, 41, 42, 43, 44],
  currenSizes: [],

  sex: ['Мужские', 'Женские'],
  currenSex: null,
})

export const mutations = {
  setCurretnSort(state, sort) {
    state.currenSort = sort
  },
  setCurretnBrands(state, brand) {
    state.currenBrands = brand
  },
  setCurretnSize(state, size) {
    state.currenSizes = size
  },
  setRadioSex(state, sex) {
    state.currenSex = sex
  },
  setRadioPrice(state, price) {
    state.currentRadioPrice = price
  },
}
export const actions = {}
export const getters = {
  getSort: (state) => state.sort,
  getCurrenSort: (state) => state.currenSort,

  getBrands: (state) => state.brands,
  countBrand: (state) => state.currenBrands.length,
  getCurrenBrands: (state) => state.currenBrands,

  getSize: (state) => state.sizes,
  countSize: (state) => state.currenSizes.length,
  getCurrenSize: (state) => state.currenSizes,

  countPrice: (state) => (state.currentRadioPrice ? 1 : 0),
  getRadioPrice: (state) => state.price,

  countSex: (state) => (state.currenSex ? 1 : 0),
  getRadioSex: (state) => state.sex,

  getFullFilters: (state) => [
    ...state.currenBrands,
    state.currentRadioPrice,
    ...state.currenSizes,
    state.currenSex,
    state.currenModel,
  ],
}
