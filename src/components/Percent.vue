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
  .percent {
    position: fixed;
    line-height: 120px;
    top: 50px;
    right: calc(50% - 750px);
  }

  .percent__title {
    font-size: 50px;
    margin: 0;
  }

  @media screen and (max-width: 1760px) {
    .percent {
      right: calc(50% - 600px);
    }

    .percent__title {
      font-size: 45px;
    }
  }

  @media screen and (max-width: 1440px) {
    .percent {
      right: calc(50% - 450px);
    }

    .percent__title {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 1024px) {
    .percent {
      line-height: 80px;
      right: calc(50% - 350px);
    }
  }

  @media screen and (max-width: 768px) {
    .percent {
      top: 10px;
      line-height: 40px;
      right: 5%;
      z-index: 1;
    }

    .percent__title {
      font-size: 30px;
    }
  }
</style>
