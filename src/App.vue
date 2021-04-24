<template>
  <div id="app" >
    <da-header/>
    <router-view class="bg-light"/>
    <da-footer/>
  </div>
</template>

<script>
import DaHeader from '@/components/DaHeader.vue'
import DaFooter from '@/components/DaFooter.vue'
export default {
  name: 'App',
  components: {
    DaHeader,
    DaFooter
  }
}
</script>

<style>
#app {
  margin: 0;
  width: 100%;
  background-color: rgb(206, 225, 233);
  height: 100%;
  
}
</style>
