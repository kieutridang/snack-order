<template>
  <div>
    <h1>Order Page</h1>
    <div>
      <product-table />
    </div>
  </div>
</template>

<script>
import ProdcutTable from '@/components/ProductTable';

export default {
  name: 'OrderPage',
  data() {
    return {
    };
  },
  components: {
    'product-table': ProdcutTable,
  },
};
</script>

<style scoped>

</style>
