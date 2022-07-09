<template>
  <q-page class="row items-center justify-evenly">
    <desktop-menu class="desktop-only"></desktop-menu>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DesktopMenu from '../components/Menu/DesktopMenu.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { DesktopMenu },
  setup() {
    return {};
  },
});
</script>
