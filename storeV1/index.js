import Vuex from "vuex";
import Config from '~/assets/config';
let homepage = require('./homepage.js')

// let configEndpoints = {
// 	apiEndpoint: "localhost/vueWp/wp-json",
// 	services: this.apiEndpoint + "/portfolio/services"
// }

const createStore = () => {
	return new Vuex.Store({
		modules: {
			homepage: homepage
		},
		state: {
			navigation: [],
			language: 'en'
			// services: []
		},
		mutations: {
			SET_NAVIGATION (state, obj) {
				state.navigation = obj
			},
			CHANGE_LANGUAGE (state) {
				state.language = 'sr'
			}
			// SET_SERVICES (state, obj) {
			// 	state.services = obj
			// },
		},
		actions: {
			async getServices({state}) {
			    let res = await this.$axios.get(Config.wpDomain + Config.api.services + '?lang=' + state.language)
			    return res;
			},
			async nuxtServerInit ({ commit }) {
				try {
					const navigation = await this.$axios.$get(Config.wpDomain + Config.api.navigation, 
						{ useCache: true }
					)
					commit('SET_NAVIGATION', navigation)
				} catch (e) {
					console.log('error with API', e)
				}
			},
		}
	});
};

export default createStore;