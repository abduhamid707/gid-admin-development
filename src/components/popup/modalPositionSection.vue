<template>
  <div class="modal" @click="modalShow">
    <div class="modal-main" @click.stop>
          <div class="modal-header">
              <i @click="modalShow" class="icon-close">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.7549 22.2459L22.2449 13.7559" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22.2449 22.2459L13.7549 13.7559" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.5 33H22.5C30 33 33 30 33 22.5V13.5C33 6 30 3 22.5 3H13.5C6 3 3 6 3 13.5V22.5C3 30 6 33 13.5 33Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </i>
          </div>
          <div class="modal-body">
            <div class="modal_header_title">
              <h2>Сохраняйте наиболее часто используемые</h2>
              <div class="modal_toggle_body" v-for="(el,index) in $store.state.allSection?.menu?.menuDocument" :key="index">
                  <div class="position_header position_section">
                    <p>{{el.name?.language_ru}}</p>
                    <div class="">
                      <button @click="plusindex(index)"><img src="@/assets/icons/arrow.svg" alt=""></button>
                      <button @click="minusindex(index)"><img src="@/assets/icons/arrow.svg" alt=""></button>
                    </div>
                  </div>
              </div>
            </div>
            <SaveBtn @modalClose="modalShow" :payload="{documents:$store.state.allSection?.menu?.menuDocument}" api="allSection/positionMenu"/>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    props:{
        all_arr:{
          type: [Object,Array],
          default: () => null,
        },
    },
  components:{
  },
    methods:{
      modalShow(){
        this.$emit('modalShow',false)
      },
      plusindex(index){
        let fir = this.$store.state.allSection.menu.menuDocument.slice(0,index-1)
        let sec = this.$store.state.allSection.menu.menuDocument.slice(index+1,this.$store.state.allSection.menu.menuDocument.length)
        let prev = this.$store.state.allSection.menu.menuDocument[index-1]
        let now = this.$store.state.allSection.menu.menuDocument[index]
        let newArr = []
        fir.forEach((el)=>{newArr.push(el)})
        newArr.push(now)
        newArr.push(prev)
        sec.forEach((el)=>{newArr.push(el)})
        for(let i=0;i<newArr.length;i++){
          newArr[i].position = (i+1)
        }
        this.$store.state.allSection.menu.menuDocument = newArr;
      },
      minusindex(index){
        let fir = this.$store.state.allSection.menu.menuDocument.slice(0,index)
        let sec = this.$store.state.allSection.menu.menuDocument.slice(index+2,this.$store.state.allSection.menu.menuDocument.length)
        let now = this.$store.state.allSection.menu.menuDocument[index]
        let next = this.$store.state.allSection.menu.menuDocument[index+1]
        let newArr = []
        fir.forEach((el)=>{newArr.push(el)})
        newArr.push(next)
        newArr.push(now)
        sec.forEach((el)=>{newArr.push(el)})
        for(let i=0;i<newArr.length;i++){
          newArr[i].position = (i+1)
        }
        this.$store.state.allSection.menu.menuDocument = newArr
      }
    },
    async mounted(){
         await this.$store.dispatch("allSection/getMenu")
    }
}
</script>
<style scoped>
  .modal-main {
    max-width: 920px;
    width: 100%;
    height: 100%;
    max-height: 850px;
    border-radius: 12px;
    padding: 50px;
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
  }
  .toggle{
    display: flex;
    align-items: center ;
  }
</style>