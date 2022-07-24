import { defineStore } from 'pinia';

import { User } from '../models/User';

export const userStore = defineStore('user', {
  state: () => ({
    user: new User({}) as User,
    token: '',
  }),
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
  },
  actions: {
    getById(id: string) {
      this.user = new User(this.user.get(id));
    },
  },
});
