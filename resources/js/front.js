require('./bootstrap');

// window.Vue = require('vue');
import Vue from 'vue';
import App from './App.vue'
console.log(Vue)

new Vue({
    el: '#root',
    render: h => h(App),
})
