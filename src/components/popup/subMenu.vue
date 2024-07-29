<template>
  <div class="modal" @click="modalShow">
    <div class="modal-main" :class="'left_transition_'+transition" @click.stop>
      <div class="modal-body">
        <div class="sideMenu">
          <div class="sidebar-wrapper">
            <div class="sidebar-route">
              <div v-for="el,index in sideMenu" :key="index">
                <div v-if="!el.subMenu">
                  <router-link @click.native="clickClose" class="sideroute-link" :event="el.disabled ? '' : 'click'" :to="'/'+$i18n.locale+'/'+el?.url"> <span><img :src="el?.icons" alt=""></span> {{ el?.name?.[$i18n.locale] }}</router-link>
                </div>
                <div v-else class="accordion-routes">
                  <div :class="{accordion:accordion}" class="item">
                    <button @click="accordion=!accordion"><span><img :src="el?.icons" alt=""></span> {{ el?.name?.[$i18n.locale] }}</button>
                    <div class="subMenu">
                      <button :class="{'router-link-active':(item.query==$route.query.catalog&&item.url==$route?.name)}" :disabled="item.disabled" @click="$router.push({path:('/'+$i18n.locale+'/'+item?.url),query:{catalog:item.query}})" v-for="item,idx in el.subMenu" :key="idx">{{item?.name?.[$i18n.locale]}}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="side_user">
            <div class="side_user_name" @click.stop="openDrop">
                <img class="side_avatar" src="@/assets/image/avatar.png" alt="">
                <p>{{ $store?.user?.sur_name }} {{ $store?.user?.first_name }}</p>
                <div class="profile-logout" v-if="dropDown">
                  <div class="dropdown-input-list" :class="dropDown ? 'open':'closed'">
                    <h6 @click.stop="chooseDep(item)" v-for="(item, idx) in option" :key="idx" class="dropdown-fixed-item">
                      {{item.name}}
                    </h6>
                  </div>
              </div>
            </div>
          </div>
        </div>
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
      dropDown: false,
      accordion: false,
      dropDown: false,
      option: [
        // {
        //   idx: 1,
        //   name: "Мой профиль",
        //   path: "/profile"
        // },
        {
          idx: 2,
          name: "Bыход",
          path: "/login"
        }
      ],
      sideMenu:[
        {
          name: {ru:"Applications",uz:"Arizalar"},
          url: "applications",
          disabled: false,
          icons: require('@/assets/icons/side_appl.svg')
        },
        {
          name: {ru:"Гид",uz:"Gidlar"},
          url: "gids",
          disabled: false,
          icons: require('@/assets/icons/side_gid.svg')
        },
        // {
        //   name: {ru:"Информация",uz:"Ma’lumotnoma"},
        //   disabled: true,
        //   icons: require('@/assets/icons/side_info.svg'),
        //   subMenu: [
        //     {
        //       name: {ru:"Tillar",uz:"Tillar"},
        //       url: "catalog-langs",
        //       disabled: false,
        //     },
        //     {
        //       name: {ru:"Toifalar",uz:"Toifalar"},
        //       url: "catalog-category",
        //       disabled: false,
        //     },
        //     {
        //       name: {ru:"Tumanlar",uz:"Tumanlar"},
        //       url: "catalog-district",
        //       disabled: false,
        //     },
        //     {
        //       name: {ru:"Viloyatlar",uz:"Viloyatlar"},
        //       url: "catalog-regions",
        //       disabled: false,
        //     },
        //   ]
        // },
        // {
        //   name: {ru:"Статистика",uz:"Statistika"},
        //   url: "statistics",
        //   disabled: false,
        //   icons: require('@/assets/icons/side_stat.svg')
        // },
        {
          name: {ru:"Настройки",uz:"Sozlamalar"},
          url: "settings",
          disabled: false,
          icons: require('@/assets/icons/side_settings.svg')
        },
      ],
      transition:false
    }
  },
  methods: {
    clickClose(){
      this.accordion = false;
      this.modalShow()
    },
    openDrop(){
        this.dropDown=!this.dropDown
    },
    async chooseDep(item){
      if(item.idx == 2){
        await this.$axios.post('/logout?user_id='+(localStorage.getItem('user_id')));
        localStorage.removeItem('user_id');
        this.$store.user = null;
        this.$router.push('/'+this.$i18n.locale +'/login')
      }else{
        this.dropDown=!this.dropDown
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
  max-width: 336px;
  margin-left: auto;
  width: 100%;
  height: 100%;
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
/* .side_user_name {
  position: relative;
  width: max-content;
  display: flex;
  gap: 15px;
  cursor: pointer;
}
.side_user_name span,p{
    height: 24px;
    display: flex;
    align-items: center;
}
.profile-logout{
  position: absolute;
  top: -60px;
  left: 40px;
  background: white;
  color: #919EAD;
  padding: 7px;
  border-radius: 10px 10px 10px 0;
  transition: 1s;
  width: 110px;
  font-size: 18px;
}
.profile-logout .dropdown-fixed-item{
  padding: 2px;
}
.profile-logout .dropdown-fixed-item:hover{
    color: black;
}
         */
       
</style>