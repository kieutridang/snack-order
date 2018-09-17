<template>
  <table>
    <thead>
      <tr>
        <td>Product Name</td>
        <td>Image</td>
        <td>Price</td>
        <td>Quantity</td>
        <td></td>
      </tr>
    </thead>
    <tbody>
      <tr v-if="$apollo.loading">Loading...</tr>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.name }}</td>
        <td><img src="#" alt="product image here"/></td>
        <td>{{ product.price }}</td>
        <td>
          <button @click="increaseQuantity(product.id)">+</button>
          {{ product.quantity || 1 }}
          <button @click="decreaseQuantity">-</button>
        </td>
        <td>
          <button>Add to cart</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { getProducts } from '@/query/products';

export default {
  name: 'ProductTable',
  data() {
    return {
      products: [],
      loading: 0,
    };
  },
  methods: {
    increaseQuantity(id) {
      const products =  this.products.map((product) => {
        if (product.id === id) {
          if (product.quantity) {
            product.quantity += 1;
          } else {
            product.quantity = 2;
          }
        }
        return product;
      })
      this.products = products;
    },
    decreaseQuantity: () => {
      debugger;
    },
  },
  apollo: {
    products: {
      query: getProducts,
      update(data) {
        data.products = data.products.map(product => {
          product.quantity = 1;
          return product;
        })
        return data.products;
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
