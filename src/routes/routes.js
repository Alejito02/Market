import Articulos from '../components/Articulos.vue'
import Categorias from '../components/Categorias.vue'
import Terceros from '../components/Terceros.vue'
import Movimientos from '../components/Movimientos.vue'
import Home from '../components/Home.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/Articulos',
        name: 'Articulos',
        component: Articulos
    },
    {
        path: '/Categorias',
        name: 'Categorias',
        component: Categorias
    },
    {
        path: '/Movimientos',
        name: 'Movimientos',
        component: Movimientos
    },
    {
        path: '/Terceros',
        name: 'Terceros',
        component: Terceros
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    }
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes
})