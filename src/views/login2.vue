<template>
    <div class="login">
        <div class="login-main">
            <div class="login-block">
                <div class="login-block__title">
                    <img src="@/assets/icons/logoLogin.svg" alt="">
                </div>
                <div class="login-block__form">
                    <div class="form-group">
                        <label for="">{{$t('loginInp')}}</label>
                        <input :placeholder="$t('placeholder_login')" v-model.trim="login" type="text">
                        <span ><img src="@/assets/icons/human.svg" alt=""></span>   
                    </div>
                    <div class="form-group">
                        <label for="">{{$t('password')}}</label>
                        <input @keydown.enter="loginUser" v-model.trim="password" :placeholder="$t('placeholder_password')" :type="password_show?'password':'text'">
                        <span @click="password_show = !password_show"><img v-if="password_show" src="@/assets/icons/eye.svg" alt=""><img v-else src="@/assets/icons/hideEyeLogin.svg" alt=""></span>
                    </div>
                    <div class="form-btns saveMe">
                        <label for="saveMe">
                            <span :class="saveMe?'checked':'notCheck'"><span v-if="saveMe">&#10003;</span></span>
                            <input v-show="false" v-model="saveMe" id="saveMe" type="checkbox">
                            <span>Запомнить меня</span>
                        </label>

                        <div @click="loginUser" class="btn btn-primary">
                            {{$t('login')}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            password_show: true,
            login: null,
            password: null,
            open: false,
            saveMe: false,
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
          this.activeLang = el
          this.$i18n.locale = el.val
          let newRoute = window.location.pathname.split('/');
          newRoute[1] = el.val
          window.location.href = (window.origin+newRoute.join('/'))
      },
        async loginUser() {
            await this.$store.dispatch("auth/login", {login: this.login, password:this.password}).then((res)=>{
                if(res && res.data){
                    this.saveMe ? localStorage.setItem("login",JSON.stringify({login:this.login,password:this.password})) : localStorage.removeItem("login")
                    this.$router.push({name:"gids"})
                }else{
                    this.$message.error(this.$t('toastErr'))  
                    
                }
            })
        },
        changeLang(){
            this.open = !this.open
        },
        
    },
    mounted(){
        this.langs.forEach((el)=>{el.val == this.$i18n.locale ? this.activeLang = el : ''})
        const e = localStorage.getItem('login')
        const a = JSON.parse(e)
        if(a){
            this.saveMe = true
            this.login = a.login
            this.password = a.password
        }
    }
}

</script>