<template>
  <div class="modal" @click="modalShow">
    <div class="modal-main" @click.stop>
        <div class="modal-header">
          <i @click="modalShow" class="icon-close" style="cursor: pointer;">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.7549 22.2459L22.2449 13.7559" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22.2449 22.2459L13.7549 13.7559" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.5 33H22.5C30 33 33 30 33 22.5V13.5C33 6 30 3 22.5 3H13.5C6 3 3 6 3 13.5V22.5C3 30 6 33 13.5 33Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </i>
        </div>
        <div class="modal-body">
          <div class="personal_info">
            <p class="modal-title">Amaliyot imtihonini topshirish manzili va vaqtini kiriting</p>
            <div class="row-12">
              <div class="fcol">
                <input v-model="payload.address" class="personal_contact" placeholder="manzilni kiriting" />
              </div>
            </div>
            <div class="row-6">
              <div class="fcol">
                <el-date-picker
                    v-model="date"
                    type="date"
                    @change="setDate"
                    format="dd.MM.yyyy"
                    placeholder="imtihon sanasi">
                </el-date-picker>
              </div>
              <div class="fcol">
                <el-time-picker
                  v-model="time"
                  format="hh:mm"
                  @change="setDate"
                  value-format="hh:mm"
                  placeholder="imtihon vaqti">
                </el-time-picker>
              </div>
              <div class="fcol">
                <input @change="changeDate" v-model="payload.lat" class="personal_contact" placeholder="uzunlik" />
              </div>
              <div class="fcol">
                <input @change="changeDate" v-model="payload.long" class="personal_contact" placeholder="kenglik" />
              </div>
            </div>
            <div class="row-12">
              <div class="map">
                <l-map
                  class="mapCanvas"
                  :zoom="zoom"
                  :center="center"
                  @click="clickmap($event)"
                >
                  <l-tile-layer
                      :url="url"
                    />
                    <l-marker
                      v-if="payload.lat"
                      :lat-lng="center">

                      <l-icon
                        :icon-size="dynamicSize"
                        :icon-url="require('@/assets/image/marker-icon.png')"
                      />
                    </l-marker>
                </l-map>
              </div>
              <div class="level-btns">
                  <div class="level-confirm-btns">
                    <button @click="submit" class="level-confirm-btn">
                      Manzil va vaqtni tasdiqlash
                    </button>
                  </div>              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LControl, LIcon } from "vue2-leaflet";
import 'leaflet/dist/leaflet.css';
export default {
  data() {
    return {
      date: null,
      time: null,
      payload: {},
      zoom: 13,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      center: latLng(41.33708393654401, 69.28277108565088),
      iconSize: [52, 74],
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControl,
    LIcon,
  },

computed: {
  dynamicSize() {
    return [this.iconSize[0], this.iconSize[1]];
  },
},
  methods: {
    setDate(){
      if(!this.time){
        this.time = '00:00'
      }
      if(!this.date){
        this.date = new Date()
      }
      let newdate = this.date.getFullYear()+'-'+('0'+(this.date.getMonth()+1)).slice(-2)+'-'+('0'+this.date.getDate()).slice(-2)
      this.payload.exam_date = newdate+' '+this.time+':00+05'
    },
    submit(){
      this.payload.method = "PRACTICEDATE"
      this.$axios.put("applications/"+this.$route.params.id,this.payload).then(res=>{
        if(res)  {
          this.$router.go()
        }
      })
    },
    clickmap(event){
      this.payload.long = event.latlng.lng
      this.payload.lat = event.latlng.lat
      this.center = latLng(event.latlng.lat,event.latlng.lng)
    },
    changeDate(){
      this.center = latLng(this.payload.lat,this.payload.long)
    },
    modalShow() {
      this.$emit("modalShow", false);
    },
  },
  mounted(){
  }
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
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
}
.icon-close{
  display: flex;
}
.modal-main {
  max-width: 920px;
  width: 100%;
  height: 100%;
  max-height: 850px;
  border-radius: 12px;
  background: white;
  padding: 24px;
  position: relative;
}
.modal-title {
  font-weight: 400;
  font-size: 26px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.04em;
  margin-bottom: 36px;
}
.modal-header i {
  position: absolute;
  font-size: 16px;
  top: 0;
  display: flex;
  right: 0;
  color: #000000;
  cursor: pointer;
}

.modal-header {
  display: flex;
  padding: 0;
  justify-content: space-between;
  position: relative;
  align-items: center;
  border-bottom: 0;
  padding: 0 !important;
  z-index: 888;
  border-bottom: 0 !important;
  /* margin-bottom: 32px; */
}
.modal-body {
  width: 100%;
  height: 100%;
  padding: 0;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.modal-body .row-12{
  position: relative;
}
.modal .level-confirm-btns{
  margin-top: 24px;
}
</style>