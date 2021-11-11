<template>
  <div class="junior-frontend"
       v-if="isBeginJuniorFrontend">
    <Percent :newScore="newScore" :key="keyRerender"/>
    <div class="chat__segment" v-if="question > 0">
      <div class="question">
        <div class="question__body">
          <h3 class="question__title">Есть ли у тебя опыт?</h3>
        </div>
      </div>
      <div class="answers">
        <div class="answers__body" id="answers-0">
          <div class="answer"
             id="answer-1-1"
             @click.once="newQuestion(20, $event)">
            Больше 5 лет работаю по этой специальности</div>
          <div class="answer"
             id="answer-1-2"
             @click.once="newQuestion(10, $event)">
            Ну немножко поработать успел</div>
          <div class="answer"
             id="answer-1-3"
             @click.once="newQuestion(0, $event)">
            Чтобы получить опыт нужна работа, а я тут ваши тесты прохожу</div>
        </div>
      </div>
    </div>
    <div class="chat__segment" v-if="question > 1">
      <div class="question">
        <div class="question__body">
          <h3 class="question__title">Начнём с простого, div от span отличишь?</h3>
        </div>
      </div>
      <div class="answers">
        <div class="answers__body">
          <div class="answer"
             id="answer-2-1"
             @click.once="newQuestion(15, $event)">
            Естественно, первый для контейнеров, второй для текста</div>
          <div class="answer"
             id="answer-2-2"
             @click.once="newQuestion(10, $event)">
            Код пишут компьютеры, пусть они и отличают</div>
          <div class="answer"
             id="answer-2-3"
             @click.once="newQuestion(-5, $event)">
            Думаю, что да</div>
        </div>
      </div>
    </div>
    <div class="chat__segment" v-if="question > 2">
      <div class="question">
        <div class="question__body">
          <h3 class="question__title">Окей, а с JS у тебя как?</h3>
        </div>
      </div>
      <div class="answers">
        <div class="answers__body">
          <div class="answer"
             id="answer-3-1"
             @click.once="newQuestion(-30, $event)">
            Я как-то больше по JQuery</div>
          <div class="answer"
             id="answer-3-2"
             @click.once="newQuestion(5, $event)">
            Норм, прошёл курс</div>
          <div class="answer"
             id="answer-3-3"
             @click.once="newQuestion(20, $event)">
            На чистом JS уже не первый год пишу</div>
        </div>
      </div>
    </div>
    <div class="chat__segment" v-if="question > 3">
      <div class="question">
        <div class="question__body">
          <h3 class="question__title">Насколько ты любишь PHP?</h3>
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
    <div class="chat__segment" v-if="question > 4">
      <div class="question">
        <div class="question__body">
          <h3 class="question__title">Сколько дней в неделю планируешь ходить в офис?</h3>
        </div>
      </div>
      <div class="answers">
        <div class="answers__body">
          <div class="answer"
             id="answer-5-1"
             @click.once="newQuestion(-20, $event)">
            Я хочу работать удалённо</div>
          <div class="answer"
             id="answer-5-2"
             @click.once="newQuestion(5, $event)">
            3-4 дня в неделю будет норм</div>
          <div class="answer"
             id="answer-5-3"
             @click.once="newQuestion(20, $event)">
            Я перееду в ваш офис, крепитесь</div>
        </div>
      </div>
    </div>
    <div class="chat__segment" v-if="question > 5">
      <div class="question">
        <div class="question__body">
          <h3 class="question__title">Кстати, а оценку задач ты как даёшь?</h3>
        </div>
      </div>
      <div class="answers">
        <div class="answers__body">
          <div class="answer"
             id="answer-6-1"
             @click.once="newQuestion(1.8, $event)">
            По часам</div>
          <div class="answer"
             id="answer-6-2"
             @click.once="newQuestion(1.3, $event)">
            По дням</div>
          <div class="answer"
             id="answer-6-3"
             @click.once="newQuestion(0.6, $event)">
            По наитию</div>
        </div>
      </div>
    </div>
    <div class="result">
      <div class="result__body" id="results">
        <h2 class="result__title" id="result-1" v-if="isFirstResult">
          К сожалению, нам с тобой не по пути</h2>
        <h2 class="result__title" id="result-2" v-if="isSecondResult">
          Ну если больше никто не придёт, то возьмём тебя</h2>
        <h2 class="result__title" id="result-3" v-if="isThirdResult">
          Проверь почту, там уже лежит оффер</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Percent from "@/components/Percent";
export default {
  name: "JuniorFrontend",
  components: {
    Percent
  },
  props: ["isBeginJuniorFrontend"],
  data() {
    return {
      question: 0,
      arrayId: [],
      maxNumberOfAnswers: 3,
      inputNumber: "",
      oldInputNumber: "",
      newScore: 0,
      isFirstResult: false,
      isSecondResult: false,
      isThirdResult: false,
      disabled: false,
      keyRerender: 0
    }
  },
  methods: {
    newQuestion(x, event) {
      this.hideAnswers(event);
      this.forNewScore(x);
      if (this.question > 5) {
        this.showResults();
      }
      else if ((this.question < 5) || (this.newScore > 40)) {
        this.saveAnswers();
      }
      else {
        this.showResults();
      }
    },
    questionWithInput() {
      if (!this.disabled) {
        (document.getElementById("input-answer")).style.marginBottom = "20px";
        if (this.inputNumber) {
          if (Number(this.inputNumber) === 0) {
            this.forNewScore(20);
          } else {
            this.forNewScore(-50);
          }
          this.disabled = !this.disabled;
          this.arrayId = [];
          this.saveAnswers();
        }
        else {
          this.inputUndefined();
        }
      }
    },
    inputUndefined() {
      this.inputNumber = this.oldInputNumber;
    },
    forNewScore(x) {
      if (this.question > 5)
        this.newScore = Math.round(this.newScore * x);
      else
        this.newScore += x;
      if (this.newScore > 100) {
        this.newScore = 100;
      }
      else if (this.newScore < 0) {
        this.newScore = 0;
      }
      this.$emit('scrollToEnd');
    },
    saveAnswers() {
      this.question++;
      if (this.question === 5) {
        (document.getElementById("help-2")).style.opacity = "0";
        setTimeout(() => {
          (document.getElementById("help-2")).style.display = "none"
        }, 500);
      }
      for (let i = 1; i <= this.maxNumberOfAnswers; i++) {
        this.arrayId.push(`answer-${this.question}-${i}`);
      }
    },
    hideAnswers(event) {
      for (let i = 0; i < this.arrayId.length; i++) {
        let element = document.getElementById(this.arrayId[i]);
        if (this.arrayId[i] !== event.target.id) {
          element.className += " hidden";
        }
        else {
          element.className += " chosen";
        }
      }
      this.arrayId = [];
    },
    showResults() {
      setTimeout(() => {
        if (this.newScore <= 50) {
          this.isFirstResult = !this.isFirstResult;
        }
        else if (this.newScore <= 80) {
          this.isSecondResult = !this.isSecondResult;
        }
        else {
          this.isThirdResult = !this.isThirdResult;
        }
      }, 1)
    }
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
    this.saveAnswers();
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
