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
  // setHomepage(vuexContext) { 
  //   return this.$axios.$get(Config.wpDomain + Config.api.homePage)
  //   .then((response) => {
  //     vuexContext.commit('setHomepage', response.acf);
  //   })
  //   .catch((err) => {
  //     context.error(err);
  //   });
  // }

  setHomepage({state, rootState, commit}) { 
    return this.$axios.$get(Config.wpDomain + Config.homePage)
    .then((response) => {
      commit('setHomepage', response);
    })
    .catch((err) => {
      console.log(err)
    });
  }

  // async getHomepage() {
    // let res = [];
    // await this.$axios.get(Config.wpDomain + Config.api.homePage)
    // .then((response) => {
    //   res = response.acf;
    //   console.log(response)
    // })
    // .catch((err) => {
    //   context.error(err);
    // });
    // return res;
  //   let res = await this.$axios.get(Config.wpDomain + Config.homePage)
  //   return res;
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
  // nuxtServerInit({commit, context}) {
  //   return this.$axios.$get(Config.wpDomain + Config.api.homePage)
  //   .then((response) => {
  //       commit('setHomepage', response.acf);
  //   })
  //   .catch((err) => {
  //     context.error(err);
  //   });
  // }, 
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