import axios from 'axios';
import Config from '~/assets/config';

const state = () => ({
	products: [],
  localCart: []
});


const mutations = {
  setProducts(state, response) {
    state.products = response;
  },
  setLocalCart(state, response) {
    localStorage.setItem(
      'vizual_localCart',
      JSON.stringify(response)
    )
    state.localCart = response;
  }
};

const actions = {
  setProducts(vuexContext) { 
    return this.$axios.$get('https://beautyqueen.rs/este/wp-json/wc/v3/products',
      {
        credientials: true,
        auth: {
          username: 'ck_ef3591c22d7d0ed689bd78c91bc05cf3ceaa6f2d',
          password: 'cs_96d3684b4a7cc665f551de8fbd5b8f31f5b99010'
        }
      }
    )
    .then((response) => {
      vuexContext.commit('setProducts', response);
    })
    .catch((err) => {
      context.error(err);
    });
  },
  isLocalCart(state) { 
    const cachedCart = localStorage.getItem('vizual_localCart')
    if (cachedCart && cachedCart.length !== 0) {
      state.commit('setLocalCart', JSON.parse(cachedCart));
      console.log('Cart: Using cached!')
    } else {
      state.commit('setLocalCart', []);
    }
  },
  removeFromCart({commit , rootState, state}, payload) {
    const newCart = state.localCart.filter((product, productIndex) => {
      return product.id !== payload.product_id
    })
    commit('setLocalCart', newCart)
    localStorage.setItem('vizual_localCart', JSON.stringify(newCart))
  }
}

const getters = {
  getProducts(state) {
    return state.products;
  },
  getLocalCart(state) {
    return state.localCart;
  },
};

export default {
  state,
  mutations,
  actions,
  getters
};