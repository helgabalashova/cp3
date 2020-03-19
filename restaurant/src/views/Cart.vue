<template>
  <div class="about">
    <h2>Your Cart</h2>
    <div>
      <div v-if="item.length === 0">
        <h1>Cart is empty!</h1>
      </div>
      <div v-else >
        <CartList :items="item" />
      </div>
    </div>
  </div>
</template>
<script>
import CartList from "../components/CartList"
export default {
    name: "Cart",
    components: {
        CartList,
    },
    computed: {
        item() {
            return this.$root.$data.cart;
        }
    }
}
</script>