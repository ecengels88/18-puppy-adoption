import 'whatwg-fetch';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './routes/application.vue';
import Index from './routes/index.vue';
import NewPage from './routes/new.vue';
import DetailsPage from './routes/details.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Index,
    name: 'index',
  },
  {
    path: '/new',
    component: NewPage,
    name: 'new',
  },
  {
    path: '/:id';
    component: DetailsPage,
    name: 'details';
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

const app = new Vue({ ...App, router }).$mount('.app');
