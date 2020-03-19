<template>
  <div>
  <h2>{{this.type}} Menu</h2><br>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <div class="menu-type">
        <ul>
          <li><a @click="select('appetizer')" href="#">Appetizers</a></li>
          <li><a @click="select('main-dish')" href="#">Main Dishes</a></li>
          <li><a @click="select('drinks')" href="#">Drinks</a></li>
        </ul>
    </div>
  <Menu :products="products" />
</div>

</template>

<script>
// @ is an alias to /src
import Menu from "../components/Menu.vue"

export default {
  name: 'Home',
  components: {
    Menu
  },
  data() {
    return {
      searchText: '',
      type: "appetizer",
    }
  },
  computed: {
    products() {
      let result = this.$root.$data.products.filter(product => 
        product.name.toLowerCase().search(this.searchText) >= 0);
      result = result.filter(product => product.type === this.type);
      return result;
    },
  },
  methods: {
    select(type) {
      this.type = type;
    }
  }
}
</script>
<style scoped>

* {
  overflow: auto;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 30%;
  float: right;
}

h2 {
  text-transform: capitalize;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}

ul {
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 30px;
  background-color: #9cb227;
}

ul li {
  list-style: none;
  transform: rotate(-90deg);
  height: 300px;
  width: 120px;
  margin: 0px;
  background-color: #9cb227;
}

ul li a {
  height: 300px;
  width: 120px;
  text-decoration: none;
  background-color: #9cb227;
  color: white;
}

ul li a:link, ul li a:visited {
  color: white;
  font-weight: bold;
  
}

.menu-type {
 position: fixed;
 left: -25px;
 bottom: 20px;
}
</style>
