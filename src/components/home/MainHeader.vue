<template>
  <div class="main-header">
    <div class="main-logo">
      <img src="@/assets/icons/logo3.svg" alt="">
      <div class="main-logotext">
        <span>O‘zbekiston Respublikasi Madaniyat va turizm vazirligi </span>
        <p>Gidlar reyestri tizimi</p>
      </div>
    </div>
    <div class="main-burger">
      <!-- <img src="@/assets/icons/logo3.svg" alt=""> -->
      <button v-if="loading" @click="modalChange"><Icons :color="color" icon="menu" size="custom" width="48" height="48"/></button>
    </div>
    <Modal @modalShow="modalChange" v-if="subopen"/>
  </div>
</template>
<script>
import Modal from "@/components/popup/subMenu.vue";
import icons from '../content/icons.vue'
export default {
  components: { icons, Modal },
  data(){
    return{
      open: false,
      loading: false,
      subopen: false,
      color: '#001E49',
    }
  },
  methods:{
    modalChange(){
      this.subopen = !this.subopen
    },
    changeLang(){
      this.open = !this.open
    },
  },
  mounted(){
    this.loading = false
    if (localStorage.getItem('mode')) {
      this.name = localStorage.getItem('mode');
    }
    if(localStorage.getItem('mode') == 'true'){
      this.color = 'white'
      this.loading = true
    }else{
      this.color = '#001E49'
      this.loading = true
    }
    this.loading = true
  }
}
</script>