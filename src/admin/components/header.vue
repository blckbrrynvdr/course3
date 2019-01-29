<template lang="pug">
  .header
    h1 Панель администрирования
    a(@click="logout") Вернуться на сайт
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      logout: 'user/logout'
    })
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

