<template>
  <q-layout view="hHh Lpr fFf" class="main-layout">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'ClearLayout',
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main-layout {
  font-weight: bold;
  background-image: linear-gradient(#d1c9e4, #674ea7);
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  color: white;
  font-size: 14px;
  justify-content: center;
}
</style>
