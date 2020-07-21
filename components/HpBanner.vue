<template>
  <div class="b-hero" :style="{'background': 'url(' + bannerImg + ')'}">
    <div class="b-hero__content">
      <div class="b-hero__title">
        <h2>Next Level</h2>
        <TypeEffect />
      </div>
      <p class="b-hero__text">You have the vision for a stunning digital experience. We’re the software design and engineering team that can bring it to life.</p>
      <nuxt-link class="b-hero__link" to="">Contact este</nuxt-link>
    </div>
    <div class="b-hero__video">
      <video preload="true" loop="" muted="" autoplay="">
        <source src="https://strvothers.s3.amazonaws.com/web-videos/website-home-background-1080p.mp4" type="video/mp4" :poster="bannerImg">
      </video>
    </div>
  </div>
</template>
<script>
import TypeEffect from '@/components/TypeEffect'

export default {
  data(){
    return {
    }
  },
  components: {
    TypeEffect
  },
  computed: {
    bannerImg() {
      return require('../assets/img/hero.jpg')
    }
  }
}
</script>
<style scoped lang="scss">
@import "~assets/scss/base.scss";
.b-hero{
  height: 100vH;
  background-size: cover !important;
  background-position: center center !important;
  position: relative;
  &__content{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    text-align: center;
    padding: 12px;
    color: #fff;
    @include breakpoint('desktop') {
      text-align: left;
      position: relative;
      max-width: 90%;
      margin: auto;
      z-index: 1;
    }
  }
  &__title{
    text-transform: uppercase;
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 20px;
    font-size: 25px;
    @include breakpoint('desktop') {
      font-size: 60px;
    }
    &:after{
      position: absolute;
      content: '';
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      max-width: 40px;
      border-bottom: 2px solid $color-primary;
      @include breakpoint('desktop') {
        margin: 0;
      }
    }
  }
  &__text{
    font-size: 14px;
    line-height: 17px;
    @include breakpoint('desktop') {
      font-size: 18px;
      line-height: 23px;
      max-width: 700px;
    }
  }
  &__link{
    display: inline-block;
    margin-top: 30px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    border: 2px solid transparent;
    border-radius: 2px;
    background: $color-primary;
    padding: 14px;
  }
  &__video{
    min-width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: 0;
    top: 0;
    overflow: hidden;
    display: none;
    visibility: hidden;
    @include breakpoint('desktop') {
      display: block;
      visibility: visible;
      video{
        position: absolute;
        left: 50%;
        min-width: 100vw;
        min-height: 560px;
        height: auto;
        width: 100%;
        top: 50%;
        transform: translate3d(-50%,-50%,0);
      }
    }
  }
}
</style>