<template>
  <div class="b-services">
    <div class="container">
      <div class="b-services--top">
        <h3 class="b-services--top-title">What We Do</h3>
        <p>We provide our clients with everything they need to have an effective e-commerce or product solution for their business. We offer full stack, front end and back end development, custom WordPress development, sophisticated design services and much more. </p>
        <p>Most importantly, the launch of your website is not the finish line, it’s the beginning. We support our clients, helping them test, interpret data and continue to evolve with their market.</p>
        <a href="" class="b-services--top-link">Learn More </a>
      </div>
      <div class="b-services--main">
        <ul class="b-services__list">
          <li class="b-services__item" v-for="service in services">
            <h2 class="b-services__item__title">{{ service.title }}</h2>
            <div class="b-services__item__icon" v-if="service.icon">
              <img :src="service.icon.url">
            </div>
            <div class="b-services__item__text" v-html="service.short_description"></div>
            <div class="b-services__bottom">
              <div class="b-services__item__short-info">{{ service.short_info }}</div>
              <div class="b-services__item__link">Read more</div>
            </div>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex"

export default {
  name: 'app',
  // props: ['services'],
  data(){
    return {
      activeItem: '',
      // services: {}
    }
  },
  components: {
  },
  methods: {
    ...mapActions({ setServices: "setServices" }),
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      // this.$store.dispatch('setServices')
      this.setServices();
    })
  },
  computed: {
    services() {
      let servicesAll = this.$store.getters.getServices;
      return servicesAll.map(a => a.acf);
    }
    // servicesOnly() {
    //   var items = this.services;
    //   var result = {}
    //   Object.keys(items).forEach(key => {
    //     const item = items[key]
    //     if(item.hasOwnProperty('title')){
    //       result[key] = item;
    //     }
    //   })  
    //   this.activeItem = result['service_1'].title;
    //   return result;
    // }
  },
  // async fetch() {
  //   const { data } = await this.$store.dispatch("getServices");
  //   this.services = data;
  // },
 // async asyncData({$axios}) {
 //    let {data} = await $axios.$get('https://sample-url.com/users')
 //    return {
 //       users: data
 //    }
 //  }
}
</script>
<style scoped lang="scss">
@import "~assets/scss/base.scss";
.b-services{
  background: $color-black;
  color: $color-white;
  padding: 60px 20px;
  &--top{
    margin: 30px 0;
    font-size: 18px;
    line-height: 31px;
    @include breakpoint('desktop') {
      font-size: 16px;
      line-height: 28px;
    }
    &-title{
      font-size: 47px;
      margin-bottom: 50px;
    }
    &-link{
      color: $color-white;
      position: relative;
      padding-left: 20px;
      margin: 20px 0;
      display: inline-block;
      font-size: 14px;
      &:before{
        position: absolute;
        content: '';
        left: 0;
        top: 10px;
        background: $color-primary; 
        border-radius: 50%;
        width: 7px;
        height: 7px;
      }
    }
  }
  &__list{
    @include breakpoint('desktop') {
      display: flex;
      justify-content: center;
    }      
  }
  &__item{
    border: 1px solid rgba(255,255,255,.2);
    margin-bottom: 5px;
    padding: 20px;
    position: relative;
    @include breakpoint('desktop') {
      transition: background-color .35s ease;
      flex: 1;
      &:hover{
        background: $color-white;
        .b-services__item__text{
          opacity: 1;
          visibility: visible;
        }
        .b-services__item__icon{
          display: none;
        }
        .b-services__item__title{
          color: $color-black;
        }
        .b-services__item__link{
          display: block;
        }
        .b-services__item__short-info{
          display: none;
        }
      }
    }
    &__title{
      font-size: 14px;
      @include breakpoint('desktop') {
        font-size: 16px;
      }
    }
    &__icon{
      text-align: center;
      margin: 50px 0;
      @include breakpoint('desktop') {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        width: auto;
        height: auto;
        margin: 0;
      }
      svg{
        max-width: 55px;
      }
    }
    &__text{
      display: none;
      text-align: center;
      @include breakpoint('desktop') {
        visibility: hidden;
        opacity: 0;
        display: block;
        padding: 80px 15px;
        width: 100%;
      }
      ::v-deep p{
        margin-bottom: 20px;
        font-size: 14px;
        color: $color-black;
      }
    }
    &__short-info{
      display: none;
      @include breakpoint('desktop') {
        display: block;
        opacity: .5;
        letter-spacing: 1px;
        font-size: 11px;
        text-transform: uppercase;
      }
    }
    &__link{
      position: relative;
      font-size: 12px;
      color: $color-black;
      font-weight: bold;
      padding-bottom: 10px;
      @include breakpoint('desktop') {
        display: none;
      }
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border: 1px solid $color-primary;
      }
    }
  }
  &__bottom{
    @include breakpoint('desktop') {
      position: absolute;
      bottom: 15px;
    }      
  }
}
</style>