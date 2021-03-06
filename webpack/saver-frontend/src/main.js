import Vue from 'vue'
import FoodSupply from './components/FoodSupply.vue'
import ListView from './components/ListView.vue';
import MainPage from './components/MainPage.vue';

import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'

import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

const client = new ApolloClient({
    uri: "http://localhost:60000/simple/v1/cjn3jmxq7000r012974x2atg4\n"
});

const apolloProvider = new VueApollo({
    defaultClient: client
});

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(VueApollo)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: ListView },
        { path: '/supplier/:id', component: FoodSupply }
    ]
})

new Vue({
    router,
    provide: apolloProvider.provide(),
    render: h => h(MainPage)
}).$mount('#app')
