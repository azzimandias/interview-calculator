<template>
  <div v-if="isBeginWebDesigner">
    <Percent :newScore="newScore" :key="keyRerender"/>
    <div class="chat__segment" v-if="question > 0">
      <div class="question">
        <div class="question__body">
          <h3 class="question__title">Есть ли у тебя опыт?</h3>
        </div>
      </div>
      <div class="answers">
        <div class="answers__body">
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
          <h3 class="question__title">В какой программе делаешь макеты?</h3>
        </div>
      </div>
      <div class="answers">
        <div class="answers__body">
          <div class="answer"
             id="answer-2-1"
             @click.once="newQuestion(15 , $event)">
            Figma</div>
          <div class="answer"
             id="answer-2-2"
             @click.once="newQuestion(-10 , $event)">
            Photoshop</div>
          <div class="answer"
             id="answer-2-3"
             @click.once="newQuestion(0 , $event)">
            В такой, о которой вы не слышали</div>
        </div>
      </div>
    </div>
    <div class="chat__segment" v-if="question > 2">
      <div class="question">
        <div class="question__body">
          <h3 class="question__title">Любишь играться со шрифтами?</h3>
        </div>
      </div>
      <div class="answers">
        <div class="answers__body">
          <div class="answer"
             id="answer-3-1"
             @click.once="newQuestion(20 , $event)">
            Я живу этим</div>
          <div class="answer"
             id="answer-3-2"
             @click.once="newQuestion(10 , $event)">
            Если очень попросите</div>
          <div class="answer"
             id="answer-3-3"
             @click.once="newQuestion(30 , $event)">
            Я сам/сама создаю шрифты</div>
          <div class="answer"
             id="answer-3-4"
             @click.once="newQuestion(-5 , $event)">
            Нет, в игры не играю</div>
        </div>
      </div>
    </div>
    <div class="chat__segment" v-if="question > 3">
      <div class="question">
        <div class="question__body">
          <h3 class="question__title">А белый цвет сможешь белее сделать?</h3>
        </div>
      </div>
      <div class="answers">
        <div class="answers__body">
          <div class="answer"
             id="answer-4-1"
             @click.once="newQuestion(15 , $event)">
            Я же говорил(а), что этого заказчика забанить надо</div>
          <div class="answer"
             id="answer-4-2"
             @click.once="newQuestion(5 , $event)">
            Пусть заказчик приедет и на Ретине посмотрит ещё разок</div>
          <div class="answer"
             id="answer-4-3"
             @click.once="newQuestion(-10 , $event)">
            Конечно, сделаю, если #fff недостаточно</div>
        </div>
      </div>
    </div>
    <div class="chat__segment" v-if="question > 4">
      <div class="question">
        <div class="question__body">
          <h3 class="question__title">Последний вопрос: в какую сторону расти планируешь?</h3>
        </div>
      </div>
      <div class="answers">
        <div class="answers__body">
          <div class="answer"
             id="answer-5-1"
             @click.once="newQuestion(20 , $event)">
            До арт-дира, естественно</div>
          <div class="answer"
             id="answer-5-2"
             @click.once="newQuestion(10 , $event)">
            В какую-то одну сферу хочу, но пока не знаю какую</div>
          <div class="answer"
             id="answer-5-3"
             @click.once="newQuestion(5 , $event)">
            Пока расту в ширину</div>
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
             @click.once="newQuestion(1.5 , $event)">
            По часам</div>
          <div class="answer"
             id="answer-6-2"
             @click.once="newQuestion(1.2 , $event)">
            По дням</div>
          <div class="answer"
             id="answer-6-3"
             @click.once="newQuestion(0.7 , $event)">
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
  name: "WebDesigner",
  components: {
    Percent
  },
  props: ["isBeginWebDesigner"],
  data() {
    return {
      question: 0,
      arrayId: [],
      maxNumberOfAnswers: 4,
      newScore: 0,
      isFirstResult: false,
      isSecondResult: false,
      isThirdResult: false,
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
      for (let i = 1; i <= this.maxNumberOfAnswers; i++) {
        this.arrayId.push(`answer-${this.question}-${i}`);
      }
    },
    hideAnswers(event) {
      for (let i = 0; i < this.arrayId.length; i++) {
        let element = document.getElementById(this.arrayId[i]);
        if (this.arrayId[i] !== event.target.id) {
          if (element !== null) {
            element.className += " hidden";
          }
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
  mounted() {
    this.saveAnswers();
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
    margin-bottom: 60px;
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
