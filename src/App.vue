<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <ArrowTop></ArrowTop>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ArrowTop from '@/components/ArrowTop'
export default {
  name: 'App',
  components: {
    Navbar,
    ArrowTop
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
</style>
