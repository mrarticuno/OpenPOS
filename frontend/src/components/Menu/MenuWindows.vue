<template>
  <div class="menu_windows" v-show="exibir">
    <div class="inner_container">
      <div class="search_container">
        <div class="_icon_puygg_35">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0384c0 "
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <input
          class="_search_input_puygg_19"
          type="text"
          placeholder="Type here to search"
          data-np-checked="1"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MenuWindows',
  data() {
    return {
      exibir: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.exibir = false;
    }, 2000);
  },
});
</script>

<style lang="scss">
.inner_container {
  background: rgba(28, 33, 39, 0.63);
}

.menu_windows {
  position: absolute;
  max-height: 850px;
  min-height: 50vh;
  width: 80%;
  max-width: 600px;
  background-color: #fff;
  bottom: 60px;
  left: 50%;
  transform: translate(-50%, 0);
  backdrop-filter: blur(20.5px);
  -webkit-backdrop-filter: blur(20.5px);
  border-radius: 8px;
  transition: 0.2s background ease;
  animation: 0.4s slideUp;
  animation-timing-function: cubic-bezier(0.3, 0.5, 0, 1);
  background: 0 0;
  display: flex;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  flex-direction: column;
  overflow: hidden;
}

.menu_windows.active {
  animation: 0.2s slideDown ease;
  /* animation-timing-function: cubic-bezier(0.3, 0.5, 0, 1); */
}

@keyframes slideUp {
  from {
    transform: translate(-50%, 100%);
  }
  to {
    transform: translate(-50%, 0%);
  }
}
@keyframes slideDown {
  from {
    transform: translate(-50%, 0%);
  }
  to {
    transform: translate(-50%, 100%);
  }
}
</style>
