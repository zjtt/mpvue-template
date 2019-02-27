/**
* @file main.js
* @time 18.09.06
*/
import Vue from 'vue';
import App from './App';
import Fly from './utils/flyio'

Vue.prototype.$http = Fly;

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();
