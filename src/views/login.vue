<template>
    <div class="login2">
        <div class="login2-main">
            <div class="login2-block">
                <div class="login2-block__lt">
                    <img src="@/assets/icons/logo3.svg" alt="">
                    <div class="login2-block__title">
                        <span>O‘zbekiston Respublikasi Madaniyat va turizm vazirligi</span>
                        <b>Gidlar reyestri tizimi</b>
                    </div>
                </div>
                <div v-if="open" class="login2-block__form">
                    <p><Icons icon="clock" size="custom" width="24" height="24"/> Tizimga kirish uchun One-ID tizimi orqali autentifikatsiyadan o‘tish lozim</p>
                </div>
                <div class="login2-block__form">
                    <p v-if="!open">Tizimga kirish uchun One-ID tizimi orqali autentifikatsiyadan o‘tish lozim</p>
                    <button @click="login">
                        <Icons icon="oneId" size="custom" width="132" height="40"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            open: true,
        }
    },
    components:{
    },
    methods:{
        changeLang(){
            this.open = !this.open
        },
        async login(){
        this.$router.push({name:"gids"})
          //  await window.open('https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=gidlar_reestri&redirect_uri=http://testadmin.gidlar.uz/uz%2Flogin&scope=gidlar_reestri&state=IDPW',"_self")
        },
        
    },
    mounted(){
        if(localStorage.getItem('status')=='new' || localStorage.getItem('status')=='checking'){
            this.open = true
        }else{
            this.open = false
        }
    }
}

</script>