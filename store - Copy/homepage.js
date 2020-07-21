import axios from 'axios';
import Config from '~/assets/config';

const state = () => ({
	homepage: []
});


const mutations = {
  setHomepage(state, response) {
    state.homepage = response;
  }
};

const actions = {
	// async getHomepage() {
	//     let res = await this.$axios.get(Config.wpDomain + Config.api.homePage)
	//     return res;
	// },
	// async nuxtServerInit ({ commit }) {
	// 	try {
	// 		const homepage = await this.$axios.$get(Config.wpDomain + Config.api.homePage, 
	// 			{ useCache: true }
	// 		)
	// 		commit('setHomepage', homepage.acf)
	// 	} catch (e) {
	// 		console.log('error with API', e)
	// 	}
	// },
  nuxtServerInit({commit, context}) {
    return this.$axios.$get(Config.wpDomain + Config.api.homePage)
    .then((response) => {
        commit('setHomepage', response.acf);
    })
    .catch((err) => {
      context.error(err);
    });
  }, 
}

const getters = {
  getHomepage(state) {
    return state.homepage;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};