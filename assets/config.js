'use strict'

const hostUrl = 'https://beautyqueen.rs/este/este';
const localUrl = 'https://localhost/vueWp';

export default {
  // apiEndpoint: 'https://beautyqueen.rs/este/wp-json',
  // realApiEndpoint: 'localhost/vueWp/wp-json',
  wpDomain: `${localUrl}/wp-json`,
  navigation: '/portfolio/menu',
  services: '/portfolio/services',
  homePage: '/wp/v2/pages/2', 
  postFormContact: '/contact-form-7/v1/contact-forms/75',
  allProducts: '/wc/v3/products'
}