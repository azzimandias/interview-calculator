<template>
  <div id="app">
    <div class="white-block"></div>
    <h1 class="application-name">
      Interview<br/>
      calculator
    </h1>
    <div class="chat" id="chat">
      <div class="chat__segment"
           id="firstQuestion">
        <div class="question">
          <div class="question__body">
            <h2 class="question__title">
              Для начала давай определимся на какую вакансию ты претендуешь?
            </h2>
          </div>
        </div>
        <div class="answers">
          <div class="answers__body">
            <div class="answer"
                 id="answer-1"
                 @click.once="chosenWebDesigner($event)">
              Веб-дизайнер</div>
            <div class="answer"
                 id="answer-2"
                 @click.once="chosenJuniorFrontend($event)">
              Джуниор фронтенд разработчик</div>
            <div class="answer"
                 id="answer-3"
                 @click="chosenTester($event)">
              Тестеровщик</div>
          </div>
          <div class="help" id="help-1">
            Выберите один из вариантов ответа
          </div>
        </div>
      </div>
      <WebDesigner :isBeginWebDesigner="isBeginWebDesigner"
                   :key="webKeyRerender"
                   @scrollToEnd="scrollToEnd()"/>
      <JuniorFrontend :isBeginJuniorFrontend="isBeginJuniorFrontend"
                      :key="juniorKeyRerender"
                      @scrollToEnd="scrollToEnd()"/>
      <Tester :isBeginTester="isBeginTester"
              :key="testerKeyRerender"
              @unHide="unHideFirstQuestion()"/>
    </div>
  </div>
</template>

<script>
import WebDesigner from "@/components/WebDesigner";
import JuniorFrontend from "@/components/JuniorFrontend";
import Tester from "@/components/Tester";

export default {
  name: 'App',
  components: {
    WebDesigner,
    JuniorFrontend,
    Tester
  },
  data() {
    return {
      isBeginWebDesigner: false,
      isBeginJuniorFrontend: false,
      isBeginTester: false,
      arrayId: [],
      flag: false,
      scrollH: document.documentElement.scrollHeight,
      scrollT: 0,
      webKeyRerender: 0,
      juniorKeyRerender: 1,
      testerKeyRerender: 2,
    }
  },
  methods: {
    chosenWebDesigner(event) {
      this.isBeginWebDesigner = !this.isBeginWebDesigner;
      this.forceRerender(event);
    },
    chosenJuniorFrontend(event) {
      this.isBeginJuniorFrontend = !this.isBeginJuniorFrontend;
      this.forceRerender(event);
    },
    chosenTester(event) {
      if (!this.flag) {
        this.isBeginTester = !this.isBeginTester;
        this.flag = !this.flag;
        this.forceRerender(event);
      }
    },
    forceRerender(event) {
      this.hideFirstQuestion(event);
      this.webKeyRerender++;
      this.juniorKeyRerender++;
      this.testerKeyRerender++;
    },
    hideFirstQuestion(event) {
      let element = '';
      for (let i = 0; i < this.arrayId.length; i++) {
        element = document.getElementById(this.arrayId[i]);
        if (this.arrayId[i] !== event.target.id) {
          if (element !== null) {
            element.className += " hidden";
          }
        }
        else {
          element.className += " chosen";
        }
      }
      (document.getElementById("help-1")).style.opacity = "0";
      setTimeout(() => {
        (document.getElementById("help-1")).style.display = "none"
      }, 500);
    },
    unHideFirstQuestion() {
      this.flag = !this.flag;
      this.isBeginTester = !this.isBeginTester;
      let element = '';
      for (let i = 0; i < this.arrayId.length; i++) {
        element = document.getElementById(this.arrayId[i]);
        element.className = "answer"
      }
      (document.getElementById("help-1")).style.opacity = "1";
      (document.getElementById("help-1")).style.display = "inherit"
      this.webKeyRerender++;
      this.juniorKeyRerender++;
      this.testerKeyRerender++;
    },
    scrollToEnd() {
      setTimeout(() => {
        let x = (document.documentElement.scrollHeight - this.scrollH) + 60;
        let y = this.scrollT - document.documentElement.scrollTop;
        this.scrollH = document.documentElement.scrollHeight;
        let i = 0;
        if (y > 0)
          x = x + y;
        if (x > 0) {
          let interval = setInterval(() => {
            if (i === x) {
              clearInterval(interval);
              this.scrollT = document.documentElement.scrollTop;
            }
            document.documentElement.scrollTop++;
            i++;
          }, 1);
        }
      }, 1);
    }
  },
  mounted() {
    for (let i = 1; i <= 3; i++) {
      this.arrayId.push(`answer-${i}`);
    }
  }
}
</script>

<style>
  * {
    -webkit-tap-highlight-color: transparent;
  }

  body {
    -ms-overflow-style: none;
    overflow-y: scroll;
    margin: 0;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    position: relative;
  }

  .white-block {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 120px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .application-name {
    position: fixed;
    top: 10%;
    left: calc(50% - 850px);
    font-size: 50px;
    line-height: 60px;
    margin: 0;
  }

  .chat {
    width: 1000px;
    height: calc(100vh - 120px);
    margin: 0 auto;
    padding: 60px 10px;
  }

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
    background-color: bisque;
    border-radius: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    animation: move 0.7s ease-out;
  }

  .question__title {
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
    margin: 15px 30px;
    cursor: pointer;
    font-size: 20px;
    text-shadow: 0 0 0 #333, 0 0 0 #333;
    transition: font-size 0.5s, opacity 0s, margin 0.5s;
  }

  .answer:hover {
    text-shadow: 0 0 1px #333, 0 0 1px #333;
  }

  .help {
    display: inline-block;
    position: absolute;
    top: 100%;
    left: calc(50% - 165px);
    max-width: 260px;
    padding: 15px 30px;
    background-color: darkseagreen;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    animation: move 1s ease-out;
  }

  .hidden {
    font-size: 0;
    margin: 0;
    opacity: 0;
  }

  .chosen {
    text-shadow: 0 0 1px #333, 0 0 1px #333;
  }

  @media screen and (max-width: 1760px) {
    .application-name {
      left: calc(50% - 660px);
      font-size: 45px;
    }

    .chat {
      width: 800px;
    }
  }

  @media screen and (max-width: 1440px) {
    .application-name {
      left: calc(50% - 500px);
      font-size: 35px;
    }

    .chat {
      width: 600px;
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

    .answer {
      font-size: 15px;
      margin: 10px 25px;
    }

    .hidden {
      font-size: 0;
      margin: 0;
    }
  }

  @media screen and (max-width: 1024px) {
    .application-name {
      left: calc(50% - 380px);
      font-size: 28px;
      line-height: 40px;
    }

    .chat {
      width: 450px;
    }
  }

  @media screen and (max-width: 768px) {
    .white-block {
      display: block;
    }

    .application-name {
      top: 3%;
      left: calc(50% - 200px);
      font-size: 28px;
      line-height: 40px;
      z-index: 1;
    }

    .chat {
      width: auto;
      margin: 100px 30px 0 30px;
    }
  }

  @media screen and (max-width: 580px) {
    .application-name {
      left: 10%;
    }

    .chat {
      margin: 100px 10px 0 10px;
    }

    .question {
      max-width: 80%;
    }

    .question__title {
      font-size: 12px;
      margin: 5px 15px;
    }

    .help {
      font-size: 12px;
      left: calc(50% - 150px);
    }

    .answers {
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
