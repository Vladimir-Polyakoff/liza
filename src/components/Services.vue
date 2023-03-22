<template>
  <div class="services">
    <div class="container">
      <div class="content">
        <div class="title">Услуги</div>
        <div class="content-item"
        v-for="item in servicesList"
        :key="item.id"
        @click="$router.push({name: item.ref})"
        >
        {{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheServices',
  data () {
    return {
      servicesList: [
        {
          id: 1,
          title: 'Ревизия гардероба',
          ref: 'WardrobeRevision'
        },
        {
          id: 2,
          title: 'Шоппинг – сопровождение',
          ref: 'ShoppingAccompaniment'
        },
        {
          id: 3,
          title: 'Стилизация съемок',
          ref: 'ShootingStyling'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .services {
    background:rgba(59, 59, 58, 0.241) ;
    /* background-size: cover;
    background-repeat:repeat; */
    width: 100%;
  }
  .container {
    max-width: 1240px;
    background: rgba(102, 86, 86, 0.381);
    height: 720px;
    margin:0 auto;
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: rgb(6, 6, 6);
  }
  .content {
    margin-left: 70px;
    .title{
      font-size: 40px;
      font-weight: 600;
      margin-bottom: 40px;
    }
    .content-item {
      color: white;
      font-size: 1.2em;
      border-block-start: 1px solid rgba(255, 255, 255, 0.362);
      padding: 10px;
    }
    .content-item:last-child {
        border-block-end: 1px solid rgba(255, 255, 255, 0.362);
      }
  }
</style>
