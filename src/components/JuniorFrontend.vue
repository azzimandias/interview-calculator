<template>
  <div class="junior-frontend"
       v-if="this.isBeginJuniorFrontend">
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
    <div class="chat__segment"
         v-for="(segment, index) in this.array[1]"
         :key="index"
         v-if="(this.question >= this.interrupt)">
      <div class="question">
        <div class="question__body">
          <h3 class="question__title">{{ segment[0].title }}</h3>
        </div>
      </div>
      <div class="answers big-margin" id="input-answer">
        <div class="answers__body">
          <input class="answer to-input"
                 type="text"
                 :disabled="disabled"
                 v-model="inputNumber"
                 @focusout="questionWithInput()"
                 @keydown.enter="questionWithInput()">
        </div>
        <div class="help another-position" id="help-2">
          Введите число от 0 до 10,<br/>
          где 0 — это совершенно не люблю,<br/>
          а 10 — обожаю
        </div>
      </div>
    </div>
    <div class="chat__segment" v-for="(segment, index) in this.array[2]" :key="index"
         v-if="(this.question > this.interrupt)">
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
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: "JuniorFrontend",
  components: {
    Percent
  },
  data() {
    return {
      arrayId: [],
      maxNumberOfAnswers: 3,
      isInput: false,
      disabled: false,
      inputNumber: '',
      oldInputNumber: ''
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
    },
    questionWithInput() {
      if (!this.disabled) {
        (document.getElementById("input-answer")).style.marginBottom = "20px";
        if (this.inputNumber) {
          if (Number(this.inputNumber) === 0) {
            this.addQuestion();
            this.addScore(20);
            this.addNewSegment();
            this.nullOrHundred();
            this.$emit('scrollToEnd');
          } else {
            this.addQuestion();
            this.addScore(-50);
            this.addNewSegment();
            this.nullOrHundred();
            this.$emit('scrollToEnd');
          }
          this.disabled = !this.disabled;
          this.arrayId = [];
          (document.getElementById("help-2")).style.opacity = "0";
          setTimeout(() => {
            (document.getElementById("help-2")).style.display = "none"
          }, 500);
        }
        else {
          this.inputUndefined();
        }
      }
    },
    inputUndefined() {
      this.inputNumber = this.oldInputNumber;
    },
  },
  watch: {
    inputNumber: function (value) {
      if (Number.isNaN(+value) ||
          value < 0 || value > 10 ||
          (value.length > 1 && value !== "10")) {
        this.inputUndefined();
      }
      this.oldInputNumber = value;
    }
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
.to-input {
  outline: none;
  border: none;
  width: 25px;
  text-align: center;
  background-color: inherit;
  border-bottom: 1px solid #2c3e50;
  margin: 15px 30px;
  cursor: pointer;
  font-size: 20px;
  -webkit-appearance: none;
  transition: width 0.5s;
}

.to-input:disabled {
  border-bottom: 0;
  color: #2c3e50;
  text-shadow: 0 0 1px #333, 0 0 1px #333;
}

.big-margin {
  margin-bottom: 60px;
}

.another-position {
  top: 100%;
  left: -240%;
  max-width: 270px;
}

.result {
  display: inline-block;
  width: 100%;
  text-align: center;
  animation: move 1s ease-out;
}

.result__body {
  margin-bottom: 60px;
}

.result__title {
  font-size: 30px;
}

@media screen and (max-width: 1440px) {
  .to-input {
    font-size: 15px;
    margin: 10px 15px;
  }

  .another-position {
    left: -350%;
  }
}

@media screen and (max-width: 580px) {
  .to-input {
    font-size: 12px;
    margin: 5px 15px;
  }

  .another-position {
    left: -200%;
  }

  .result__title {
    font-size: 20px;
  }
}
</style>

