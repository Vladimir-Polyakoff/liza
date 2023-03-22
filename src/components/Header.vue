<template>
  <div class="header">
    <div class="container">
      <div class="content">
        <div class="title">Elizaveta Chernyavskaya</div>
        <div class="sub-title">Персональный стилист</div>
        <div class="actions">
          <div class="button"
            v-for="item in buttonList"
            :key="item.id"
            @click="$router.push({name: item.ref})">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      buttonList: [
        {
          id: 1,
          title: 'Online',
          ref: 'Online'
        },
        {
          id: 2,
          title: 'Offline',
          ref: 'Offline'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .header {
    /* background-image: url('/public/img/11.webp'); */
    background:rgba(19, 18, 17, 0.241) ;
    /* background-size: cover;
    background-repeat:repeat; */
    width: 100%;
  }
  .container {
    max-width: 1240px;
    background: rgba(123, 121, 121, 0.152);
    height: 720px;
    margin:0 auto;
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: white;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
    letter-spacing: 1.4px;
  }
  .title {
    font-family: 'Ms Madi', cursive;
    font-size: 98px;
    font-weight: 100;
    letter-spacing: 2px;
  }
  .sub-title {
    font-size: 2em;
  }
  .button{
    display: inline-block;
    color: #ffffff;
    font-size: 13px;
    font-family: 'Roboto',Arial,sans-serif;
    line-height: 1.55;
    font-weight: 400;
    border: 1px solid rgba(0, 0, 0, 0.225);
    border-radius: 2px;
    padding: 5px 25px;
    margin: 40px 10px 40px 0px;
  }
</style>
