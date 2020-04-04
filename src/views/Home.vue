<template>
  <div>
    <Header/>
    <h6 class="text-center">Hello Home</h6>
    <Footer/> 
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>



