<template>
<div class="mainc" >
  <div class="lder" v-if="isLoading">
    <div class="d-flex align-items-center">
      <strong>Loading...</strong>
      <b-spinner style="width: 3rem; height: 3rem;" class="ml-auto"></b-spinner>
    </div> 
  </div>
    <div class="testu" v-if="!isLoading">
        <div class="tt">
            <img class="avt" v-bind:src="avatar" alt="">
            <da-corpo :assets="assets"></da-corpo><br>
        </div>
    </div>
</div>
<!-- <pulse-loader :loading="isLoading" :color="'#4A90E2'" :size="30" v-else>Cargando</pulse-loader> -->
</template>

<script>
import DaCorpo from "@/components/DaCorpo"
import api from "@/api";

export default {
  name: "Home",
  components: {
    DaCorpo
  },

  data() {
    return {
      assets: [],
      isLoading:true
    };
  },
created(){
        api.getAssets()
        .then(assets => (
          this.assets = assets,
          this.avatar = assets.included[0].attributes.avatar
          ))
        .finally(() => (this.isLoading = false))
        // api.getAssets().then(assets => (this.assets = assets)).finally(() => (this.isLoading = false))
    },  
};
</script>

<style scoped>
.mainc{
    display: flex;
    justify-content: center;
    /* margin-top: 30px; */
    width: 100%;
    text-align: center;
    padding-top: 60px;
}
.lder{
  height: 500px;
  margin-top: 100px;
}
.testu{
    width: 70%;
    margin-left: 150px;
}
.tt{
  width: 100%;
}
.avt{
    height: 250px;
    width: 230px;
    margin-left: -150px;
    /* border: 2px black solid; */
}
</style>