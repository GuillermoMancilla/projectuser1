<template>
    <div class="base" v-if="!isLoading">
        <div class="aal">
            <h1>Datos de Usuario</h1>
        </div>
        <div class="lool" >
            <h2>{{nombreCompleto}} - {{email}}</h2>
            <a v-bind:href="linkgit"><img src="@/assets/giit.png" alt="" class="icono"></a>
            <a v-bind:href="linktwit" ><img src="@/assets/twit.png" alt="" class="icono"></a>
        </div>
        <div class="aal">
            <h1>Cursos del Usuario</h1>
        </div>
        <div class="lool" >
            <h1>{{curso1}}</h1><b-button v-b-modal.modal-1 variant="primary">Detalles</b-button>
                <b-modal id="modal-1" title="Cursos de usuario">
                    <da-cursouno></da-cursouno>
                </b-modal>
            <h1>{{curso2}}</h1><b-button v-b-modal.modal-2 variant="primary">Detalles</b-button>
                <b-modal id="modal-2" title="Cursos de usuario">
                    <da-cursodos></da-cursodos>
                </b-modal>
        </div>
    </div>
    <!-- <pulse-loader :loading="isLoading" :color="'#4A90E2'" :size="30" v-else>Cargando</pulse-loader> -->
    
</template>

<script>
import api from "@/api";
import DaCursouno from "@/components/DaCursouno";
import DaCursodos from "@/components/DaCursodos";
export default {
  name: "DaCorpo",
  data() {
    return {
      isLoading: false,
      //datos usuario
      nombreCompleto: String,
      email: String,
      linkgit: String,
      linktwit: String,
      //primer curso de usuario
      curso1: String,
      //Segundo curso de usuario
      curso2: String,
    };
  },
  components:{
        DaCursouno,
        DaCursodos
    },
created(){
        api.getAssets()
        .then(assets => (
          this.assets = assets,
          //datos de usuario
          this.avatar = assets.included[0].attributes.avatar,
          this.nombreCompleto = assets.included[0].attributes.firstname + ' ' + assets.included[0].attributes.lastname,
          this.email = assets.data.attributes.email,
          this.linkgit = assets.included[1].attributes.url,
          this.linktwit = assets.included[2].attributes.url,
          //curso1
          this.curso1 = assets.included[3].attributes.name,
          //curso 2
          this.curso2 = assets.included[4].attributes.name
          ))
        .finally(() => (this.isLoading = false))
    },
}
</script>
<style scoped>
.aal{
    border-color: black;
    border-width: 5px 5px 0px 5px;
    border-style: solid;
    width: 80%;
    /* text-align: center; */
    height: 60px;
    /* margin-top: 5px; */
    background: #006699;
    color: aliceblue;
}
.lool{
    /* margin-top: -22px; */
    width: 80%;
    border: 5px black solid;
    /* text-align: center; */
    padding-bottom: 10px;
    margin-bottom: 10px;
}
.icono{
    height: 80px;
    width: 80px;
    margin-right: 40px;
    margin-left: 40px;
    padding-bottom: 10px;
}
</style>