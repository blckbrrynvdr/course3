<template lang="pug">
  .tabs
    ul.tabs-items
        li.item( v-for="tab in tabs")
          router-link(
            :to="tab.href"
          ).link {{tab.title}}
</template>

<script>
export default {
  data() {
    return {
       tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Работы", href: "/works" },
        { title: "Блог", href: "/blog" }
      ]
    }
  }
}
</script>

<style lang="scss">
  
  .tabs {
    background: $gray-light;
    height: 60px;
  }
  .tabs-items {
    display: flex;
    height: 100%;
  }
  .item {
    border-right: 2px solid #fff;
    height: 100%;
    &--active {
      background-color: #fff;
      color: $coral;
    }
  }
  .link {
    display: block;
    width: 180px;
    display: block;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    height: 100%;
    display: flex;
  }
</style>

