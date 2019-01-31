<template lang="pug">
  .header
    h1 Панель администрирования
    a(@click="logoutLogout") Вернуться на сайт
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      logout: 'user/logout'
    }),
    logoutLogout() {
      // this.logout(user);
      window.location.href = '/course3/dist';
    }
  }
}
</script>


<style lang="scss">

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: $coral;
    color: #FFF;
    min-height: 80px;
  }

</style>

