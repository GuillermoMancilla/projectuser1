<template>
    <div>
        <div class="modalheader">
            <img class="logo1" v-bind:src="cover2" alt="">
            <h1 class="tit2">{{curso2}}</h1>
        </div>
        <div class="modalcontent">
            <h2>{{introcss}} </h2>
            <progress :value="modprogvid1/modvidt1"></progress> - status: {{modstat1}}
            <h2>{{precss}} </h2>
            <progress :value="modprogvid2/modvidt2"></progress> - status: {{modstat2}}
            <h2>{{flujo}} </h2>
            <progress :value="modprogvid3/modvidt3"></progress> - status: {{modstat3}}
            <h2>{{respon}} </h2>
            <progress :value="modprogvid4/modvidt4"></progress> - status: {{modstat4}}
            <h2>{{svg}} </h2>
            <progress :value="modprogvid5/modvidt5"></progress> - status: {{modstat5}}
        </div>
    </div>
</template>
<script>
import api from "@/api";
export default {
    name: "DaCursodos",
    data() {
    return {
        //Segundo curso de usuario
        curso2: String,
        cover2:String,
        //modulo 1 curso 2
        introcss:String,
        modstat1:String,
        modvidt1:Number,
        modprogvid1:Number,
        //modulo 2 curso 2
        precss:String,
        modstat2:String,
        modvidt2:Number,
        modprogvid2:Number,
        //modulo 3 curso 2
        flujo:String,
        modstat3:String,
        modvidt3:Number,
        modprogvid3:Number,
        //modulo 4 curso 2
        respon:String,
        modstat4:String,
        modvidt4:Number,
        modprogvid4:Number,
        //modulo 5 curso 2
        svg:String,
        modstat5:String,
        modvidt5:Number,
        modprogvid5:Number
    }
    },
    created(){
        api.getAssets()
        .then(assets => (
          this.assets = assets,
        //curso 2
        this.curso2 = assets.included[4].attributes.name,
        this.cover2 = assets.included[4].attributes.cover,
        //modulo 1 curso 2
        this.introcss = assets.included[4].attributes.learning[0].name,
        this.modstat1 = assets.included[4].attributes.learning[0].status,
        this.modvidt1 = assets.included[4].attributes.learning[0].videos.total,
        this.modprogvid1 = assets.included[4].attributes.learning[0].videos.progress,
        //modulo 2 curso 2
        this.precss = assets.included[4].attributes.learning[1].name,
        this.modstat2 = assets.included[4].attributes.learning[1].status,
        this.modvidt2 = assets.included[4].attributes.learning[1].videos.total,
        this.modprogvid2 = assets.included[4].attributes.learning[1].videos.progress,
        //modulo 3 curso 2
        this.flujo = assets.included[4].attributes.learning[2].name,
        this.modstat3 = assets.included[4].attributes.learning[2].status,
        this.modvidt3 = assets.included[4].attributes.learning[2].videos.total,
        this.modprogvid3 = assets.included[4].attributes.learning[2].videos.progress,
        //modulo 4 curso 2
        this.respon = assets.included[4].attributes.learning[3].name,
        this.modstat4 = assets.included[4].attributes.learning[3].status,
        this.modvidt4 = assets.included[4].attributes.learning[3].videos.total,
        this.modprogvid4 = assets.included[4].attributes.learning[3].videos.progress,
        //modulo 5 curso 2
        this.svg = assets.included[4].attributes.learning[4].name,
        this.modstat5 = assets.included[4].attributes.learning[4].status,
        this.modvidt5 = assets.included[4].attributes.learning[4].videos.total,
        this.modprogvid5 = assets.included[4].attributes.learning[4].videos.progress
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
.tit2{
    margin-top: -70px;
    margin-left: 130px;
    color: aliceblue;
}
.modalcontent{
    text-align: center;
    margin-top: 30px;
}
</style>