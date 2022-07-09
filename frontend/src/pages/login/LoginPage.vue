<template>
  <q-page class="flex flex-center">
    <div class="login-card">
      <div class="login-card-content">
        <div class="header">
          <div class="logo">
            <div>
              <img src="~assets/logo.png" />
            </div>
          </div>
          <h2>Open<span class="highlight">POS</span></h2>
        </div>
        <div class="form">
          <q-toggle
            v-model="sync"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
            :label="sync ? $t('sync_account') : $t('local_account')"
          />
          <div class="form-field username">
            <div class="icon">
              <q-icon name="mdi-account"></q-icon>
            </div>
            <input
              type="text"
              :placeholder="$t('login_email')"
              v-model="email"
            />
          </div>
          <div class="form-field password">
            <div class="icon">
              <q-icon name="mdi-lock"></q-icon>
            </div>
            <input
              type="password"
              :placeholder="$t('login_password')"
              v-model="password"
              v-on:keyup.enter="login"
            />
          </div>

          <button type="submit" @click="login">{{ $t('login_submit') }}</button>
          <div>
            {{ $t('not_registered') }}
            <a
              href="javascript:void(0)"
              @click="$router.push({ name: 'create_user' })"
              >{{ $t('register_here') }}</a
            >
          </div>
        </div>
      </div>
      <div class="login-card-footer">
        <a
          href="javascript:void(0)"
          @click="$router.push({ name: 'confirm_user' })"
          >{{ $t('forgot_password') }}</a
        >
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      sync: true,
      email: '',
      password: '',
    };
  },
  watch: {},
  methods: {
    login() {
      this.LOGIN({
        email: this.email,
        senha: this.password,
      });
    },
  },
  mounted() {
    if (!this.isLoggedIn) {
      let token = localStorage.getItem('token');
      if (token) {
        // this.SETTOKEN(token)
        // this.VALIDATE_TOKEN()
      }
    }
  },
};
</script>

<style lang="scss" scoped>
a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  outline: none;
  transition: all 0.2s;
}

a:hover,
a:focus {
  color: #a7674e;
  transition: all 0.2s;
}

html {
  height: 100%;
}

.login-card {
  padding: 32px 32px 0;
  box-sizing: border-box;
  text-align: center;
  width: 100%;
  display: flex;
  height: 100%;
  max-height: 740px;
  max-width: 350px;
  flex-direction: column;
}

.login-card-content {
  flex-grow: 2;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 70vw;
}

.login-card-footer {
  padding: 32px 0;
}

h2 .highlight {
  color: #944ea7;
}

h2 {
  font-size: 32px;
  margin: 0;
}

h3 {
  color: #fafafa;
  font-size: 14px;
  line-height: 18px;
  margin: 0;
  font-weight: bolder;
  //-webkit-text-stroke: 1px white;
}

.header {
  margin-bottom: 15px;
}

.logo {
  border-radius: 40px;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  margin: 0 auto 16px;
  background: rgba(255, 255, 255, 0.75);
  align-items: center;
  img {
    width: 80%;
    height: 80%;
  }
}

button {
  background: white;
  display: block;
  color: #674ea7;
  width: 100%;
  border: none;
  border-radius: 40px;
  padding: 12px 0;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 32px;
  outline: none;
}

.form-field {
  margin-bottom: 16px;
  width: 100%;
  position: relative;
}

.form-field .icon {
  position: absolute;
  background: white;
  color: #674ea7;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  height: 100%;
  width: 40px;
  height: 40px;
  justify-content: center;
  border-radius: 20px;
}

.form-field .icon:after {
  content: '';
  display: block;
  width: 0;
  height: 0;
  border: 12px solid transparent;
  border-left: 12px solid white;
  position: absolute;
  top: 8px;
  right: -20px;
}

.form-field input {
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  width: 100%;
  border-radius: 16px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  outline: none;
  transition: all 0.2s;
}

.form-field input::placeholder {
  color: white;
}

.form-field input:hover,
.form-field input:focus {
  background: white;
  color: #674ea7;
  transition: all 0.2s;
}

.form-field input:hover::placeholder {
  color: #674ea7;
}
</style>
