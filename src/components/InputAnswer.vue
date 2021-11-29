<template>
  <div class="chat__segment">
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
        где 0 — это совершенно не люблю, а 10 — обожаю
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "InputAnswer",
  props: ['segment'],
  data() {
    return {
      disabled: false,
      inputNumber: '',
      oldInputNumber: ''
    }
  },
  methods: {
    ...mapMutations([
      'addNewSegment',
      'addQuestion',
      'addScore',
      'mulScore',
      'nullOrHundred'
    ]),
    questionWithInput() {
      if (!this.disabled) {
        (document.getElementById("input-answer")).style.marginBottom = "20px";
        if (this.inputNumber) {
          if (Number(this.inputNumber) === 0) {
            this.addNew(20);
          } else {
            this.addNew(-50);
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
    addNew(x) {
      this.addQuestion();
      this.addScore(x);
      this.addNewSegment();
      this.nullOrHundred();
      this.$emit('scrollToEnd');
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
    color: var(--text-color);
    border-bottom: 1px solid var(--text-color);
    margin: 15px 30px;
    cursor: pointer;
    font-size: 20px;
    -webkit-appearance: none;
    transition: width 0.5s;
  }

  .to-input:disabled {
    border-bottom: 0;
    color: var(--text-color);
    text-shadow: 0 0 1px var(--text-shad-color-2), 0 0 1px var(--text-shad-color-2);
  }

  .big-margin {
    margin-bottom: 60px;
  }

  .another-position {
    top: 100%;
    left: -240%;
    max-width: 400px;
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
      left: -300%;
    }
  }
</style>
