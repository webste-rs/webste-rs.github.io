const state = () => ({
  locales: ['en', 'rs'],
  locale: 'en'
})

const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}

const getters = {
  getLocale(state) {
    return state.locale;
  }
};

export default {
  state,
  mutations,
  getters
};