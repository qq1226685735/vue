import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import MyMessage from '@/pages/myMessage/myMessage.vue'
import Login from '@/components/login/login.vue'
// import Wangeditor from '@/components/other/wangeditor.vue'
import BackMain from '@/pages/backsys/back.vue'
Vue.use(Router)

export default new Router({
  routes: [
   {path:"",component:Home},
   {path:"/home",component:Home},
   {path:"/my",component:MyMessage},
   {path:"/backmain",component:BackMain}
   ]
})
