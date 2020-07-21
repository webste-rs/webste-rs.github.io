<template>
  <div class="b-form--wrapper">
    <form v-if="!isSent" class="b-form" @submit.prevent="sendForm" autocomplete="off">
      <div class="b-form__title">
        <h3>Complete the form below<br>and we will get back to you fairly quickly.</h3>
      </div>
      <div 
        class="b-form__group"
        :class="{
          'active' : activeIndex == 'name',
          'blur' : blurIndex == 'name',
          'complited' : complited.includes('name'),
          'error' : validations.name == false
        }"
        @click="changeInput('name')"
      >
        <div class="b-form__group--inner">
          <label for="name">My name is</label>
          <input type="text" v-model="name">         
        </div>
      </div>
      <div 
        class="b-form__group"
        :class="{
          'active' : activeIndex == 'email',
          'blur' : blurIndex == 'email',
          'complited' : complited.includes('email'),
          'validated' : validations.name,
          'error' : validations.email == false
        }"
        @click="changeInput('email')"
      >
        <div class="b-form__group--inner">
          <label for="name">My email is</label>
          <input type="email" v-model="email">         
        </div>
      </div>
      <div 
        class="b-form__group"
        :class="{
          'active' : activeIndex == 'message',
          'blur' : blurIndex == 'message',
          'complited' : complited.includes('message'),
          'validated' : validations.email,
          'error' : validations.message == false
        }"
        @click="changeInput('message')"
      >
        <div class="b-form__group--inner">
          <label for="name">My message is</label>
          <input type="text" v-model="message">         
        </div>
      </div>
      <input v-if="isSubmitVisible" class="b-form__submit" type="submit" value="submit" name="">
    </form>
    <div v-else class="b-form--success">
      <h2>Thank you,<br>we will get back to you shortly.</h2>
    </div>    
  </div>
</template>
<script>

export default {
  name: 'app',
  data(){
    return {
      name: null,
      email: null,
      message: null,
      // errors: [],
      activeIndex: 'name',
      blurIndex: 'email',
      validations: {},
      isSubmitVisible: false,
      complited: [],
      isSent: false
    }
  },
  watch: {
    name(newValue) {
      this.validations.name = newValue > '';
    },
    email(newValue) {
      if(newValue > '') {
        if(this.validEmail(newValue)){
          this.validations.email = newValue > '';        
        }else {
          this.validations.email = false;
        }
      }
    },
    message(newValue) {
      if(newValue > '') {
        this.isSubmitVisible = true;
      }
      this.validations.message = newValue > '';
    }
  },
  computed: {
  },
  methods: {  
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    changeInput(name){ 
      const keys = Object.keys(this.validations);
      const required = ['name', 'email', 'message'];      
      for (const key in required) {
        if(name == required[key]){
          if(name == required[0]){
            this.activeIndex = name;
          } else if(keys.includes(required[key - 1])){
            this.activeIndex = name;
          }
        }
        if(keys.includes(required[2])){
          if (this.complited.indexOf(required[2]) === -1) {
            this.complited.push(required[2]);
          }
          this.blurIndex = '';            
        }
        if(keys.includes(required[1])){
          if (this.complited.indexOf(required[1]) === -1) {
            this.complited.push(required[1]);
          }           
        }
        if(name == required[0]){
          if(!keys.includes(required[1])){
            this.blurIndex = required[1];
          }
          if(keys.includes(required[1]) && !keys.includes(required[2])){
            this.blurIndex = required[2];            
          }
        }
        if(name == required[1]){
          if (keys.includes(required[0]) && !keys.includes(required[2])){
            this.blurIndex = required[2];
            if (this.complited.indexOf(required[0]) === -1) {
              this.complited.push(required[0]);
            }
          } 
        } 
        if(name == required[2]){
          if (keys.includes(required[1])){ 
            this.blurIndex = '';     
          }
        }
      }      
    },
    sendForm() {
      if(Object.keys(this.validations).length == 3){
        const emailBody = {
          'your-name': this.name,
          'your-email' : this.email,
          'your-message' : this.message,
          'your-subject' : 'aaa',
        }
        const form = new FormData();
        for (const field in emailBody) {
            form.append(field, emailBody[field]);
        }
        this.$axios.post('https://beautyqueen.rs/este/wp-json/contact-form-7/v1/contact-forms/80/feedback', form)
        .then(response => {
            // console.log(response)
            this.isSent = true;
        })
        .catch(error => {
            console.log('Error --> ' + error)
        })        
      }
    }
  }
}
</script>
<style scoped lang="scss">
@import "~assets/scss/base.scss";
.b-form{
  &--wrapper{
    background: $color-grey-light;
    padding: 30px 15px;
    border-radius: 10px;
    @include breakpoint('desktop') {
      padding: 30px;
      max-width: 900px;
      margin: auto;
    }     
  }
  &--success{
    text-align: center;
    font-size: 34px;
    line-height: 42px;
    color: $color-blue;
    font-weight: bold;
  }
  &__title{
    text-align: center;
    margin-bottom: 33px;
    font-size: 21px;
    line-height: 26px;
    color: $color-blue;
  }
  &__group{
    margin-bottom: 30px;
    text-align: center;
    color: $color-blue;
    position: relative;
    display: none;
    @include breakpoint('desktop') {
      margin-bottom: 10px;
      &--inner{
        display: flex;
        align-items: flex-end;
        border-radius: 20px;
        padding: 20px;     
        width: 100%;  
      }
    }
    &.active{
      display: block;
      .b-form__group--inner{
        background: $color-white;        
      } 
    }
    &.complited{
      display: flex;
      align-items: center;
      label{
        font-size: 14px;
        padding-right: 20px;
        margin: 0;
        @include breakpoint('desktop') {
          font-size: 18px;          
        }
      }
      input{
        border-color: transparent;
        flex: 1;
        text-align: left;
        padding: 0;
        font-size: 12px;
        @include breakpoint('desktop') {
          font-size: 17px;
          &.focus-visible{
            border-color: $color-blue;
          }
        }
      }
    }
    &.error{
      input{
        border-color: red;
      }
    }
    &.blur:not(.validated){
      cursor: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' fill='red' width='15px' height='15px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E %3Cpath d='M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z'/%3E %3C/svg%3E"), pointer;
    }
    &.blur{
      display: block;
      label{
        color: #d1d1d1;
        font-size: 15px;
        margin-bottom: 0;
        @include breakpoint('desktop') {
          font-size: 18px;
        }
      }
      input{
        border-bottom: 2px solid #d1d1d1;
        height: 0;
        padding: 0;
      }
      &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
      } 
    }
    label{
      margin-bottom: 10px;
      display: block;
      font-size: 20px;
      font-weight: bold;
      line-height: 25px;
      @include breakpoint('desktop') {
        min-width: 200px;
        text-align: right;
        padding-right: 30px; 
        margin: 0;
        font-size: 23px;
      }
    }
    input{
      font-size: 16px;
      color: $color-blue;
      border: none;
      border-bottom: 2px solid $color-blue;
      padding-bottom: 8px;
      background: transparent;
      outline: none;
      width: 100%;
      font-family: "Roboto";
      text-align: center;
      @include breakpoint('desktop') {
        text-align: left;
        padding-bottom: 3px;
      }
    }
  }
  &__submit{
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    height: 40px;
    font-size: 16px;
    border: 1px solid $color-blue;
    padding: 0px 50px;
    color: $color-blue;
    border-radius: 30px;
    text-transform: uppercase;
    font-weight: bold;
    outline: none;
    cursor: pointer;
  }
}

</style>