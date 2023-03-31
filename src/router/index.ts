import { createRouter, createWebHashHistory,RouteRecordRaw } from "vue-router"
import TaskScreen from '../views/TaskScreen.vue';
import FormularioDeProjetos from '../views/projetos/FormularioDeProjetos.vue';
import CalculaDate from '../views/CalculaDate.vue';
import ProjetosEmAndamento from '../views/ProjetosEmAndamento.vue';
import ListaProjetos from '../views/projetos/ListaProjetos.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'TaskScreen',
    component: TaskScreen
  },
  {
    path: '/calcula-date',
    name: 'CalculaDate',
    component: CalculaDate
  },
  {
    path: '/projetos',
    component: ProjetosEmAndamento,
    children: [
      {
        path: '',
        name: 'ProjetosEmAndamento',
        component: ListaProjetos
      },
      {
        path: 'novo',
        name: 'Novo Projeto',
        component: FormularioDeProjetos
      },
      {
        path: ':id',
        name: 'Editar Projeto',
        component: FormularioDeProjetos,
        props: true
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router;