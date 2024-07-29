<template>
    <div class="pagination">
        <div class="paginate_page">
            <button  :disabled="page<2" @click="pagePaginate(--page)" class="prev"><span></span></button>
            <button v-if="page==1 && len>2 && notObj" :class="{active_page: page==1}" @click="pagePaginate(1)" class="page_number">1</button>
            <button v-if="page>1 && len>2" :class="{active_page: page==1}" @click="pagePaginate(1)" class="page_number">1</button>
            <button :class="{active_page: page==2}" @click="pagePaginate(2)" v-if="page>2 && page<5 && len>3 || len <8 && page>4" class="page_number">2</button>
            <button v-if="page>4&&len>7" class="page_number">...</button>
            <button :class="{active_page: page==len-4}" @click="pagePaginate(len-4)" v-if="page >=len-2 && len>6" class="page_number">{{len-4}}</button>
            <button :class="{active_page: page==len-3}" @click="pagePaginate(len-3)" v-if="page >=len-1 && len>5" class="page_number">{{len-3}}</button>
            <button :class="{}" @click="pagePaginate(page-1)" v-if="page>3 && len != page" class="page_number">{{page-1}}</button>
            <button v-for="i in pages.slice((+page)-1,(+page)+1)" :class="{active_page: i==page}" :key="i" @click="pagePaginate(i)" class="page_number">{{i}}</button>
            <button :class="{active_page: page==3}" @click="pagePaginate(3)" v-if="page<2 && len>4" class="page_number">3</button>
            <button :class="{active_page: page==4}" @click="pagePaginate(4)" v-if="page<3 && len>5" class="page_number">4</button>
            <button :class="{active_page: page==5}" @click="pagePaginate(5)" v-if="page<4 && len >6" class="page_number">5</button>
            <button :class="{active_page: page==len-2}" @click="pagePaginate(len-2)" v-if="page >=len && len>4" class="page_number">{{len-2}}</button>
            <button :class="{active_page: page==len-1}" @click="pagePaginate(len-1)" v-if="page >=len-3 && len>1 || len <8 && len>1" class="page_number">{{len-1}}</button>
            <button v-else  v-show="len>1" class="page_number">...</button>
            <button :class="{active_page: page==len}" @click="pagePaginate(len)" class="page_number">{{len}}</button>
            <button  :disabled="page>=len" @click="pagePaginate(++page)" class="next"><span></span></button>
        </div>
        <div class="paginate_with_num">
            <input v-model="to_page" type="number" placeholder="__">
            <button :disabled="!to_page" @click="toPage" class="next"><span></span></button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            to_page: null,
            page: 1,
            active_page: 1,
            pages:[],
        }
    },
    computed:{
        len(){
           return Math.ceil(this.users.length/this.limit)
        }
    },
    props:{
        users:{
            type: Array,
            default() {
                return [];
            },
        },
        notObj:{
            type: Boolean,
            default() {
                return false;
            },
        },
        limit:{
            type: Number,
            default() {
                return 10;
            },
        }
    },
    watch:{
        to_page(){
            if(this.to_page>this.len){
                this.to_page = this.len
            }
            if(this.to_page<0){
                this.to_page = 1
            }
        },
        users:{
            handler(old,newval){
                this.pagePaginate(this.page)
            }
        },
        page(){
            this.to_page = this.page
        }
    },
    methods:{
        toPage(){
            this.page = this.to_page
            this.pagePaginate(this.page)
        },
        pagePaginate(e){
            if((Math.ceil(this.users.length/this.limit))>=Number(e)){
                this.page = e
            }else{
                this.page = parseInt(this.users.length/this.limit)
            }
                this.$router.push({
                 query: {
                ...this.$route.query,
                page: e,
            },
            });
            let pageUser = this.users?.slice((this.page-1)*this.limit,this.page*this.limit)
            this.$emit('pagePaginate',pageUser)
        },
    },
    mounted(){
        this.pagePaginate(this.$route.query.page||1)
        for(let i=1;i<=this.len-2;i++){
            this.pages.push(i)
        }
    }
}
</script>
