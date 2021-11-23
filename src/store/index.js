import Vue from 'vue'
import Vuex from 'vuex'

import juniorFrontendDeveloper from "@/store/modules/juniorFrontendDeveloper";
import webDesigner from "@/store/modules/webDesigner";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    branches: [
        {
          id: 0,
          title: 'Веб-дизайнер',
          short: 'web',
          chosen: false
        },
        {
          id: 1,
          title: 'Джуниор фронтенд разработчик',
          short: 'jun',
          chosen: false
        },
        {
          id: 2,
          title: 'Тестеровщик',
          short: 'tes',
          chosen: false
        }
    ],
    results: [
        'К сожалению, нам с тобой не по пути',
        'Ну если больше никто не придёт, то возьмём тебя',
        'Проверь почту, там уже лежит оффер',
    ],
    i: 0,
    currentBranchLength: -1,
    whichBranch: '',
    array: [[]],
    interrupt: -1,
    question: 0,
    newQuestion: 0,
    score: 0,
  },
  getters: {
    branches(state) {
      return state.branches;
    },
    isBeginWebDesigner(state) {
      return state.branches[0].chosen;
    },
    isBeginJuniorFrontend(state) {
      return state.branches[1].chosen;
    },
    isBeginTester(state) {
      return state.branches[2].chosen;
    },
    i(state) {
      return state.i;
    },
    currentBranchLength(state) {
      return state.currentBranchLength;
    },
    interrupt(state) {
      return state.interrupt;
    },
    question(state) {
      return state.question;
    },
    array(state) {
      return state.array;
    },
    massiveOfCurrentAnswers(state, getters) {
      return (getters.array[state.i])[state.question - state.newQuestion][1];
    },
    thisAnswers(state, getters) {
      let array = [];
      for (let i = 0; i < getters.massiveOfCurrentAnswers.length; i++) {
        array.push(getters.massiveOfCurrentAnswers[i]);
      }
      return array;
    },
    thisAnswersId(state, getters) {
      let array = [];
      for (let i = 0; i < getters.massiveOfCurrentAnswers.length; i++) {
        array.push(getters.thisAnswers[i].id);
      }
      return array;
    },
    score(state) {
      return state.score;
    },
    result(state) {
      if (state.score <= 50)
        return state.results[0];
      else if (state.score <= 80)
        return state.results[1];
      else
        return state.results[2];
    }
  },
  mutations: {
    whatsInterrupt(state, key) {
      state.interrupt = key;
    },
    whatsChosen(state, name) {
      state.whichBranch = name;
      switch (name) {
        case 'web':
          state.branches[0].chosen = !state.branches[0].chosen;
          state.currentBranchLength = state.web.questions.length;
          break;
        case 'jun':
          state.branches[1].chosen = !state.branches[1].chosen;
          state.currentBranchLength = state.jun.questions.length;
          break;
        case 'tes':
          state.branches[2].chosen = !state.branches[2].chosen;
          break;
        default:
          break;
      }
    },
    addNewSegment(state) {
      if ((state.interrupt === state.question ||
          state.interrupt + 1 === state.question) &&
          state.question) {
        state.i++;
        state.array.push([]);
        state.newQuestion = state.question;
      }
      switch (state.whichBranch) {
        case 'web':
          state.array[state.i].push([
            state.web.questions[state.question],
            state.web.answers[state.question]
          ]);
          break;
        case 'jun':
          state.array[state.i].push([
            state.jun.questions[state.question],
            state.jun.answers[state.question]
          ]);
          break;
        default:
          break;
      }
    },
    clearAllSegments(state){
      state.array = [[]];
    },
    addQuestion(state) {
      state.question++;
    },
    addScore(state, newScore) {
      state.score += newScore;
    },
    mulScore(state, newScore) {
      state.score = Math.round(state.score * newScore);
    },
    nullOrHundred(state) {
      if (state.score < 0) {
        state.score = 0;
      }
      else if (state.score > 100) {
        state.score = 100;
      }
    }
  },
  actions: {
  },
  modules: {
    jun: juniorFrontendDeveloper,
    web: webDesigner
  }
})
