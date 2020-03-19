<template>
<div>
    <div class="grid-container header-cont">
        <div class="name">Product Name</div>
        <div>Price</div>
        <div class="quant">Quantity</div>
        <div>Total</div>
        <div></div>
    </div>
    <div class="grid-container" v-for="item in items" :key="item.id">
        <div class="name">{{item.name}}</div>
        <div>{{item.price}}</div>
        <div class="quant">{{item.quantity}}</div>
        <div>{{item.price * item.quantity}}</div>
        <button v-on:click="removeProduct(item)" >Remove</button>
    </div>
    <div class="total-value">
        Total: ${{total}}
    </div>
</div>
</template>
<script>
export default {
    name: 'CartList',
    props: {
        items: Array
    },
    methods: {
        removeProduct: function(item) {
            this.$root.$data.total -= item.price * item.quantity;
            return this.$root.$data.cart = this.$root.$data.cart.filter(product => product.id != item.id);  
        },
        reduceQuantity: function(item) {
            
        }
    },
    computed: {
        total() {
            return Math.round(this.$root.$data.total*100)/100;
        }
    }
}
</script>
<style>
    h1 {
        text-align: center;
        color: #F2921D;
    }

    .grid-container {
        width: 70%;
        display: grid;
        grid-template-columns: 5fr 1fr 1fr 1fr 1fr;
        padding: 10px;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid grey;
        margin-left: auto;
        margin-right: auto;
        column-gap: 20px;
    }

    .name {
        text-align: left;
    }

    .header-cont {
        background-color: #533930;
        color: white;
        font-weight: bold;
    }

    button {
        height: 30px;
        background: #9cb227;
        color: white;
        border: none;
        font-weight: bold;
    }

    .pr-image img {
        max-width: 100%;
        max-height: 35px;
    }

    .quant, .pr-image {
        align-self: center;
        justify-self: center;
    }
    .total-value {
        width: 85%;
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
        font-weight: bold;
    }
</style>