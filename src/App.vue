<template>
  <div id="app" v-if="!loading">
    <component :is="layout">
    </component>
  </div>
</template>
<script>
import AdditionalLayout from './components/layouts/AdditionalLayout.vue'
import MainLayout from './components/layouts/MainLayout.vue'
  
export default {
  name: 'app',
  components: {
    AdditionalLayout, MainLayout
  },
  watch:{
    '$route.query.code': {
      handler: function(search) {
        if(this.$route.query.code){
          localStorage.setItem('code',this.crypt(this.$route.query.code))
        }
      },
      deep: true,
      immediate: true
    },
  },
  data(){
    return {
      key: 'mySecretSalt',
      crypt: null,
      decrypt: null,
      loading: true,
    }
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'additional') + '-layout'
    }
  },
  methods:{
    cryptFunc(){   
      const cipher = salt => {
        const textToChars = text => text.split('').map(c => c.charCodeAt(0));
        const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
        const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
        return text => text && text.split('')
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join('');
      }
      const decipher = salt => {
        const textToChars = text => text.split('').map(c => c.charCodeAt(0));
        const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
        return encoded => encoded.match(/.{1,2}/g)
        .map(hex => parseInt(hex, 16))
        .map(applySaltToChar)
        .map(charCode => String.fromCharCode(charCode))
        .join('');
      }
      this.crypt = cipher(this.key)
      this.decrypt = decipher(this.key)
    },
  },
  async mounted(){
    document.body.setAttribute("data-dark-mode", JSON.parse(localStorage.getItem('mode')) ? true : false);
    this.loading = true
    this.cryptFunc()
    if(this.$route.query.code){
      await localStorage.setItem('code',this.crypt(this.$route.query.code))
    }
    if(localStorage.getItem('user_id')){
      this.$store.user_id = (localStorage.getItem('user_id'))
    }else{
      this.$router.push({name: 'login'})
      this.$store.user_id = null
    }
    if(window.location.search.search('code=')>=0){
      let location = window.location.search.split('code=')[1]
      let locationCode = location.split('&')[0]

      return this.$axios({
            withCredentials: true,
            credentials: 'include',
            method: "POST",
            url: '/login?code='+(locationCode),
        }).then((res) => {
          if(res && res.data){
            localStorage.setItem('user_id',res?.data?.result?.user?.user_id)
            localStorage.setItem('code',this.crypt(locationCode))
            this.$store.user = res?.data?.result?.user
            if(res?.data?.result?.user?.role != 'user'){
              this.$router.push({name: 'applications'})
            }
            this.loading = false
          }else{
            localStorage.removeItem('user_id')
            this.loading = false
          }
        }).catch((err)=>{
          let status = err?.response?.data?.result?.app_status
          localStorage.setItem('status',err?.response?.data?.result?.app_status)
          if((status == null)||(status == 'cancelled')){
            localStorage.setItem('status','new')
            this.$axios.post("adminapplicants/apply")
          }
          this.loading = false
          return err
        })
    }
    // if(this.$store.user_id){
    //   await this.$axios.get('/me?user_id='+(this.$store.user_id)).then((res)=>{
    //     if(res && res.data){
    //       this.$store.user = res?.data?.result?.user
    //     }else{
    //       localStorage.removeItem('user_id')
    //     }
    //   }).catch((err)=>{
    //     this.loading = false
    //   })
    // }
    if(localStorage.getItem('code')){
      return this.$axios({
            withCredentials: true,
            credentials: 'include',
            method: "POST",
            url: '/login?code='+this.decrypt(localStorage.getItem('code')),
        }).then((res) => {
          if(res && res.data){
            localStorage.setItem('user_id',res?.data?.result?.user?.user_id)
            this.$store.user = res?.data?.result?.user
            this.loading = false
          }else{
            localStorage.removeItem('code')
            this.loading = false
          }
        }).catch((err)=>{
            this.$router.push('/'+this.$i18n.locale+'/login')
            this.loading = false
            return err
        })
    }
    this.loading = false
  }
}
</script>

<style lang="scss">
@import './src/assets/scss/styles.scss';

</style>
