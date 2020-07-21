import axios from 'axios';
import Config from '~/assets/config';

const state = () => ({
  navigation: [],
  services: []
});

const mutations = {
  SET_NAVIGATION (state, obj) {
    state.navigation = obj
  },
  setServices (state, response) {
    state.services = response;
  }
};

const actions = {
  setServices({state, rootState, commit}) { 
    return this.$axios.$get(Config.wpDomain + Config.services + '?lang=' + rootState.Locales.locale)
    .then((response) => {
      commit('setServices', response);
    })
    .catch((err) => {
      console.log(err)
    });
  }
  // nuxtServerInit(vuexContext, context) {
  //   return axios.get('https://sample-url.com/users')
  //   .then((response) => {
  //     vuexContext.commit('setUsers', response.data.data.results);
  //   })
  //   .catch((err) => {
  //     context.error(err);
  //   });
  // }, 
  // async getServices({state}) {
  //   let res = await this.$axios.get(Config.apiEndpoint + Config.api.services + '?lang=' + state.language)
  //   return res;
  // },
  // async nuxtServerInit ({ commit }) {
  //   try {
  //     const navigation = await this.$axios.$get(Config.apiEndpoint + Config.api.navigation, 
  //       { useCache: true }
  //     )
  //     commit('SET_NAVIGATION', navigation)
  //   } catch (e) {
  //     console.log('error with API', e)
  //   }
  // },
};


const getters = {
  getServices(state) {
    return state.services;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};