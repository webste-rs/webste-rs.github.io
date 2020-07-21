<template>
  <div>
    <Nuxt :key="key" />
    <div id="cursorAnimated">
      <div class="cursorAnimatedInner"></div>
    </div>
    <div @click="changeLang">LANG</div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  data(){
    return{
      key: 1
    }
  },
  components: {
    Footer
  },
  methods: {
    changeLang() {
      this.$store.commit("SET_LANG", 'rs');
      this.key = 2;
      this.$i18n.locale = 'rs';
    }
  },
}
</script>
<style scoped lang="scss">
@import "~assets/scss/base.scss";
#cursorAnimated {
  @include breakpoint('desktop') {
    width: 0;
    height: 0;
    margin-top: 0;
    margin-left: 0;
    position: absolute;
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 9999;
    .cursorAnimatedInner{
      opacity: 1;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      -webkit-transform: translateZ(0) translate(calc(-50% + 3.5px),calc(-50% + 3.5px));
      transform: translateZ(0) translate(calc(-50% + 3.5px),calc(-50% + 3.5px));
      border: 1px solid $color-grey-light;      
      -webkit-transform-origin: 50% 50%;
      -o-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
  }
}
</style>
