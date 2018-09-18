<template>
  <table>
    <thead>
      <tr>
        <td>Product Name</td>
        <td>Image</td>
        <td>Price</td>
        <td>Quantity</td>
        <td>Actions</td>
      </tr>
    </thead>
    <tbody>
      <tr v-if="$apollo.loading">Loading...</tr>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.name }}</td>
        <td><img :src="product.image" alt="product image here"/></td>
        <td>{{ product.price }} VND</td>
        <td>
          <button @click="increaseQuantity(product.id)">+</button>
          {{ product.quantity }}
          <button @click="decreaseQuantity(product.id)">-</button>
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
      const product = this.products.find(item => item.id === id);
      this.$set(product, 'quantity', product.quantity + 1);
    },
    decreaseQuantity(id) {
      const product = this.products.find(item => item.id === id);
      this.$set(product, 'quantity', product.quantity > 0 ? product.quantity - 1 : 0);
    },
  },
  apollo: {
    products: {
      query: getProducts,
      update(data) {
        const products = data.products.map((product) => {
          product.quantity = 0; // eslint-disable-line
          return product;
        });
        return products;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
  table {
    width: 100%;
    thead {
      background: black;
      color: white;
      tr > td {
        padding: 5px;
      }
    }
    tbody {
      tr > td {
        background: #c1c1c145;
        img {
          width: 100px;
        }
      }
    }
  }
</style>
