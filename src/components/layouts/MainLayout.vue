<template>
  <div class="main">
    <MainHeader/>
    <div class="main-layout">
      <SideBar/>
      <div class="page">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '../home/MainHeader.vue'
import SideBar from '../home/Sidebar.vue'

export default {
  name: 'MainLayout',
  components: {
    SideBar,
    MainHeader
  },
}
</script>