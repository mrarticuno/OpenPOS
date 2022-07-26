<template>
  <div class="menu_windows row" v-show="geralstore.isMenuOpen">
    <div class="inner_container col">
      <div class="search_container">
        <q-input
          v-model="text"
          color="4489aa"
          bg-color="transparent"
          label-color="white"
          dense
          rounded
          outlined
          dark
          :placeholder="$t('search_placeholder')"
        >
          <template v-slot:prepend>
            <q-icon name="search" color="primary" />
          </template>
          <template v-slot:append>
            <q-icon
              v-if="text !== ''"
              name="clear"
              class="cursor-pointer"
              @click="text = ''"
            />
          </template>
        </q-input>
      </div>
    </div>
    <div class="inner_container col">
      <div class="shortcut_container row">
        <div
          v-for="(item, index) of menuitens"
          :key="index"
          class="menu-item col-3"
          @click="executeClick(item)"
        >
          <q-icon :name="item.icon" color="white" size="md" />
          <p class="text-white">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { geralStore } from 'src/stores/geral-store';
import { userStore } from 'src/stores/user-store';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MenuWindows',
  data() {
    return {
      menuitens: [
        {
          name: 'Home',
          icon: 'home',
          path: 'index',
        },
        {
          name: 'Gerenciar',
          icon: 'settings',
          path: 'settings',
        },
        {
          name: 'Sair',
          icon: 'mdi-exit-to-app',
          path: 'exit',
          callback: (self: any) => {
            self.store.setToken('');
            self.$router.push({ name: 'login' });
          },
        },
      ],
    };
  },
  methods: {
    executeClick(item: any) {
      if (item.callback) {
        item.callback(this);
      } else {
        this.$router.push({ name: item.path });
      }
    },
  },
  setup() {
    const geralstore = geralStore();
    const store = userStore();
    const text = ref('');
    return {
      geralstore,
      store,
      text,
    };
  },
});
</script>

<style lang="scss">
.shortcut_container {
  overflow: auto;
  justify-content: space-between;
  max-height: 300px;
}
.inner_container {
  background: rgba(28, 33, 39, 0.63);
  padding: 15px;
}

.menu-item {
  text-align: center;
  margin-bottom: 30px;
}

.menu_windows {
  position: absolute;
  max-height: 50vh;
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

.search_container {
  padding: 12px 0 12px 0;
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
