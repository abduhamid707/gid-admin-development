<template>
    <div class="wrapper" @click="openFiles(null)">
        <Header :header_title="title" :main_crumb="[{title:title,path:'/'}]" />
        <div class="catalog-list">
           <p class="catalog-title">{{title2}}</p>
           <div>
               <div class="tr">
                    <div class="td">1</div>
                    <div class="td">Lorem, ipsum.</div>
                    <div class="td">
                        <button>
                            <Icons size="middle" icon="pen" color="black"/>
                        </button>
                        <button>
                            <Icons size="middle" icon="eye" color="black"/>
                        </button>
                        <button>
                            <Icons size="middle" icon="file" color="black"/>
                        </button>
                    </div>
               </div>
               <div class="tr">
                    <div class="td">2</div>
                    <div class="td">Lorem, ipsum.</div>
                    <div class="td">
                        <button>
                            <Icons size="middle" icon="pen" color="black"/>
                        </button>
                        <button>
                            <Icons size="middle" icon="eye" color="black"/>
                        </button>
                        <button>
                            <Icons size="middle" icon="file" color="black"/>
                        </button>
                    </div>
               </div>
               <div class="tr">
                    <div class="td">3</div>
                    <div class="td">Lorem, ipsum.</div>
                    <div class="td">
                        <button>
                            <Icons size="middle" icon="pen" color="black"/>
                        </button>
                        <button>
                            <Icons size="middle" icon="hideEye" color="black"/>
                        </button>
                        <button>
                            <Icons size="middle" icon="file" color="black"/>
                        </button>
                    </div>
               </div>
               <div class="tr">
                    <div class="td">4</div>
                    <div class="td">Lorem, ipsum.</div>
                    <div class="td">
                        <button>
                            <Icons size="middle" icon="pen" color="black"/>
                        </button>
                        <button>
                            <Icons size="middle" icon="hideEye" color="black"/>
                        </button>
                        <button>
                            <Icons size="middle" icon="file" color="black"/>
                        </button>
                    </div>
               </div>
               <div class="tr">
                    <div class="td">5</div>
                    <div class="td">Lorem, ipsum.</div>
                    <div class="td">
                        <button>
                            <Icons size="middle" icon="pen" color="black"/>
                        </button>
                        <button>
                            <Icons size="middle" icon="hideEye" color="black"/>
                        </button>
                        <button>
                            <Icons size="middle" icon="file" color="black"/>
                        </button>
                    </div>
               </div>
           </div>
        </div>
        <!-- <Pagination :staticCurrentPage="page" @goingToPage="goingToPage" @next="goingToPage" @prev="goingToPage" v-if="loading" :pages="pages"/> -->
    </div>
</template>
<script>
import Pagination from '@/components/content/paginatorButtons.vue'
export default {
    data(){
        return{
            title:'Ma’lumotnoma',
            title2: 'Tumanlar',
            // limit:8,
            // offset:0,
            // page: 1,
            // pages:0,
            loading:false,
            table:{},
        }
    },
    components: {
        Pagination,
    },
    methods:{
        async fetchData() {
           
        },
    },
    async mounted(){
        // this.page = this.$route.query.page || 1
        // this.offset = (this.page-1) * this.limit
        // await this.getmenu()
    },
}
</script>