<template>
  <div v-if="this.isBeginTester">
    <div class="question tester-anim">
      <div class="question__body">
        <h2 class="question__title">
          Прости, но такой вакансии пока нет,
          может на кого-то другого хочешь попробоваться?
        </h2>
      </div>
      <button class="maybe" @click="goBack()">Возможно</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Tester",
  methods: {
    goBack() {
      (document.getElementsByClassName("tester-anim"))[0].style.opacity = "0";
      setTimeout(() => this.$emit('unHide'), 300);
    }
  },
  computed: mapGetters(['isBeginTester'])
}
</script>

<style scoped>
  .maybe {
    display: inline-block;
    font-size: 20px;
    padding: 15px;
    border: var(--answer-color) solid 2px;
    font-weight: bold;
    color: var(--answer-color);
    border-radius: 50px;
    box-shadow: 0 0 10px var(--box-shad-color);
    background-color: inherit;
    cursor: pointer;
    animation: move 0.7s ease-out;
    transition: 0.3s;
  }

  .maybe:active {
    box-shadow: 0 0 0 var(--box-shad-color);
  }

  .tester-anim {
    opacity: 1;
    animation: move 0.7s ease-out;
    transition: 0.3s;
  }

  @media screen and (max-width: 1130px) {
    .maybe {
      font-size: 15px;
    }
  }

  @media screen and (max-width: 1024px) {
    .maybe {
      font-size: 12px;
    }
  }
</style>
