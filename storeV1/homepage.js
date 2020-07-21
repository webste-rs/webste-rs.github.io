import Config from '~/assets/config';

export const state = () => ({

})

export const mutations = {

}

export const actions = {
	async getHomepage() {
	    let res = await this.$axios.get(Config.wpDomain + Config.api.homePage)
	    return res;
	},

}