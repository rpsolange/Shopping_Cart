import Vue from 'vue'
import Router from 'vue-router'

// COMPONENTES 
import Login from '../components/login.vue'

//VISTAS
import Products from '../views/Products'

Vue.use(Router)
const router = new Router({
	routes: [
		{
			path: '/',
			name: 'login',
			component: Login
    },
    {
			path: '/products',
			name: 'products',
			component: Products
		}
	]
})

export default router