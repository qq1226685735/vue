<template>
	<div >
<el-container style="height: 600px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>用户管理</template>
        <el-menu-item-group>
  
          <el-menu-item index="1-1" @click="which='Usermanager'">查看用户</el-menu-item>
          <el-menu-item index="1-2" @click="which='Updateuser'">修改用户</el-menu-item>
           <el-menu-item index="1-3" @click="which='Powermanager'">权限申请处理</el-menu-item>
        </el-menu-item-group>
       
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>新闻管理</template>
        <el-menu-item-group>

          <el-menu-item index="2-1" @click="which='New'">查看新闻</el-menu-item>
          <el-menu-item index="2-2" @click="which='UpdateNew'">修改新闻</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>首页管理</template>
        <el-menu-item-group>
          <el-menu-item index="3-1" @click="which='Announce'">公告管理</el-menu-item>
          <el-menu-item index="3-2" @click="which='Joke'">笑话管理</el-menu-item>
        </el-menu-item-group>

      
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>root</span>
    </el-header>
    <component :is="which"></component>
    
  </el-container>
</el-container>

</div>
</template>
<style  scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
<script>
import Powermanager from '@/components/backsys/powermanager.vue'
import Usermanager from '@/components/backsys/usermanager.vue'
import Joke from '@/components/backsys/joke.vue'
import New from '@/components/backsys/new.vue'
import UpdateNew from '@/components/backsys/updatenew.vue'
import Announce from '@/components/backsys/announce.vue'
import Updateuser from '@/components/backsys/updateuser.vue'
  export default {
    data() {
      return {
        which:"Powermanager"
       
      }
    },
    components:{Powermanager,Usermanager,Updateuser,Announce,Joke,New,UpdateNew},
    methods:{

    },
    mounted(){
        this.token=localStorage.getItem('permission');
        if(this.token==null){
          alert("请登录");
       this.replaceto("login",null);
    }
    else if(this.token!='4'){
      alert('您没有权限');
      this.back();
    }

    }
  };
</script>