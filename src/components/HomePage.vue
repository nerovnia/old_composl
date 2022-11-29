<template>
  <div id="homePage">
    <h1>{{ msg }}</h1>
    <h2>Введення, коригування показів та проплат</h2>
    <form action="">
      <div id="year">
        <label for="">Рік</label>
        <select name="" id="">
          <option value=""
            v-for="year in years"
            :years="years"
            :key="year.id"> {{ year }} </option>
        </select>
      </div>
      <input type="button" value="Далі >">
    </form>
    <!--
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    -->
  </div>
  <div id="oblPosl">
    <div id="navComp">
      <nav>
        <h4>Компанії:</h4>
        <ul>
          <li></li>
        </ul>
      </nav>
    </div>
    <div id="listOrders">

    </div>
  </div>
  <!--
  <ComunalOrders :year="year"/>
  -->
  <CatalogButtons :catalogNames="catalogNames"/>
</template>

<script>
//import ComunalOrders from '@/components/ComunalOrders.vue'
import CatalogButtons from '@/components/CatalogButtons.vue'

export default {
  name: 'HomePage',
  components: {
    //ComunalOrders,
    CatalogButtons
  },
  props: {
    msg: String
  },
  data() {
    return {
      years: [ "2020", "2021", "2022" ],
      catalogNames: [
        {
          enName: "companies",
          name: "Компанії"
        },
        {
          enName: "servcoms",
          name: "Послуги"
        },
        {
          enName: "services",
          name: "Платіжні системи"
        },
        {
          enName: "orders",
          name: "Рахунки"
        }
      ],
      year: ""
      //course: [],
    }
  },
  mounted() {
  }  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
