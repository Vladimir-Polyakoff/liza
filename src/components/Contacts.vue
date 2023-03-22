<template>
  <div class="about">
    <div class="container">
      <div class="content">
        <div class="title">Конакты</div>
        <ul class="social-media">
          <li
          v-for="item in socilaMediaList"
          :key="item.id"
          >
            <a target="_blank" :href="item.href"><i :class="item.icon" aria-hidden="true"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheContacts',
  data: () => ({
    socilaMediaList: [
      {
        id: '1',
        icon: 'fa fa-instagram',
        href: 'https://vk.com/thechernyavskaya'
      },
      {
        id: '2',
        icon: 'fa fa-instagram',
        href: 'https://vk.com/thechernyavskaya'
      },
      {
        id: '3',
        icon: 'fa fa-telegram',
        href: 'https://vk.com/thechernyavskaya'
      },
      {
        id: '4',
        icon: 'fa fa-whatsapp',
        href: 'https://vk.com/thechernyavskaya'
      }
    ]
  })
}
</script>

<style scoped lang="scss">
  .about {
    background:rgba(234, 207, 154, 0.241) ;
    /* background-size: cover;
    background-repeat:repeat; */
    width: 100%;
  }
  .container {
    max-width: 1240px;
    background: rgba(205, 202, 202, 0.381);
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
    }
    .social-media {
      display: flex;
    }
    .social-media li {
      list-style: none;
    }
    .social-media li a {
      display: inline-block;
      width: 40px;
      height: 40px;
      background: rgba(0, 0, 0, 0.05);
      margin: 5px;
      display: flex; /*  для самих иконок в рамках*/
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: var(--black);
      font-size: 1.2em;
    }
    .social-media li a:hover {
      background: var(--black2);
      color: #fff;
    }
  }
</style>
