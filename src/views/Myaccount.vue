<template>
  <div>
   <Header/>
   <Account/>
   <Footer/> 
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Account from '@/components/Account.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Myaccount',
  components: {
    Account,
    Header,
    Footer
  }
}
</script>

