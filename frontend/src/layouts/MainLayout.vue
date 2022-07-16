<template>
  <q-layout
    view="lHh Lpr lFf"
    v-on:dblclick="store.isMenuOpen ? store.toggleMenu() : null"
  >
    <menu-windows class="menu-position"></menu-windows>
    <q-header elevated class="mobile-only">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-btn
          round
          dense
          flat
          icon="menu"
          class="q-mr-xs"
          @click="toggleLeftDrawer"
        />
        <q-space />

        <q-input
          dark
          borderless
          v-model="text"
          input-class="text-right"
          class="q-ml-md"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" class="mobile-only">
      <q-list>
        <q-item-label header> Essential Links </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import MenuWindows from 'src/components/Menu/MenuWindows.vue';
import { geralStore } from 'src/stores/geral-store';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: { MenuWindows },

  setup() {
    const leftDrawerOpen = ref(false);
    const store = geralStore();
    const text = ref('');

    return {
      text,
      leftDrawerOpen,
      store,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss">
body {
  background-image: url('https://win11.vercel.app/assets/default_dark_compressed.4fd030c7.jpg');
  background-size: cover;
}
.menu-position {
  z-index: 60001;
}
</style>
