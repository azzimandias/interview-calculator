<template>
  <div class="web-designer"
       v-if="this.isBeginWebDesigner">
    <Percent :newScore="this.score"/>
    <div class="chat__segment" v-for="(segment, index) in this.array[0]" :key="index">
      <div class="question">
        <div class="question__body">
          <h3 class="question__title">{{ segment[0].title }}</h3>
        </div>
      </div>
      <div class="answers">
        <div class="answers__body" id="answers-0">
          <div class="answer"
               v-for="(answer, index) in segment[1]" :key="index"
               @click.once="newQuestion(answer.count, answer.id)">{{ answer.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Percent from "@/components/Percent";
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "WebDesigner",
  components: {
    Percent
  },
  data() {
    return {
      arrayId: [],
      maxNumberOfAnswers: 3
    }
  },
  computed: mapGetters([
    'isBeginWebDesigner',
    'webQuestions',
    'webAnswers',
    'question',
    'array',
    'thisAnswers',
    'thisAnswersId',
    'score'
  ]),
  methods: {
    ...mapMutations([
      'addNewSegment',
      'addQuestion',
      'addScore',
      'mulScore',
      'nullOrHundred'
    ]),
    newQuestion(newScore, chosenId) {
      this.hideAnswers(chosenId);
      this.addQuestion();
      if (this.question < this.webQuestions.length) {
        this.addScore(newScore);
        this.addNewSegment();
      }
      else {
        this.mulScore(newScore);
      }
      this.nullOrHundred();
      setTimeout(() => this.$emit('scrollToEnd'), 1);
    },
    hideAnswers(chosenId) {
      let element = document.getElementsByClassName('answer');
      let arr = [];
      for (let i = this.thisAnswers.length; i > 0; i--) {
        arr.push(element[element.length - i]);
      }
      for (let i = 0; i < this.thisAnswersId.length; i++) {
        if (this.thisAnswersId[i] !== chosenId) {
          arr[i].className += " hidden";
        }
        else {
          arr[i].className += " chosen";
        }
      }
      this.arrayId = [];
    }
  },
  watch: {
  },
  mounted() {
    if (this.isBeginWebDesigner) {
      this.addNewSegment();
    }
  }
}
</script>

<style scoped>
  @keyframes move {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    50% {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  .chat__segment {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .question {
    align-self: flex-start;
  }

  .question__body {
    display: inline-block;
    padding: 5px;
    margin-bottom: 20px;
    background-color: bisque;
    border-radius: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    animation: move 0.7s ease-out;
  }

  .question__title {
    text-align: justify;
    margin: 15px 15px;
    font-size: 20px;
  }

  .answers {
    align-self: flex-end;
    position: relative;
  }

  .answers__body {
    display: inline-block;
    padding: 5px;
    margin-bottom: 20px;
    background-color: darkseagreen;
    border-radius: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    animation: move 1s ease-out;
  }

  .answer {
    opacity: 1;
    margin: 15px 30px;
    cursor: pointer;
    font-size: 20px;
    text-shadow: 0 0 0 #333, 0 0 0 #333;
    transition: font-size 0.5s, opacity 0s, margin 0.5s;
  }

  .answer1 {
    opacity: 0;
  }

  .answer:hover {
    text-shadow: 0 0 1px #333, 0 0 1px #333;
  }

  .hidden {
    font-size: 0;
    margin: 0;
    opacity: 0;
  }

  .chosen {
    text-shadow: 0 0 1px #333, 0 0 1px #333;
  }

  @media screen and (max-width: 1440px) {
    .question__body {
      border-radius: 30px;
    }

    .question__title {
      font-size: 15px;
      margin: 10px 15px;
    }

    .answers__body {
      border-radius: 30px;
    }

    .answer, .answer1 {
      font-size: 15px;
      margin: 10px 25px;
    }

    .hidden {
      font-size: 0;
      margin: 0;
    }
  }

  @media screen and (max-width: 580px) {
    .question {
      max-width: 80%;
    }

    .question__title {
      font-size: 12px;
      margin: 5px 15px;
    }

    .answers, .answer1 {
      max-width: 80%;
    }

    .answer {
      font-size: 12px;
      margin: 15px 15px;
    }

    .hidden {
      font-size: 0;
      margin: 0;
    }

    .chosen {
      margin: 5px 15px;
    }
  }
</style>
