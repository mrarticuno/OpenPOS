<template>
  <div class="menu-horizontal-center">
    <div v-for="(item, index) in menu" :key="index" class="menu-item-container">
      <div
        v-if="item.path"
        :class="dark ? 'menu-item-dark' : 'menu-item-horizontal'"
        @click="showMenu()"
      >
        <q-icon
          v-if="item.icon.length > 0"
          :name="item.icon"
          size="34px"
          class="item-detail"
        />
        <img
          v-if="item.image.length > 0"
          src="~assets/Logo.png"
          class="item-detail invert noselect"
        />
      </div>
      <div v-else class="menu-item-horizontal" @click="showMenu()">
        <q-icon
          v-if="item.icon.length > 0"
          :name="item.icon"
          size="34px"
          class="item-detail"
        />
        <img
          v-if="item.image.length > 0"
          src="~assets/Logo.png"
          class="item-detail invert noselect"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { geralStore } from 'src/stores/geral-store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MenuH',
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    showMenu() {
      this.store.toggleMenu();
    },
    changeRoute(route) {
      void this.$router.push({ path: route });
    },
  },
  data() {
    return {
      menu: [
        {
          id: 0,
          path: '/',
          image: '~assets/Logo.png',
          icon: '',
        },
      ],
    };
  },
  setup() {
    const store = geralStore();
    return {
      store,
    };
  },
});
</script>

<style lang="scss" scoped>
.item-detail {
  padding: 0px 10px;
  max-height: 34px;
  min-height: 34px;
}
.menu-item-container {
  width: auto;
}
.menu-item-horizontal {
  transition: 0.1s all ease-in;
  :hover {
    background: rgba(255, 255, 255, 0.658);
    backdrop-filter: blur(20.5px);
    cursor: pointer;
    border-radius: 3px;
  }
}
.menu-item-dark {
  transition: 0.1s all ease-in;
  :hover {
    background: rgba(3, 21, 41, 0.35);
    backdrop-filter: blur(20.5px);
    cursor: pointer;
    border-radius: 3px;
  }
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.invert {
  filter: invert(100%);
}
.menu-horizontal-center {
  flex: 1 1 0%;
  display: flex;
  justify-content: center;
}
</style>
