import axios from 'axios';
import Config from '~/assets/config';

const state = () => ({
  navigation: [],
  language: 'en'
});

const mutations = {
  SET_NAVIGATION (state, obj) {
    state.navigation = obj
  },
  CHANGE_LANGUAGE (state) {
    state.language = 'sr'
  }
};

const actions = {
  // nuxtServerInit(vuexContext, context) {
  //   return axios.get('https://sample-url.com/users')
  //   .then((response) => {
  //     vuexContext.commit('setUsers', response.data.data.results);
  //   })
  //   .catch((err) => {
  //     context.error(err);
  //   });
  // }, 
  async getServices({state}) {
    let res = await this.$axios.get(Config.wpDomain + Config.api.services + '?lang=' + state.language)
    return res;
  },
  // async nuxtServerInit ({ commit }) {
  //   try {
  //     const navigation = await this.$axios.$get(Config.wpDomain + Config.api.navigation, 
  //       { useCache: true }
  //     )
  //     commit('SET_NAVIGATION', navigation)
  //   } catch (e) {
  //     console.log('error with API', e)
  //   }
  // },
};


const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters
};