<template>
    <div class="header">
        <div class="header-wrapper">
            <div class="header_main">
                <p class="header_title">{{header_title}}  </p>
            </div>
            <div class="header_breadcrumb">
              <div class="header_breadcrumbs" v-for="el,index in main_crumb" :key="index" @click="(main_crumb.length -1)!=index ? $router.push(el?.path): ''">
                <small>{{ el?.title }}</small> <span v-if="(main_crumb.length -1)!=index"></span>
              </div>
            </div>
        </div>
        <div class="header-wrapper" v-if="!!api">
          <div class="download-excel">
            <button>
              <Icons color="white" icon="xls" size="custom" width="34" height="34"/>
              Ro‘yxatni yuklab olish 
              <Icons color="white" icon="download" size="middle"/>
            </button>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        header_title:{
          type: [String,Number,Object],
          default: () => null,
        },
        main_crumb: {
          type: Array,
          default: () => [],
        },
        addtitle: {
          type: String,
          default: () => '',
        },
        api: {
          type: String,
          default: () => '',
        },
    },
    data(){
      return{
        open: false,
        openModal: false,
        activeLang: {name: "O'z",val:'uz'},
        langs:[
            {name: "O'z",val:'uz'},
            {name: "Ру",val:'ru'},
        ]
      }
    },
    components:{
    },
    methods:{
      switchLang(el){
        if(this.activeLang != el){
          this.activeLang = el
          this.$i18n.locale = el.val
          let newRoute = window.location.pathname.split('/');
          newRoute[1] = el.val
          this.$router.push(newRoute.join('/')+window.location.search)
            .then(() => { this.$router.go() })
        }
      },
      changeLang(){
          this.open = !this.open
      },
    },
    mounted(){
      this.langs.forEach((el)=>{el.val == this.$i18n.locale ? this.activeLang = el : ''})
    }
}
</script>