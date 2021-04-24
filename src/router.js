import vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Cursos from "@/views/Cursos";
import Error from "@/views/Error";

vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/cursos",
      name: "Cursos",
      component: Cursos
    },
    {
      path: "*",
      name: "Error",
      component: Error
    }
]
})