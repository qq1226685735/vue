import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import MyMessage from '@/pages/mymessage/myMessage.vue'

import Login from '@/pages/login/login.vue'
import Register from '@/pages/login/register.vue'
// import Wangeditor from '@/components/other/wangeditor.vue'
import BackMain from '@/pages/backsys/back.vue'
import AddNew from '@/pages/addnew/addnew.vue'
import New from '@/pages/new/new.vue'
import Newv from '@/pages/new/newv.vue'
import Mydetail from '@/pages/mymessage/mydetail.vue'
import Updatemsg from '@/pages/mymessage/updatemsg.vue'
import MyReverse from '@/pages/mymessage/child/myreverse.vue'
import MyPublish from '@/pages/mymessage/child/mypublish.vue'
import MyComment from '@/pages/mymessage/child/mycomment.vue'
import Searchresult from '@/pages/search/searchresult.vue'
import UpPower from '@/pages/mymessage/child/uppower.vue'
import Verify from '@/pages/mymessage/child/verify.vue'
Vue.use(Router)

export default new Router({
  routes: [
   {path:"",
   component:Home,
   meta: {
     keepAlive: true // true 表示需要使用缓存

    }
   },
   {path:"/home",
   component:Home,
   meta: {
     keepAlive: true // true 表示需要使用缓存
    }
   },
   {path:"/my",component:MyMessage,
   meta: {
     keepAlive: false // true 表示需要使用缓存
    }
   },
   {path:"/backmain",component:BackMain,
   meta: {
     keepAlive: false // true 表示需要使用缓存
    }
   },
    {path:"/login",component:Login,
   meta: {
     keepAlive: false // true 表示需要使用缓存
    }
   },
   {path:"/register",component:Register,
   meta: {
     keepAlive: false // true 表示需要使用缓存
    }
   },
    {path:"/addnew",component:AddNew,
   meta: {
     keepAlive: false, // true 表示需要使用缓存
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
   },
   {path:"/new",component:New,
   meta: {
     keepAlive: false // true 表示需要使用缓存
    }
   },
   {path:"/newv",component:Newv,
   meta: {
     keepAlive: false // true 表示需要使用缓存
    }
   },
   {path:"/mydetail",component:Mydetail,
   meta: {
     keepAlive: false, // true 表示需要使用缓存
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
   },
   {path:"/updatemsg",component:Updatemsg,
   meta: {
     keepAlive: false, // true 表示需要使用缓存
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
   },
   {path:"/myreverse",component:MyReverse,
   meta: {
     keepAlive: false, // true 表示需要使用缓存
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
   },
    {path:"/mypublish",component:MyPublish,
   meta: {
     keepAlive: false, // true 表示需要使用缓存
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
   },
   {path:"/mycomment",component:MyComment,
   meta: {
     keepAlive: false, // true 表示需要使用缓存
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
   },
    {path:"/searchresult",component:Searchresult,
   meta: {
     keepAlive: false, // true 表示需要使用缓存
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
   },
    {path:"/uppower",component:UpPower,
   meta: {
     keepAlive: false, // true 表示需要使用缓存
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
   },
    {path:"/verify",component:Verify,
   meta: {
     keepAlive: false, // true 表示需要使用缓存
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
   }

   ]
})
