import { defineStore } from 'pinia';

export const geralStore = defineStore('geral', {
  state: () => ({
    showMenu: false,
  }),
  getters: {
    isMenuOpen: (state) => state.showMenu,
  },
  actions: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
});
