<template>
  <div id="app">
    <div class="white-block"></div>
    <h1 class="application-name">
      Interview
      calculator 🧮
    </h1>
    <ThemeSwitcher/>
    <div class="chat" id="chat">
      <div class="chat__segment" id="firstQuestion">
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
                 v-for="(branch,index) in this.branches" :key="index"
                 @click="choseBranch(branch.short, branch.id)">{{ branch.title }}</div>
          </div>
          <div class="help" id="help-1">
            Выберите один из вариантов ответа
          </div>
        </div>
      </div>
      <WebDesigner :key="webKeyRerender"
                   @scrollToEnd="scrollToEnd()"/>
      <JuniorFrontend :key="juniorKeyRerender"
                      @scrollToEnd="scrollToEnd()"/>
      <Tester :key="testerKeyRerender"
              @unHide="unHideFirstQuestion()"/>
    </div>
    <div class="result" id="result">
      <div class="result__body" id="results" v-if="this.question === this.currentBranchLength">
        <h2 class="result__title" id="result-1">{{ result }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce';
import ThemeSwitcher from "@/components/ThemeSwitcher";
import WebDesigner from "@/components/WebDesigner";
import JuniorFrontend from "@/components/JuniorFrontend";
import Tester from "@/components/Tester";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: 'App',
  components: {
    ThemeSwitcher,
    WebDesigner,
    JuniorFrontend,
    Tester
  },
  data() {
    return {
      flag: false,
      scrollH: document.documentElement.scrollHeight,
      scrollT: 0,
      hidden1: {},
      hidden2: {},
      chosen: {},
      webKeyRerender: 0,
      juniorKeyRerender: 1,
      testerKeyRerender: 2,
      arrowFlag: false,
      eventValue: ''
    }
  },

  computed: mapGetters([
      'branches',
      'currentBranchLength',
      'juniorQuestions',
      'juniorAnswers',
      'question',
      'result'
  ]),
  methods: {
    ...mapMutations(['whatsChosen', 'clearAllSegments']),
    choseBranch(short, id) {
      if (!this.flag) {
        this.flag = !this.flag;
        this.whatsChosen(short);
        this.hideFirstQuestion(id);
        this.clearAllSegments();
        this.forceRerender();
      }
    },
    forceRerender() {
      this.webKeyRerender++;
      this.juniorKeyRerender++;
      this.testerKeyRerender++;
    },
    hideFirstQuestion(id) {
      let element = document.getElementsByClassName('answer');
      for (let i = 0; i < this.branches.length; i++) {
        if (i !== id) {
          element[i].className += " hidden";
        }
        else {
          element[i].className += " chosen";
        }
      }
      this.hidden1 = document.getElementsByClassName('hidden')[0];
      this.hidden2 = document.getElementsByClassName('hidden')[1];
      this.chosen = document.getElementsByClassName('chosen')[0];
      (document.getElementById("help-1")).style.opacity = "0";
      setTimeout(() => {
        (document.getElementById("help-1")).style.display = "none"
      }, 500);
    },
    unHideFirstQuestion() {
      this.flag = !this.flag;
      this.whatsChosen('tes');
      this.getBackClasses();
      (document.getElementById("help-1")).style.opacity = "1";
      (document.getElementById("help-1")).style.display = "inherit";
      this.webKeyRerender++;
      this.juniorKeyRerender++;
      this.testerKeyRerender++;
    },
    getBackClasses() {
      this.hidden1.className = "answer";
      this.hidden2.className = "answer";
      this.hidden1.style.transition = 'font-size 0.5s, opacity 0.5s, margin 0.5s';
      this.hidden2.style.transition = 'font-size 0.5s, opacity 0.5s, margin 0.5s';
      setTimeout(() => {
        this.hidden1.style.transition = 'font-size 0.5s, opacity 0s, margin 0.5s';
        this.hidden2.style.transition = 'font-size 0.5s, opacity 0s, margin 0.5s';
      }, 500)
      this.chosen.className = "answer";
    },
    scrollToEnd() {
      let elem = document.getElementById('result');
      let coordinationY = elem.getBoundingClientRect().bottom;
      let oldScrollTop = 0;
      setTimeout(() => {
        let scroller = setInterval(() => {
          let scrollBy = coordinationY / 500;
          if(scrollBy > window.pageYOffset - coordinationY &&
            document.documentElement.clientHeight + window.pageYOffset < document.body.offsetHeight &&
            document.documentElement.scrollTop >= oldScrollTop) {
            oldScrollTop = document.documentElement.scrollTop;
            window.scrollBy(0, scrollBy);
          }
          else {
            clearInterval(scroller);
          }
        }, 10);
      }, 10);
    }
  }
}
</script>

<style>
  * {
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    transition: 0.3s;
  }

  body {
    background-color: var(--page-color);
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
    color: var(--text-color);
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .white-block {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: var(--page-color);
    box-shadow: 0 0 10px var(--box-shad-color);
    z-index: 1;
  }

  .application-name {
    position: fixed;
    top: 50px;
    left: calc(50% - 850px);
    width: 350px;
    font-size: 50px;
    line-height: 60px;
    margin: 0;
  }

  .chat {
    width: 1000px;
    margin: 0 auto;
    padding: 60px 10px;
    flex: 1 0 auto;
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
    transition: font-size 0.5s, opacity 0s, margin 0.5s;
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

  .result {
    display: inline-block;
    width: 100%;
    text-align: center;
    animation: move 1s ease-out;
    flex: 0 0 auto;
  }

  .result__title {
    font-size: 30px;
  }

  @media screen and (max-width: 1760px) {
    .application-name {
      width: 300px;
      left: calc(50% - 710px);
      font-size: 45px;
    }

    .chat {
      width: 800px;
    }
  }

  @media screen and (max-width: 1440px) {
    .application-name {
      width: 250px;
      left: calc(50% - 550px);
      font-size: 35px;
    }

    .chat {
      width: 600px;
    }

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

  @media screen and (max-width: 1130px) {
    .application-name {
      left: calc(50% - 430px);
      font-size: 28px;
      line-height: 40px;
    }

    .chat {
      width: 450px;
    }
  }

  @media screen and (max-width: 890px) {
    .white-block {
      display: block;
    }

    .application-name {
      top: 10px;
      left: 5%;
      width: auto;
      font-size: 20px;
      line-height: 40px;
      z-index: 1;
    }

    .chat {
      width: auto;
      margin: 40px 30px 0 30px;
    }

    .question {
      max-width: 80%;
    }

    .answers, .answer1 {
      max-width: 80%;
    }
  }

  @media screen and (max-width: 580px) {
    .chat {
      margin: 40px 10px 0 10px;
      padding: 60px 10px 20px 10px;
    }

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

    .result__title {
      font-size: 20px;
    }
  }
</style>
