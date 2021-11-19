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
    <div class="result" v-show="this.question === this.webQuestions.length">
      <div class="result__body" id="results">
        <h2 class="result__title" id="result-1">{{ result }}</h2>
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
    'score',
    'result'
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
      this.$emit('scrollToEnd');
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

