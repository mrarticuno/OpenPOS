import { boot } from 'quasar/wrappers';
import { userStore } from 'src/stores/user-store';

export default boot(({ router, store }) => {
  router.beforeEach((to, from, next) => {
    if (to.name === 'login') {
      next();
      return;
    }
    const state = userStore(store);
    if (state.token.length > 0) {
      next();
    } else {
      next('/login');
    }
  });
});
