<template>
  <h2 class="typed-headline">
    <span class="typed-text">{{ typeValue }}</span>
    <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
  </h2>
</template>

<script>
  export default {
    data: () => {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: ['Design & technology', 'Web applications', 'Music production', 'eCommerce'],
        typingSpeed: 50,
        erasingSpeed: 30,
        newTextDelay: 500,
        typeArrayIndex: 0,
        charIndex: 0
      }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
  }
</script>

<style lang="scss" scoped>
@import "~assets/scss/base.scss";
.typed-headline {
  span.typed-text {
    color: $color-primary;
    font-weight: bold;
  }
  span.cursor {
    display: inline-block;
    width: 2px;
    background-color: $color-primary;
    animation: cursorBlink 1s infinite;
  }
  span.cursor.typing {
    animation: none;
  }
}
@keyframes cursorBlink {
  49% { background-color: $color-white; }
  50% { background-color: transparent; }
  99% { background-color: transparent; }
}
</style>