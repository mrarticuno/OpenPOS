<template>
  <div :class="positionClass">
    <div class="menu-main-dark main-menu">
      <menu-h v-if="!isVertical" :dark="isDark"></menu-h>

      <div class="date-time-slot">
        <div>
          <div class="date-text">{{ showDate }}</div>
          <div class="time-text">{{ show24Hours }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuH from './MenuH.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MainMenu',
  components: {
    MenuH,
  },
  data() {
    return {
      position: 'footer',
      isVertical: false,
      isDark: false,
      currentDate: new Date(),
      interval: setInterval(() => {
        this.setDate(new Date());
      }, 15000),
    };
  },
  computed: {
    positionClass() {
      switch (this.position) {
        case 'footer':
          return 'menu-container-dark footer';
        case 'header':
        default:
          return 'menu-container-dark header';
      }
    },
    showDate() {
      return this.currentDate.toLocaleDateString();
    },
    show24Hours() {
      return this.currentDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      });
    },
  },
  methods: {
    setDate(date) {
      this.currentDate = date;
    },
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
});
</script>

<style lang="scss" scoped>
.date-time-slot {
  z-index: -5;
  position: absolute;
  width: 100%;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  div {
    padding: 0 5px;
  }
}
.menu-main {
  background: rgba(255, 255, 255, 0.658);
  backdrop-filter: blur(20.5px);
}
.menu-main-dark {
  background: rgba(3, 21, 41, 0.35);
  backdrop-filter: blur(20.5px);
}
.main-menu {
  position: relative;
  min-height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.menu-container {
  background-color: transparent;
  color: black;
}
.menu-container-dark {
  background-color: transparent;
  color: white;
}
.main-layout-background {
  background: url('https://win11.vercel.app/assets/default_light_compressed.d57f6d30.jpg')
    no-repeat center center fixed;
  background-size: cover;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  text-align: center;
  width: 100%;
  z-index: 2000;
}
.header {
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  width: 100%;
  z-index: 2000;
}
</style>
