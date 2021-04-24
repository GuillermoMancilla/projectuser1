<template>
    <div class="modal1">
        <img :src="coverf" alt="" class="img">
        <h1>{{namef}}</h1>
        <h2>Dificultad: {{diff}}</h2><hr>
        <h3 v-html="descf"></h3>
        <div class="accordion" role="tablist"><hr>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">Programa nº1</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ progf1 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">Programa nº2</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ progf2 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">Programa nº3</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ progf3 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-4 variant="info">Programa nº4</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{progf4}}</b-card-text>
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
        namef:String,
        diff:String,
        descf:String,
        coverf:String,
        text: "prueba",
        progf1: String,
        progf2: String,
        progf3: String,
        progf4: String
    }
    },
    created(){
        api.getFund()
        .then(fund =>(
            this.fund = fund,
            //curso 1
            this.namef = fund.data.attributes.name,
            this.diff = fund.data.attributes.difficulty,
            this.descf = fund.data.attributes.description,
            this.coverf = fund.data.attributes.cover,
            this.progf1 = fund.included[0].attributes.name,
            this.progf2 = fund.included[1].attributes.name,
            this.progf3 = fund.included[2].attributes.name,
            this.progf4 = fund.included[3].attributes.name,
            console.log(fund.included[0].attributes.name)
            
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