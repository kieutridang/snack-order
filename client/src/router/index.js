import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import UserList from '@/components/UserList';
import OrderPage from '@/pages/OrderPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/user-list',
      name: 'UserList',
      component: UserList,
    },
    {
      path: '/order-page',
      name: 'OrderPage',
      component: OrderPage,
    },
  ],
});
