<template>
  <div id="app">
    <div class="white-block"></div>
    <h1 class="application-name">
      Interview
      calculator
    </h1>
    <div class="arrow" @click="openCloseThemes($event)"></div>
    <div class="switcher">
      <input class="switcher__radio switcher__radio--light"
             type="radio"
             name="color-theme"
             value="light"
             aria-label="Светлая" @click="switchTheme($event)">
      <input class="switcher__radio switcher__radio--auto"
             type="radio"
             name="color-theme"
             value="auto"
             aria-label="Автоматическкая" @click="switchTheme($event)" checked>
      <input class="switcher__radio switcher__radio--dark"
             type="radio"
             name="color-theme"
             value="dark"
             aria-label="Темная" @click="switchTheme($event)">
      <div class="switcher__status"></div>
    </div>
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
import WebDesigner from "@/components/WebDesigner";
import JuniorFrontend from "@/components/JuniorFrontend";
import Tester from "@/components/Tester";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: 'App',
  components: {
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
    openCloseThemes(event) {
      let arrow = document.querySelector('.arrow');
      let switcher = document.querySelector('.switcher');
      if (!this.arrowFlag && event.type !== 'scroll') {
        switcher.style.opacity = '1';
        arrow.style.marginLeft = '50px';
        switcher.style.marginLeft = '50px';
        this.arrowFlag = !this.arrowFlag;
      }
      else if (this.arrowFlag || event.type === 'scroll') {
        switcher.style.opacity = '0';
        arrow.style.marginLeft = '0';
        switcher.style.marginLeft = '-2px';
        this.arrowFlag = !this.arrowFlag;
      }
    },
    switchTheme(event) {
      if (this.eventValue !== event.target.value) {
        this.eventValue = event.target.value;
        if (localStorage.getItem('color-theme')) {
          if (event.target.value === 'auto') {
            localStorage.removeItem('color-theme');
            document.documentElement.setAttribute('data-theme', 'auto');
            return;
          }
          localStorage.setItem('color-theme', event.target.value);
          document.documentElement.setAttribute('data-theme', event.target.value);
        }
        else {
          localStorage.setItem('color-theme', event.target.value);
          document.documentElement.setAttribute('data-theme', event.target.value);
        }
      }
    },
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
  },
  mounted() {
    this.handleDebouncedScroll = debounce(this.openCloseThemes, 1);
    window.addEventListener('scroll', this.handleDebouncedScroll);
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      document.querySelector('.switcher__radio--light').checked = 'checked';
    }
    else if (localStorage.getItem('color-theme') === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.querySelector('.switcher__radio--dark').checked = 'checked';
    }
    else {
      document.documentElement.setAttribute('data-theme', 'auto');
      document.querySelector('.switcher__radio--auto').checked = 'checked';
    }
  }
}
</script>

<style>

</style>
