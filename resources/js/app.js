/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import { Form, HasError, AlertError } from 'vform';
import Swal from 'sweetalert2';
import VueProgressBar from 'vue-progressbar';
import Loading from "vue-loading-overlay";
 Vue.use(Loading, {
    color: "#3490dc",
});

Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    thickness:'4px'
});

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('product-component', require('./components/ProductComponent.vue').default);

const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton:false,
    timer: 3000,
    timerProgressBar: true,
    didOpen:(toast) => {
        toast.addEventListener('mouseover', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
});

window.Form = Form;
window.Swal = Swal;
window.Toast = Toast;

const app = new Vue({
    el: '#app',
});
