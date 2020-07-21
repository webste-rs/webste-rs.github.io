<template>
  <div id="app">
    <HpBanner :title="homepage.acf"/>
    <Services />
    <Clients />
    <Expect />
    <div class="container">
      <Contact />
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex"
import HpBanner from '@/components/HpBanner'
import Services from '@/components/Services'
import Clients from '@/components/Clients'
import Expect from '@/components/Expect'
import Contact from '@/components/Contact'
export default {
  name: 'app',
  data(){
    return {
      // homepage: []
    }
  },
  components: {
    HpBanner,
    Services,
    Expect,
    Contact
  },
  mounted: function () {
    this.$nextTick(function () {
      this.setHomepage();
    })
  },
  // async fetch() {
  //   const { data } = await this.$store.dispatch("getHomepage");
  //   this.homepage = data;
  // },
  methods: {
    ...mapActions({ setHomepage: "setHomepage" }),
  },
  // mounted: function () {
  //   this.$nextTick(function () {
  //     this.setHomepage();
  //   })
  // },
  computed: {    
    homepage() {
      return this.$store.getters.getHomepage;
    }
  }
}
</script>
<style scoped>
</style>