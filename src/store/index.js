import Vue from 'vue'
import Vuex from 'vuex'
import juniorFrontendDeveloper from "@/store/modules/juniorFrontendDeveloper";
import webDesigner from "@/store/modules/webDesigner";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results: [
        'К сожалению, нам с тобой не по пути',
        'Ну если больше никто не придёт, то возьмём тебя',
        'Проверь почту, там уже лежит оффер',
    ],
    i: 0,
    whichBranch: '',
    array: [[]],
    interrupt: -1,
    question: 0,
    newQuestion: 0,
    score: 0,
  },
  getters: {
    i(state) {
      return state.i;
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
    thisAnswers(state, getters) {
      let array = [];
      for (let i = 0; i < ((getters.array[state.i])[state.question - state.newQuestion][1]).length; i++) {
        array.push(((getters.array[state.i])[state.question - state.newQuestion][1])[i]);
      }
      return array;
    },
    thisAnswersId(state, getters) {
      let array = [];
      for (let i = 0; i < ((getters.array[state.i])[state.question - state.newQuestion][1]).length; i++) {
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
    },
    addNewSegment(state) {
      if ((state.interrupt === state.question || state.interrupt + 1 === state.question) && state.question) {
        state.i++;
        state.array.push([]);
        state.newQuestion = state.question;
      }
      if (state.whichBranch === 'web') {
        state.array[state.i].push([
          state.web.questions[state.question],
          state.web.answers[state.question]
        ]);
      }
      else if (state.whichBranch === 'jun') {
        state.array[state.i].push([
          state.jun.questions[state.question],
          state.jun.answers[state.question]
        ]);
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
      state.score *= newScore;
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
