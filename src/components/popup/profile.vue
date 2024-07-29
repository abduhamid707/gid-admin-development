<template>
  <div class="modal" @click="modalShow">
    <div class="modal-main" :class="'left_transition_'+transition" @click.stop>
      <div class="modal-body">
          <div>
            <div class="profilebar-logo" @click.stop="$router.push('/content')">
              <img src="@/assets/icons/logo3.svg" alt="">
              <div class="profilebar-logo_text">
                <span>O‘zbekiston Respublikasi Madaniyat va turizm vazirligi </span>
                <p>Gidlar reyestri tizimi</p>
              </div>
            </div>
            <div class="profile-user">
              <img src="@/assets/image/avatar.png" alt="">
              <p>{{ $store?.user?.sur_name }} {{ $store?.user?.first_name }}</p>
            </div>
          </div>
          <div class="profile_btn">
            <!-- <button class="profile_logout" @click="chooseDep(2)">Mening profilim</button> -->
            <button class="profile_myprofile" @click="chooseDep(2)">Dasturdan chiqish <Icons icon="logOut" size="middle"/></button>
          </div>
          <!-- <p>{{all_arr.arrays[0]}}</p> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      transition:false
    }
  },
  methods: {
    async chooseDep(item){
      if(item == 2){
        
      await this.$axios.post('/logout?user_id='+(localStorage.getItem('user_id')));
      localStorage.removeItem('user_id');
      localStorage.removeItem('code');
      // this.user = null;
      this.$router.push('/'+this.$i18n.locale+'/login');
      }else{
        this.modalShow()
      }
    },
    dateFilter(e){
        if(!!e){
            let date = new Date(e)
            let newdate = ('0'+date.getDate()).slice(-2)+'-'+('0'+(date.getMonth()+1)).slice(-2)+'-'+date.getFullYear()
            let newtime = ('0'+date.getHours()).slice(-2)+':'+('0'+date.getMinutes()).slice(-2)
            return  newdate+' '+newtime
        }else{
            return 'Деактив'
        }
    },
    roleFilter(e){
        if(e=='superAdmin'){
          return  'Администратор'
        }else{
            return 'Модератор'
        }
    },
    modalShow() {
      this.transition = true
      setTimeout(() => {
        this.transition = false
        this.$emit("modalShow", false);
      },300)
    },
  },
};
</script>
<style scoped>
.modal {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.26);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-main {
  background: #ffffff;
  max-width: 544px;
  margin-left: auto;
  width: 100%;
  height: 100%;
  border-radius: 12px 0 0 12px;
  transition: 0.3s;
  position: relative;
}

.modal-header i {
  position: absolute;
  font-size: 16px;
  top: 7px;
  right: 7px;
  padding: 5px;
  color: #000000;
  cursor: pointer;
}

.modal-header {
  display: flex;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0;
  padding: 0 !important;
  border-bottom: 0 !important;
  /* margin-bottom: 32px; */
}
.modal-body {
  width: 100%;
  height: 100%;
  padding: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.left_transition_true{
  animation: dash 0.3s linear forwards;
}
.left_transition_false{
  animation: dash2 0.3s linear forwards;
}
@keyframes dash {
  0%{
    margin-right: 0;
  }
  100% {
    margin-right: -37%;
  }
}
@keyframes dash2 {
  0%{
    margin-right: -37%;
  }
  100% {
    margin-right: 0;
  }
}
</style>