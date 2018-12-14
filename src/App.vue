<template>
  <div id="app">
    <Header/>
    <Content>
      <router-view/>
    </Content>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Parts/Header'
import Footer from '@/components/Parts/Footer'
import Content from '@/components/Parts/Content'
export default {
  name: 'App',
  components: {
    Content,
    Header,
    Footer
  }
}
</script>
