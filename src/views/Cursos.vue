<template>
<div class="paracurso">
  <div class="lder" v-if="isLoading">
    <div class="d-flex align-items-center">
      <strong>Loading...</strong>
      <b-spinner class="ml-auto"></b-spinner>
    </div> 
  </div>
  <div v-if="!isLoading">
    <b-card-group deck>
      <b-card
    :title= name1
    :img-src= cov1
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2">
    <b-card-text v-html="desc1"/>
      
    <b-button v-b-modal.modal-xl variant="primary">Detalles</b-button>
    <b-modal id="modal-xl" scrollable size="xl" title="Curso Disponible">
        <da-fundam></da-fundam>
    </b-modal>
  </b-card>

      <b-card
    :title= name2
    :img-src= cov2
    img-alt="Image2"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 img2">
    <b-card-text v-html="desc2"/>

    <b-button v-b-modal.modal-xl2 variant="primary" class="bton2">Detalles</b-button>
    <b-modal id="modal-xl2" scrollable size="xl" title="Curso Disponible">
        <Da-Ccss></Da-Ccss>
    </b-modal>
  </b-card>

      <b-card
    :title= name3
    :img-src= cov3
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2">
    <b-card-text v-html="desc2"/>

    <b-button v-b-modal.modal-xl3 variant="primary" class="bton3">Detalles</b-button>
    <b-modal id="modal-xl3" scrollable  size="xl" title="Curso Disponible">
        <da-javass></da-javass>
    </b-modal>
  </b-card>
    </b-card-group>
  </div>
</div>
</template>
<script>
import api from "@/api";
import DaFundam from "@/components/DaFundam";
import DaCcss from "@/components/DaCcss";
import DaJavass from "@/components/DaJavass"
export default {
    name: "Cursos",
    data() {
    return {
        isLoading:true,
        // curso 1
        name1:String,
        dif1:String,
        desc1:String,
        cov1:String,
        // curso 2
        name2:String,
        dif2:String,
        desc2:String,
        cov2:String,
        // curso 3
        name3:String,
        dif3:String,
        desc3:String,
        cov3:String
    }
    },
    components:{
        DaFundam,
        DaCcss,
        DaJavass
    },
    created(){
        api.getCursos()
        .then(cursos =>(
            this.cursos = cursos,
            //curso 1
            this.name1 = cursos[0].attributes.name,
            this.dif1 = cursos[0].attributes.difficulty,
            this.desc1 = cursos[0].attributes.description,
            this.cov1 = cursos[0].attributes.cover,
            //curso 2
            this.name2 = cursos[1].attributes.name,
            this.dif2 = cursos[1].attributes.difficulty,
            this.desc2 = cursos[1].attributes.description,
            this.cov2 = cursos[1].attributes.cover,
            //curso 3
            this.name3 = cursos[2].attributes.name,
            this.dif3 = cursos[2].attributes.difficulty,
            this.desc3 = cursos[2].attributes.description,
            this.cov3 = cursos[2].attributes.cover
        ))
        .finally(() => (this.isLoading = false))
    }
}
</script>

<style scoped>
.lder{
  height: 500px;
  margin-top: 100px;
}
.card-deck{
    text-align: center;
    padding-top: 40px;
    width: 100%;
    margin-bottom: 20px;
    padding-bottom: 20px;
}
.paracurso{
    padding-left: 150px;
    height: auto;
}
.card-img-top{
  height: 180px;
}
.bton2{
  margin-top: 100px;
}
.bton3{
  margin-top: 100px;
}
</style>