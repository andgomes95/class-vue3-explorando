import { createRouter, createWebHashHistory,RouteRecordRaw } from "vue-router"
import TaskScreen from '../views/TaskScreen.vue';
import ProjetosEmAndamento from '../views/ProjetosEmAndamento.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'TaskScreen',
    component: TaskScreen
  },
  {
    path: '/projetos',
    name: 'ProjetosEmAndamento',
    component: ProjetosEmAndamento
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router;