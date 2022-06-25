import { createStore } from 'vuex'
import category from './modules/category'
import getters from './getters'

const store = createStore({
  getters,
  modules: {
    category
  }
})

export default store
