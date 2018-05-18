<template>
	<div>
	<div class="my-body">
		<div class="my-body-header">
			<div @click="back()"><li class="el-icon-arrow-left" style="font-size:30px"></li></div>
			<div class="usermsg">
				<div class="userimg"><img :src="userimg" onerror="this.src='http://127.0.0.1:8081/images/none.png'" width="100%" height="100%" /></div>
				<div v-if="username!='null'" class="username">{{username}}
					</div>
			<div @click="pushto('login',null)" class="username" v-else>登录</div>
			</div>

			<div class="other">

				<div class="icon" @click="pushto('myreverse',null)"><div style="width:2em;height:2em;margin:0 auto"><img src="@/assets/images/icon/收藏.png" width="100%" height="100%" id="img1"/></div>    <div class="explain">收藏</div></div>
				<div class="icon" @click="addnew()"><div style="width:2em;height:2em;margin:0 auto"><img src="@/assets/images/icon/发表.png" width="100%" height="100%" id="img1"/></div><div class="explain">发表</div></div>
				<div class="icon" @click="pushto('verify',null)"><li class="el-icon-message"></li>
					<div class="explain" >审核</div></div>
			</div>
		</div >
		<div class="option">
		<div  @click="pushto('mydetail',null)" class="set">我的信息</div>
		<div  @click="pushto('mypublish',null)" class="set">我所发表</div>
		<div  @click="pushto('mycomment',null)" class="set">我的评论</div>
		<div  @click="pushto('uppower',null)" class="set">权限申请</div>
		<div  @click="pushto('addnew',null)" class="set">用户反馈</div>
        <div @click="cancel()" class="set">注销登录</div>
	    </div>
		
	</div>

	</div>
</template>
<style type="text/css"  scoped>
.my-body{
	position: fixed;
	z-index: 1;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: #e6e6e6;

}
.my-body-header{
	position: absolute;
	width: 100%;
	height: 38%;;
	background-color:#303133;
	color: white;
}
.my-body-header .usermsg{
	width: 13em;
	height: 4em;
	margin:0 auto;
}
.my-body-header .userimg{
	width: 4em;
	height: 4em;
	border-radius: 50%;
	background-color: #e6e6e6;
	overflow: hidden;
	float:left;
}
.my-body-header .username{
	width: 6em;
	height: 3em;
	float: left;
	font-size: 1.3em;
	line-height: 3em;
	text-align: center;
}
.other{
	position: absolute;
	bottom:0em;
	width: 100%;
	height: 6em;
	background-color: white;
}
.other .icon{
	margin-top:1em;
	width: 33%;
	height: 7em;
	float: left;
	text-align: center;
}
.other li{
	color: red;
	font-size: 2em;
}
.other .explain{
	width: 3em;
	height: 1em;
	margin: 0 auto;
	text-align: center;
	line-height: 1em;
	font-size:0.8em;
	color: gray;
}
.option{
	position: absolute;
    top: 40%;
	width: 100%;
	height: 60%;
	background-color: white;
}
.option .set{
   width: 90%;
   height: 3em;
   font-size: 1em;
   line-height: 3em;
   border-bottom: 1px solid #e6e6e6;
   margin:0 auto;
}
/* 动画*/
/*.login-enter-active{
	animation: toTop  .2s;
}
.login-leave-active{
	animation: toTop  .2s reverse;
}
@keyframes toTop{
  0% {
    transform:translateY(100%);
  }
  
  100% {
    transform: translateY(0);
  }
}*/
</style>
<script type="text/javascript">
export default{
	data(){
		return{
			
			username:"null",
			userimg:""
		}
	},
	methods:{
	   changeDisplay:function(val){
	   	this.display=val;
	   },
	   cancel:function(){
	    localStorage.clear();
	   	 location.reload();//刷新
	   },
	   addnew:function(){
	   	if(localStorage.getItem('username')){
	   	if(parseInt(localStorage.getItem('permission'))<1)
	   		alert("您没有权限");
	   	else this.pushto('addnew',null);
	   }
	   else  this.pushto('login',null);
	},
},
	mounted(){
        if( localStorage.getItem('username')) 
        	{
        this.username= localStorage.getItem('username');
         this.userimg=localStorage.getItem('userimg')
    }
        	else   this.username="null";
      

	}
}
</script>