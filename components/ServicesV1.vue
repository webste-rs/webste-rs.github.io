<template>
  <div class="b-services">
    <div class="container">
      <div class="b-services__image">
        <img src="https://www.verycreative.eu/wp-content/uploads//2018/06/verycreative-zebraphant-small.png" alt="verycreative zebraphant" class="remove-sizes zebraphant">
        <img src="https://www.verycreative.eu/wp-content/themes/verycreative/img/jpg/verycreative-zebraphant-small-background.png" alt="verycreative zebraphant background" class="remove-sizes background">
      </div>

      <div class="b-services__content">
        <div class="b-services__title">
          <h3>VeryCreative</h3>
          <h1>Digital Agency</h1>
        </div>

        <ul class="b-services__tabs">
          <li 
            class="b-services__tabs__item" 
            @click.prevent="setActive(item.title)"
            :class="{ active: isActive(item.title) }" 
            v-for="(item, index) in servicesOnly" 
            :key="index" >
            <span v-if="item.title">{{ item.title }}</span>
          </li>
        </ul>

        <div 
          v-for="item in servicesOnly" 
          class="b-services__text fade" 
          :class="{ 'show': isActive(item.title) }" >
            {{ item.text }}
        </div>

        <a href="https://www.verycreative.eu/start-a-project/" class="b-services__link c-button">Start a project</a>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'app',
  props: ['services'],
  data(){
    return {
      activeItem: ''
    }
  },
  components: {
  },
  methods: {
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    },
  },
  computed: {
    servicesOnly() {
      var items = this.services;
      var result = {}
      Object.keys(items).forEach(key => {
        const item = items[key]
        if(item.hasOwnProperty('title')){
          result[key] = item;
        }
      })  
      this.activeItem = result['service_1'].title;
      return result;
    }
  },
  // async fetch() {
  //   const { data } = await this.$store.dispatch("getServices");
  //   this.services = data;
  // },
}
</script>
<style scoped lang="scss">
  .b-services{
    background-color: #180c2e;
    &__image{
      img{
        &:first-child{
          position: relative;
          z-index: 2;
          pointer-events: none;
          margin-left: -3em;
        }
        &:nth-child(2){
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 0;
          margin-top: -50%;
          margin-left: -50%;
          z-index: 0;
          margin-top: -25%;
          margin-left: -44%;
          max-width: 90%;
        }
      }
    }

    &__content{
      color: #fff;
    }

    &__title{
      h3{
        margin-bottom: .6em;
      }
      h1{
        font-size: 2.4em;
      }
    }

    &__tabs{
      &__item {
        display: inline-block;
        vertical-align: top;
        margin: 15px 2px 15px 0;
        border-radius: 1px;
        color: #fff;
        border: 1px solid #fff;
        font-size: 13px;
        padding: 10px 7px 6px;
        &.active {
          border: 1px solid #ffda21;
          color: #180c2f;
          background: #ffda21;
        } 
      }     
    }

    &__text{
      display: none;
      opacity: 0;
      color: #fff;
      transition: all 2s ease;
      &.show {
        display: block !important;
        opacity: 1;
      }
    }
  }
</style>