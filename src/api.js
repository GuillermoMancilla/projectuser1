const url = "https://talento-digital-api.netlify.app/front-end/api/v1/users/me.json";
const lnk = "https://rest-courses-api.herokuapp.com/api/v1/courses"
const fund = "https://rest-courses-api.herokuapp.com/api/v1/courses/fundamentos-de-desarrollo-web"
const ccss = "https://rest-courses-api.herokuapp.com/api/v1/courses/css-avanzado"
const javascript = "https://rest-courses-api.herokuapp.com/api/v1/courses/javascript"

function getAssets() {
    return fetch(`${url}`)
      .then(res => res.json())
      .then(res => res)
      .catch(error => console.log(error))
  }

function getCursos() {
    return fetch(`${lnk}`)
      .then(res => res.json())
      .then(res => res.data);
}

function getFund() {
  return fetch(`${fund}`)
    .then(res => res.json())
    .then(res => res);
}

function getJavascript() {
  return fetch(`${javascript}`)
    .then(res => res.json())
    .then(res => res);
}

function getCss() {
  return fetch(`${ccss}`)
    .then(res => res.json())
    .then(res => res);
}

  export default {
    getAssets,
    getCursos,
    getFund,
    getCss,
    getJavascript
};