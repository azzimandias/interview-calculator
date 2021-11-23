<template>
  <div class="percent">
    <h2 class="percent__title">{{ viewCount }}%</h2>
  </div>
</template>

<script>
export default {
  name: "Percent",
  props: ["newScore"],
  data() {
    return {
      count: 0
    }
  },
  methods: {
    fastAddition() {

    }
  },
  computed: {
    viewCount() {
      let x = 0;
      x = this.newScore - this.count;
      if (this.count !== this.newScore && x > 0) {
        setTimeout(() => this.count++, 10);
      }
      else if (this.count !== this.newScore && x < 0) {
        setTimeout(() => this.count--, 10);
      }
      x = 0;
      return this.count;
    }
  }
}
</script>

<style scoped>

</style>
