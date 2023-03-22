<template>
  <a @click="scrollToTop" class="up" :style="pageScrolled ? 'display: block' : ''">
    <svg viewBox="0 0 9 11" class="icon">
      <path fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.508 10.357a.625.625 0 01-.625-.625v-7.24L1.201 5.176a.626.626 0 11-.885-.885L4.066.54a.625.625 0 01.885 0l3.75 3.75a.626.626 0 01-.886.885L5.133 2.492v7.24a.625.625 0 01-.625.625z">
      </path>
    </svg>
  </a>
</template>

<script>

export default {
  name: 'ArrowTop',
  data: () => ({
    pageScrolled: false
  }),
  beforeMount () {
    this.handleScroll()

    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    handleScroll () {
      this.pageScrolled = window.scrollY > 1500
    }
  }
}

</script>

<style scoped>

a.up {
    display: none;
    position: fixed;
    z-index: 50;
    background: #000000;
    /* border-radius: 50%; */
    border-radius: 4px;
    width: 40px;
    height: 40px;
    bottom: 150px;
    right: 50px;
    cursor: pointer;
    opacity: .5;
}
a.up:hover{
  opacity: 1;
}
a.up svg {
    fill: rgb(255, 255, 255);
    width: 19px;
    height: 21px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
}

</style>
