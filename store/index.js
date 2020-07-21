import Vuex from 'vuex';
import Locales from "~/store/locales";
import Services from "~/store/services";
import Homepage from "~/store/homepage";
import Products from "~/store/products";

const createStore = () => {
  return new Vuex.Store({
    state: {},
    mutations: {},
    modules: {
      Locales,
      Services,
      Homepage,
      Products
    }
  })
}

export default createStore;