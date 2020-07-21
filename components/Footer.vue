<template>
  <footer class="b-footer">
    <div class="container">
      <h3 class="b-footer__title">
        Let's see how we can help! <span>Are you a ...</span>
      </h3>
      <contactQuiz />

    </div>
  </footer>
</template>
<script>
import contactQuiz from '@/components/contactQuiz'

export default {
  data(){
    return {
    }
  },
  components: {
    contactQuiz,
  },
  computed: {    
  },
  methods: {    
  }
}
</script>
<style scoped lang="scss">
@import "~assets/scss/base.scss";
.b-footer{
  background: $color-black;
  padding-top: 102px;
  padding-bottom: 50px;
  position: relative;
  &:before{
    position: absolute;
    content: '';
    // background: url(~assets/img/footer.png) no-repeat center bottom transparent;
    height: 103px;
    top: 0;
    left: 0;
    right: 0;
  }
  &__title{
    text-align: center;
    color: $color-white;
    font-size: 20px;
    font-weight: 300;
    span{
      font-weight: 400;
      text-transform: uppercase;
      display: block;
    }
  }
}
</style>