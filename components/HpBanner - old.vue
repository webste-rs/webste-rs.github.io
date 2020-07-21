<template>
  <div class="b-header" :style="{'background': 'url(' + bannerImg + ')'}">
    <!-- <nav v-for="navItem in navigation">
      {{ navItem.title }}
    </nav> -->
    <div class="b-header__content">
      <div v-if="title" class="b-header__content--static" v-html="title.header_title"></div>
      <div class="b-header__content--typing">
        <TypeEffect />
      </div>
    </div>
  </div>
</template>
<script>
import TypeEffect from '@/components/TypeEffect'

export default {
  name: 'app',
  props: ['title'],
  data(){
    return {
      // banner: {
      //   'image': '../assets/img/current01.jpg'
      // }
    }
  },
  components: {
    TypeEffect
  },
  computed: {
    navigation() {
      return this.$store.state.navigation;
      window.location.reload(true);
    },
    bannerImg() {
      return require('../assets/img/current01.jpg')
    }
  }
}
</script>
<style scoped lang="scss">
@import "~assets/scss/base.scss";
.b-header{
  // background: url(~assets/img/current01.jpg) center center no-repeat;
  background-size: cover !important;
  &__content{
    text-align: center;
    font-size: 22px;
    color: $color-white;
    padding: 100px 20px;
    @include breakpoint('desktop') {
      font-size: 35px;
      padding: 300px 20px;
      max-width: 1400px;
      margin: auto;
    }
    ::v-deep strong{
      font-weight: bold;
    }
  }
}
</style>