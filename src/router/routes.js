import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store/index'

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

router.beforeEach((to, from, next) => {
	const {state: { authenticate } } = Store
	const {name} = to
	if(name == 'login'){
		next()
	} else {
		if(authenticate == true){
			next()
		} else {
			router.replace({ name: 'login' })
		}
	}
})

export default router