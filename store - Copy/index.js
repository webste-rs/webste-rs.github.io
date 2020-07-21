import Vuex from 'vuex';
import Services from "~/store/services";
import Homepage from "~/store/homepage";
// let homepage = require('./homepage.js')
const createStore = () => {
  return new Vuex.Store({
     state: {},
     mutations: {},
     modules: {
       Services,
       Homepage
     }
  })
}

export default createStore;