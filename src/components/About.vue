<template>
  <div class="about">
    <div class="container">
      <div class="content">
        <div class="title">Обо мне</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ullam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ullam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ullam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ullam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ullam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ullam!</p>
        <div class="comments-container">
          <div class="comments">Lorem ipsum dolor sit amet.</div>
          <div class="comments">Lorem ipsum dolor sit amet.</div>
          <div class="comments">Lorem ipsum dolor sit amet.</div>
          <div class="comments">Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheAbout'
}
</script>

<style scoped lang="scss">
  .about {
    background:rgba(163, 162, 160, 0.241) ;
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
    p{
      max-width: 400px;
    }
    .comments-container {
      display: flex;
      flex: 1 0;
      width: 50%;
      gap:20px;
      font-size: 20px;
      border-block-start: 2px solid #fff;
      border-block-end: 2px solid #fff;
      padding: 20px 0;
    }
  }
</style>
