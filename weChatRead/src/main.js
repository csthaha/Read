import Vue from 'vue'
import App from './App'

var Fly=require("flyio/dist/npm/wx") 
var fly=new Fly
// ... //添加全局配置、拦截器等
Vue.prototype.$http=fly //将fly实例挂在vue原型上


Vue.config.productionTip = false  //设置vue 的提示功能关闭
App.mpType = 'app'
// 声明当前组件的类型

const app = new Vue(App) //应用
app.$mount()    //挂载整个应用
