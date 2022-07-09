<template>
  <router-view />
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  mounted() {
    const $q = useQuasar();
    const locale = $q.lang.getLocale() as string;
    this.$i18n.locale = locale;
  },
});
</script>
