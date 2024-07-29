<template>
    <div class="modal" @click="modalShow">
      <div class="modal-main" @click.stop>
          <div class="modal-header">
            <h3>{{el?.first_name}} {{el?.sur_name}}</h3>
              <i @click="modalShow" class="icon-close">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.7549 22.2459L22.2449 13.7559" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22.2449 22.2459L13.7549 13.7559" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.5 33H22.5C30 33 33 30 33 22.5V13.5C33 6 30 3 22.5 3H13.5C6 3 3 6 3 13.5V22.5C3 30 6 33 13.5 33Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </i>
          </div>
          <div class="modal-body">
            <div class="prof-role">
              <label for="">Profil roli</label>
              <el-select v-model="userRole.role" clearable filterable placeholder="role">
                  <el-option
                  v-for="item in roles"
                  :key="item.id"
                  :label="item.name?.[$i18n.locale]"
                  :value="item.value">
                  </el-option>
              </el-select>
            </div>
            <div class="set-sacebtn">
              <button @click="modalShow" class="cancel">Bekor qilish</button>
              <button @click="save" class="save">Saqlash</button>
            </div>
            <!-- <SaveBtn @modalClose="modalShow" api="allSection/favouriteMenu"/> -->
          </div>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      userRole: {
        role: null,
        app_status: 'accepted',
      },
      roles:[
        {
          id: 1,
          value: 'admin',
          name: {
            uz: 'Admin',
            ru: 'Admin',
            en: 'Admin',
          }
        },
        {
          id: 2,
          value: 'moderator',
          name: {
            uz: 'Moderator',
            ru: 'Moderator',
            en: 'Moderator',
          }
        },
      ]
    }
  },
  
  props:{
    user_info:{
      type: Number,
      default() {
          return null;
      },
    },
  },
  methods: {
    save(){
      return this.$axios({
      method: "PUT",
      url: "adminapplicants/"+this.user_info?.user_id,
      data: {...this.userRole}
      }).then((res) => {
      return res
      }).catch((err) => {
      return err
      })
      // this.$axios.put(('/adminapplicants/'+this.user_info?.user_id), {params:{...this.userRole}})
    },
    modalShow() {
      this.$emit("modalShow", false);
    },
  },
  mounted(){
    console.log('//');
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
.toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }
.toggle  .switch {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 24px;
  }

.toggle  .switch input {
      opacity: 0;
      width: 0;
      height: 0;
  }

 .toggle .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #F8C2CF;
      -webkit-transition: .4s;
      transition: .4s;
  }

 .toggle .slider:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 2px;
      bottom: 2px;
      background-color: #ffffff;
      -webkit-transition: .4s;
      transition: .4s;
  }

 .toggle input:checked+.slider {
      background-color: #00AB6D;
  }

 .toggle input:checked+.slider:before {
      -webkit-transform: translateX(16px);
      -ms-transform: translateX(16px);
      background-color: #ffffff;
      transform: translateX(16px);
  }

  /* Rounded sliders */
.toggle  .slider.round {
      border-radius: 34px;
  }

.toggle  .slider.round:before {
      border-radius: 50%;
  }
.modal-main {
  max-width: 756px;
  width: 100%;
  background: white;
  height: 100%;
  max-height: 436px;
  border-radius: 24px;
  padding: 24px 48px 48px 48px;
  position: relative;
  display: flex;
  align-items: center;
}
.modal-main h3{
  font-size: 24px;
  line-height: 36px;
  text-align: center;
}
.modal-header i {
  position: absolute;
  font-size: 16px;
  top: 24px;
  right: 24px;
  color: #000000;
  cursor: pointer;
}
.icon-close{
  display: flex;
}
.modal-body {
  width: 100%;
  height: calc(100% - 60px);
  max-height: 725px;
  margin-top: 24px;
  padding: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.set-sacebtn {
  display: flex;
  width: 100%;
  gap: 24px;
}
.set-sacebtn button{
  height: 64px;
  width: 100%;
  border: 0;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  color: white;
}
.set-sacebtn button.cancel{
  background: #901414;
}
.set-sacebtn button.save{
  background: #195B17;
}
</style>