<template>
    <div class="modal1">
        <img :src="coverc" alt="" class="img">
        <h1>{{namec}}</h1>
        <h2>Dificultad: {{difc}}</h2><hr>
        <h3 v-html="descc"></h3>
        <div class="accordion" role="tablist"><hr>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">Programa nº1</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ progc1 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">Programa nº2</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ progc2 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">Programa nº3</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ progc3 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
    </div>
</template>
<script>
import api from "@/api";
export default {
    name: "Fundamentos",
    data() {
    return {
        // curso 1
        namec:String,
        difc:String,
        descc:String,
        coverc:String,
        text: "prueba",
        progc1: String,
        progc2: String,
        progc3: String,
        progc4: String
    }
    },
    created(){
        api.getCss()
        .then(ccss =>(
            this.ccss = ccss,
            //curso 2
            this.namec = ccss.data.attributes.name,
            this.difc = ccss.data.attributes.difficulty,
            this.descc = ccss.data.attributes.description,
            this.coverc = ccss.data.attributes.cover,
            this.progc1 = ccss.included[0].attributes.name,
            this.progc2 = ccss.included[1].attributes.name,
            this.progc3 = ccss.included[2].attributes.name,
            this.progc4 = ccss.included[3].attributes.name,
            console.log(ccss.included[0].attributes.name)
            
        ))
    }
}
</script>

<style scoped>
.modal1{
  text-align: center;
}
.img{
    width: 500px;
    height: 300px;
}
</style>