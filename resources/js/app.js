/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));




import store from './store/store'

// Router

import VueRouter from 'vue-router'

// vue-fontawsome

import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
    faShoppingBasket
} from '@fortawesome/free-solid-svg-icons'
import {
    faSearch
} from '@fortawesome/free-solid-svg-icons'


Vue.use(VueRouter);
library.add(faShoppingBasket);
library.add(faSearch);

const routes = [
    // {
    //         path: '/gas-sensors',
    //         name: 'gas-sensors',
    //         component: require('./components/GasSensors.vue').default,
    //     },
    {
        path: '/gas-sensors/:name',
        name: 'gas-sensor',
        // component: require('./components/GasSensor.vue').default,
        props: true
    },
    //     //   { path: '/', component: require('./components/ExampleComponent.vue') },
    //     //   { path: '/user', component: require('./components/User.vue') }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

// const app = new Vue({
//     router
// }).$mount('#app')
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('homepage', require('./components/Homepage.vue').default);
Vue.component('caroucel', require('./components/Caroucel.vue').default);
Vue.component('navigation--spantech', require('./components/Navigation.vue').default);
Vue.component('gas-sensors', require('./components/GasSensors.vue').default);
Vue.component('gas-sensor', require('./components/GasSensor.vue').default);
Vue.component('gas-purifires', require('./components/GasPurifires.vue').default);
Vue.component('search', require('./components/SearchBar.vue').default);
Vue.component('basket', require('./components/Basket.vue').default);
Vue.component('counter', require('./components/Counter.vue').default);
Vue.component('gas-instrument', require('./components/GasInstrument.vue').default);
Vue.component('calibration-gas', require('./components/CalibrationGas.vue').default);
Vue.component('footer-spantech', require('./components/Footer.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    store,

});
