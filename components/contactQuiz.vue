<template>
  <div class="b-quiz">
    <div class="b-quiz--wrap">
      <div 
        class="b-quiz__box" 
        v-for="item in quiz" 
        :key="item.id" 
        :class="{'active' : item.id == quizIndex}"
        @click="setIndex(item.id)" >
        {{ item.title }}
      </div>      
    </div>
    <div class="b-quiz--wrap" v-if="quizIndex">
      <div 
        class="b-quiz__box" 
        v-for="item in quiz[quizIndex-1].children" 
        :key="item.id" 
        :class="{'active' : item.id == quizQuestion}"
        @click="setQuestion(item.id)" >
        {{ item.title }}
      </div>
    </div>

  </div>
</template>
<script>
// import TypeEffect from '@/components/TypeEffect'
// import axios from 'axios'

export default {
  data(){
    return {
      quizIndex: null,
      quizQuestion: null,
      quiz: [
        {
          id : 1,
          'title' : '...potential client?', 
          children: [
            {
              id : 1.1,
              'title' : ' Interested in a service? ' 
            },
            {
              id : 1.2,
              'title' : ' Need a PDF with prices for specific service? ' 
            },
            {
              id : 1.3,
              'title' : ' Want a reference/showcase list? ' 
            }          
          ]
        },
        {
          id : 2,
          'title' : ' ...current client? ', 
          children: [
            {
              id : 2.1,
              'title' : ' Interested in a service? ' 
            },
            {
              id : 2.2,
              'title' : ' Want to rate us on... ' 
            },
            {
              id : 2.3,
              'title' : 'Need a meeting or a consultation?' 
            }
          ]
        },
        {
          id : 3,
          'title' : '...regular visitor?', 
          children: [
            {
              id : 3.1,
              'title' : ' Facebook' 
            },
            {
              id : 3.2,
              'title' : 'Instagram' 
            },
            {
              id : 3.3,
              'title' : 'Behance' 
            }
          ]
        }
      ]
    }
  },
  methods: {
    setIndex(id) {
      this.quizIndex = id;
    },
    setQuestion(id) {
      this.quizQuestion = id;
    }
  }
}
</script>
<style scoped lang="scss">
.b-quiz{
  color: #fff;
  padding: 50px 0;
  &--wrap{
    display: flex;
    margin-bottom: 20px;
  }
  &__child{
    display: none;
  }
  &__box{
    text-align: center;
    padding: 10px;
    background: #2a2a2e;
    border: 1px solid #3b3c40;
    margin: 0 5px;
    width: calc(100% / 3);
    word-break: break-word;
    border-radius: 5px;
    font-size: 13px;
    &.active{
      background: #fff;
      color: #000;
    }
  }
}
</style>