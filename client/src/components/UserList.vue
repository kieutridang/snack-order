<template>
  <div class="user-list">
    <h1>User List</h1>
    <h4 v-if="loading">Loading...</h4>
    <ul id="list">
      <li v-bind:key="user.id" v-for="user in users">
        {{ user.username }}
      </li>
    </ul>
    <button @click="fetchData"></button>
  </div>
</template>

<script>
import { getUsers } from '@/query/users';

export default {
  name: 'UserList',
  data() {
    return {
      users: [],
      loading: 0,
    };
  },
  apollo: {
    users: {
      query: getUsers,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
