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
    <div class="result" v-show="this.question === this.juniorQuestions.length">
      <div class="result__body" id="results">
        <h2 class="result__title" id="result-1">{{ result }}</h2>
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
      'score',
      'result'
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
      this.$emit('scrollToEnd');
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
  .result {
    display: inline-block;
    width: 100%;
    text-align: center;
    animation: move 1s ease-out;
  }

  .result__body {
    //margin-bottom: 60px;
  }

  .result__title {
    font-size: 30px;
  }

  @media screen and (max-width: 580px) {
    .result__title {
      font-size: 20px;
    }
  }
</style>
