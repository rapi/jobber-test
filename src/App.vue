<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Parts/Header'
import Footer from '@/components/Parts/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
