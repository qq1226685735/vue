<template>
         <div class="mydetail">
	     <div @click="back()"><li class="el-icon-arrow-left" style="font-size:30px"></li></div>
		<div class="option">
			<div class="img">
		<div class="userimg"><img :src="userimg" onerror="this.src='http://127.0.0.1:8081/images/none.png'" width="100%" height="100%" /></div>
			
		</div>
		<div  class="set">id：{{userid}}</div>
		<div   class="set">用户名：{{username}}</div>
		<div   class="set">性别：{{usersex}}</div>
		<div   class="set">注册日期：{{createtime}}</div>
		<div  class="set">权限：{{permission|per}}<span v-if="permission=='4'">  <el-button type="primary" plain @click="pushto('backmain',null)">后台管理</el-button></span></div>
		<div  class="update" @click="updatemsg()"> <el-button type="primary">修改资料</el-button></div>

		</div>
	</div>
       
</template>
<style type="text/css" scoped>
.mydetail{
	position: fixed;
	z-index: 1;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;

}
.option{
	width: 100%;
}
.option .set{
	clear: both;
   width: 90%;
   height: 3em;
   font-size: 1.2em;
   line-height: 3em;
   border-bottom: 1px solid gray;
   margin:0 auto;
}
.option .update{
	 width: 4em;
   height: 1.5em;
     font-size: 1.2em;
     line-height: 1.5em;
     text-align: center;
     color: white;
     margin:0 auto;
}
.option .img{
	width:6em;
	margin: 0 auto;
}
.option .userimg{
   background-color: #e6e6e6;
	width: 3em;
	height: 3em;
	margin: 0 auto;
  border-radius: 50%;
	overflow: hidden;

}

</style>
<script type="text/javascript">
export default{
   data(){
   	return {
   		userimg:"",
   		userid:"",
   		username:"",
   		usersex:"",
   		createtime:"",
   		permission:"",
   		token:null


   	}
   },
   methods:{
   	updatemsg:function(){
         if(this.token==null){
         	alert(请登录);
         	this.replaceto("login",null);
         }
         else this.pushto('updatemsg',null)
   	}
   },
   mounted(){
   	    this.token=localStorage.getItem('token');
   	    if(this.token==null){
            alert("请登录");
   	   this.replaceto("login",null);
   	}
   	   this.userimg= localStorage.getItem('userimg');
   	   this.userid= localStorage.getItem('id');
   	    this.username= localStorage.getItem('username');
   	     this.usersex= localStorage.getItem('sex');
   	      this.createtime= localStorage.getItem('createtime');
   	        this.permission= localStorage.getItem('permission');
			
   }

	}
</script>