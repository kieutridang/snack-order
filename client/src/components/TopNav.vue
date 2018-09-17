<template>
  <nav>
    <div id="left">
      <img v-bind:src="require('../assets/snack-order-logo.png')" />
      <span>Snack Order</span>
    </div>
    <div id="right">
      <ul id="menu">
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopNav',
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
  nav {
    height: 50px;
    background: black;
    color: white;
    display: grid;
    grid-template-areas: 'left right';
  }
  #left {
    grid-area: left;
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
    align-items: center;
    img {
      width: 46px;
    }
  }
  #right {
    grid-area: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    li {
      display: inline-block;
      margin: auto 20px;
      cursor: pointer;
    }
  }
</style>
