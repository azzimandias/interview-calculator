<template>
  <div>
    <div class="arrow arrow--un-clicked" @click="openCloseThemes($event)"></div>
    <div class="switcher switcher--close">
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
  </div>
</template>

<script>
import debounce from "lodash/debounce";

export default {
  name: "ThemeSwitcher",
  methods: {
    openCloseThemes(event) {
      let arrow = document.querySelector('.arrow');
      let switcher = document.querySelector('.switcher');
      arrow.className = arrow.className.split(' ')[0];
      switcher.className = switcher.className.split(' ')[0];
      if (!this.arrowFlag && event.type !== 'scroll') {
        arrow.className += ' arrow--clicked';
        switcher.className += ' switcher--open';
        this.arrowFlag = !this.arrowFlag;
      }
      else if (this.arrowFlag || event.type === 'scroll') {
        arrow.className += ' arrow--un-clicked';
        switcher.className += ' switcher--close';
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

<style scoped>

</style>
