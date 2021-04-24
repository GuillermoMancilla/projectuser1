<template>
    <div class="heaad">
        <router-link to="/"><b-button variant="primary"> Home </b-button></router-link>
        <router-link to="/cursos"><b-button variant="primary"> Cursos Disponibles</b-button></router-link>
        <h1>Bienvenido a la plataforma Digital</h1>
    </div>
</template>

<script>
export default {
    name: "DaHeader"
}
</script>

<style scoped>
.heaad{
    height: 65px;
    text-decoration: none;
    background: #006699;
    color: aliceblue;
}
h1{
    text-align: center;
    margin-top: -30px;
}
.btn{
    margin-left: 5px;
}
</style>