<template>
  <nav>
    <div v-for="item in menuList" :key="item.id + item.title" @click="setRefName(item.ref)">{{ item.title }}</div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TheNavbar',
  data () {
    return {
      menuList: [
        {
          id: 1,
          title: 'Услуги',
          ref: 'Services'
        },
        {
          id: 2,
          title: 'Обо мне',
          ref: 'About'
        },
        {
          id: 3,
          title: 'Отзывы',
          ref: ''
        },
        {
          id: 4,
          title: 'Контакты',
          ref: 'Contacts'
        }
      ]
    }
  },
  methods: {
    ...mapActions(['setRefName'])
  }
}
</script>

<style scoped lang="scss">
  nav {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    margin-right: 40px;
    div {
      padding: 10px;
      margin: 30px 12px;
      font-size: 1.5em;
      color: white;
      letter-spacing: 1px;
    }
  }
</style>
