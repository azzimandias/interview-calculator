<template>
  <div class="junior-frontend"
       v-if="this.isBeginJuniorFrontend">
    <Percent :newScore="this.score"/>
    <div class="chat__segment" v-for="segment in this.array[0]" :key="segment.id">
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
    <InputAnswer v-for="segment in this.array[1]" :key="segment.id" :segment="segment"
                 @scrollToEnd="scrollToEnd()"/>
    <div class="chat__segment" v-for="segment in this.array[2]" :key="segment.id">
      <div class="question">
        <div class="question__body">
          <h3 class="question__title">{{ segment[0].title }}</h3>
        </div>
      </div>
      <div class="answers">
        <div class="answers__body" id="answers-1">
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
import InputAnswer from "@/components/InputAnswer";
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: "JuniorFrontend",
  components: {
    Percent,
    InputAnswer
  },
  data() {
    return {
      arrayId: [],
      maxNumberOfAnswers: 3,
      isInput: false
    }
  },
  computed: mapGetters([
      'isBeginJuniorFrontend',
      'i',
      'interrupt',
      'juniorQuestions',
      'juniorAnswers',
      'question',
      'array',
      'thisAnswers',
      'thisAnswersId',
      'score'
  ]),
  methods: {
    ...mapMutations([
        'whatsInterrupt',
        'addNewSegment',
        'addQuestion',
        'addScore',
        'mulScore',
        'nullOrHundred'
    ]),
    newQuestion(newScore, chosenId) {
      this.hideAnswers(chosenId);
      this.addQuestion();
      if (this.question < this.juniorQuestions.length) {
        this.addScore(newScore);
        this.addNewSegment();
      }
      else {
        this.mulScore(newScore);
      }
      this.nullOrHundred();
      this.scrollToEnd();
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
    },
    scrollToEnd() {
      setTimeout(() => this.$emit('scrollToEnd'), 1);
    }
  },
  watch: {
  },
  mounted() {
    if (this.isBeginJuniorFrontend) {
      this.whatsInterrupt(3);
      this.addNewSegment();
    }
  }
}
</script>

<style scoped>
  .chat__segment {
    position: relative;
    display: flex;
    flex-direction: column;
  }

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

  .question {
    align-self: flex-start;
  }

  .question__body {
    display: inline-block;
    padding: 5px;
    margin-bottom: 20px;
    background-color: var(--question-color);
    border-radius: 50px;
    box-shadow: 0 0 10px var(--box-shad-color);
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
    background-color: var(--answer-color);
    border-radius: 50px;
    box-shadow: 0 0 10px var(--box-shad-color);
    animation: move 1s ease-out;
  }

  .answer {
    opacity: 1;
    margin: 15px 30px;
    cursor: pointer;
    font-size: 20px;
    text-shadow: 0 0 0 var(--text-shad-color-1), 0 0 0 var(--text-shad-color-1);
    transition: font-size 0.5s, opacity 0s, margin 0.5s, color 0.3s, text-shadow 0.3s;
  }

  .answer1 {
    opacity: 0;
  }

  .answer:hover {
    text-shadow: 0 0 1px var(--text-shad-color-2), 0 0 1px var(--text-shad-color-2);
  }

  .help {
    display: inline-block;
    position: absolute;
    top: 100%;
    left: calc(50% - 165px);
    max-width: 260px;
    padding: 15px 30px;
    background-color: var(--answer-color);
    border-radius: 10px;
    box-shadow: 0 0 10px var(--box-shad-color);
    animation: move 1s ease-out;
  }

  .hidden {
    font-size: 0;
    margin: 0;
    opacity: 0;
  }

  .chosen {
    text-shadow: 0 0 1px var(--text-shad-color-2), 0 0 1px var(--text-shad-color-2);
  }

  @media screen and (max-width: 1440px) {
    .question__body {
      border-radius: 30px;
    }

    .question__title {
      font-size: 15px;
      margin: 10px 15px;
    }

    .help {
      font-size: 15px;
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

  @media screen and (max-width: 890px) {
    .question {
      max-width: 80%;
    }

    .answers, .answer1 {
      max-width: 80%;
    }
  }

  @media screen and (max-width: 580px) {
    .question__title {
      font-size: 12px;
      margin: 5px 15px;
    }

    .help {
      font-size: 12px;
      left: calc(50% - 150px);
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
