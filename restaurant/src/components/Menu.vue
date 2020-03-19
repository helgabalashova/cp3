<template>
    <div class="wrapper">
        <div class="products">
            <div class="product" v-for="product in products" :key="product.id">
                <div class="info">
                    <h1>{{product.name}}</h1>
                    <p>{{product.type}}</p>
                </div>
                <div class="image">
                    <img :src="'/images/'+product.image">
                </div>
                <div class="description">
                    <p>{{product.description}}</p>
                    <h2>${{product.price}}</h2>
                </div>
                <div class="price">   
                    <button v-on:click="addToCart(product)" class="auto">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Menu',
  props: {
    products: Array
  },
  methods: {
      addToCart: function(product) {
          if (this.$root.$data.cart.includes(product)) {
              product.quantity = product.quantity + 1;
              this.$root.$data.total += product.price;
          }
          else {
              product.quantity = 1;
              this.$root.$data.cart.push(product);
              this.$root.$data.total += product.price;
          }
      },
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 350px);
  column-gap: 30px;
  row-gap: 30px;
}

.product img {
  max-width: 100%;
  height: 240px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #533930;
  color: white;
  padding: 10px 30px;
  height: 55px;
}

.description {
    margin-top: -5px;
    overflow: hidden;
    background-color: #ededed;
    padding: 10px;
}

.info h1 {
  font-size: 20px;
}

.info h2 {
  font-size: 16px;
}

.info p {
  margin: 0px;
  font-size: 14px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  width: 100%;
  background-color: #9cb227;
}

@media screen and (max-width: 1000px) {
  .products {
    grid-template-columns: repeat(1, 350px);
  }
}
</style>