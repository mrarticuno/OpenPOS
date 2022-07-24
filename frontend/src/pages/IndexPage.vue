<template>
  <q-page class="row items-center justify-evenly">
    <desktop-menu class="desktop-only"></desktop-menu>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DesktopMenu from '../components/Menu/DesktopMenu.vue';
import { userStore } from 'src/stores/user-store';
import { updateToken } from 'src/boot/axios';

export default defineComponent({
  name: 'IndexPage',
  components: { DesktopMenu },
  mounted() {
    updateToken(`${this.store.getToken}`);
  },
  setup() {
    const store = userStore();
    return {
      store,
    };
  },
});
</script>
