<template>
    <div class="sidebar">
      <div class="sidebar-wrapper">
        <div class="sidebar-logo" @click.stop="$router.push('/'+$i18n.locale+'/gids')">
          <img src="@/assets/icons/logo3.svg" alt="">
          <div class="sidebar-logo_text">
            <span>O‘zbekiston Respublikasi Madaniyat va turizm vazirligi </span>
            <p>Gidlar reyestri tizimi</p>
          </div>
          <div class="hr"></div>
        </div>
        <div class="sidebar-route">
          <div v-for="el,index in sideMenu" :key="index">
            <div v-if="!el.subMenu">
              <router-link @click.native="accordion=false" class="sideroute-link" :event="el.disabled ? '' : 'click'" :to="'/'+$i18n.locale+'/'+el?.url"> <span><img :src="el?.icons" alt=""></span> {{ el?.name?.[$i18n.locale] }}</router-link>
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
        <div class="side_user_name" @click.stop="modalChange">
          <img class="side_avatar" src="@/assets/image/avatar.png" alt="">
          <p>{{ $store?.user?.sur_name }} {{ $store?.user?.first_name }}</p>
        </div>
      </div>
      <Modal @modalShow="modalChange" v-if="dropDown"/>
    </div>
</template>
<script>
import Modal from "@/components/popup/profile.vue";
export default {
  data(){
    return{
      dropDown: false,
      accordion: false,
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
      ]
    }
  },
  components: {
    Modal,
  },
  methods:{
    modalChange(){
      this.dropDown = !this.dropDown
    },
    logout(){
      // localStorage.removeItem('tokens');
      // this.$router.go()
      console.log('logout');
    },
  }
}
</script>