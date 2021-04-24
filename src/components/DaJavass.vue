<template>
    <div class="modal1">
        <img :src="coverj" alt="" class="img">
        <h1>{{namej}}</h1>
        <h2>Dificultad: {{difj}}</h2><hr>
        <h3 v-html="descj"></h3>
        <div class="accordion" role="tablist"><hr>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">Programa nº1</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ progj1 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">Programa nº2</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ progj2 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">Programa nº3</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ progj3 }}</b-card-text>
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
        // curso 3
        namej:String,
        difj:String,
        descj:String,
        coverj:String,
        text: "prueba",
        progj1: String,
        progj2: String,
        progj3: String
    }
    },
    created(){
        api.getJavascript()
        .then(javass =>(
            this.javass = javass,
            //curso 3
            this.namej = javass.data.attributes.name,
            this.difj = javass.data.attributes.difficulty,
            this.descj = javass.data.attributes.description,
            this.coverj = javass.data.attributes.cover,
            this.progj1 = javass.included[0].attributes.name,
            this.progj2 = javass.included[1].attributes.name,
            this.progj3 = javass.included[2].attributes.name,
            this.progj4 = javass.included[3].attributes.name
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