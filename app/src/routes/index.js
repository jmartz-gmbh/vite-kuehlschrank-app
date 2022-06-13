import {createWebHistory, createRouter} from 'vue-router'

import Home from '../pages/home.vue';
import Impressum from '../pages/impressum.vue';
import Settings from '../pages/settings.vue';
import Calendar from '../pages/calendar.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/impressum', component: Impressum },
  { path: '/settings', component: Settings },
  { path: '/calendar', component: Calendar },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})