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

</style>
