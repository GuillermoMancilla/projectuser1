<template>
<div>
    <div class="modalheader">
        <img class="logo1" v-bind:src="cover" alt="">
        <h1 class="tit">{{curso1}}</h1>
    </div>
    <div class="modalcontent">
        <h2>{{intro}} </h2>
        <progress :value="progvid1/videoto1"></progress> - status: {{status1}}
        <h2>{{htcss}} </h2>
        <progress :value="progvid2/videoto2"></progress> - status: {{status2}}
        <h2>{{gity}} </h2>
        <progress :value="progvid3/videoto3"></progress> - status: {{status3}}
    </div>
</div>
</template>
<script>
import api from "@/api";
export default {
    name: "DaCursouno",
    data() {
    return {
        //primer curso de usuario
        curso1: String,
        cover: String,
        //modulo 1 primer curso
        intro: String,
        htcss: String,
        videoto1: Number,
        progvid1: Number,
        status1:String,
        //modulo 2 primer curso
        videoto2: Number,
        progvid2: Number,
        status2:String,
        //modulo3 primer curso
        gity:String,
        videoto3: Number,
        progvid3: Number,
        status3:String,
    }
    },
    created(){
        api.getAssets()
        .then(assets => (
          this.assets = assets,
                    //curso1
                    this.curso1 = assets.included[3].attributes.name,
                    this.cover = assets.included[3].attributes.cover,
                    //modulo 1 curso 1
                    this.intro = assets.included[3].attributes.learning[0].name,
                    this.status1 = assets.included[3].attributes.learning[0].status,
                    this.videoto1 = assets.included[3].attributes.learning[0].videos.total,
                    this.progvid1 = assets.included[3].attributes.learning[0].videos.progress,
                    //modulo 2 curso 1
                    this.htcss = assets.included[3].attributes.learning[1].name,
                    this.status2 = assets.included[3].attributes.learning[1].status,
                    this.videoto2 = assets.included[3].attributes.learning[1].videos.total,
                    this.progvid2 = assets.included[3].attributes.learning[1].videos.progress,
                    //modulo 3 curso 1
                    this.gity = assets.included[3].attributes.learning[2].name,
                    this.status3 = assets.included[3].attributes.learning[2].status,
                    this.videoto3 = assets.included[3].attributes.learning[2].videos.total,
                    this.progvid3 = assets.included[3].attributes.learning[2].videos.progress
        ))
    }
}
</script>
<style scoped>
.modalheader{
    background: #006699;
    margin: -16px;
    height: 90px;
}
.logo1{
    height: 80px;
    width: 80px;
    margin-top: 10px;
    margin-left: 40px;
}
.tit{
    color: aliceblue;
    margin-top: -95px;
    margin-left: 130px;
    font-size:40px;
}
.modalcontent{
    text-align: center;
    margin-top: 30px;
}
</style>