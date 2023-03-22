<template>
  <div>
    <Header></Header>
    <About ref="About"></About>
    <Services ref="Services"></Services>
    <Questionnaire></Questionnaire>
    <Contacts ref="Contacts"></Contacts>
  </div>
</template>

<script>
import Header from '@/components/Header'
import About from '@/components/About'
import Services from '@/components/Services'
import Questionnaire from '@/components/Questionnaire'
import Contacts from '@/components/Contacts'

import { mapGetters } from 'vuex'

export default {
  name: 'TheMain',
  components: {
    Header,
    About,
    Services,
    Contacts,
    Questionnaire
  },
  computed: {
    ...mapGetters(['getRefName'])
    // getRefName () {
    //   return this.$store.state.getRefName
    // }
  },
  watch: {
    getRefName (value) {
      // this.scrollTo(this.getRefName)
      this.scrollTo(value)
    }
  },
  methods: {
    scrollTo (name) {
      this.$refs[name].$el.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }
}
</script>
