<template>
	<div>
	<div class="my-body">
		<div class="my-body-header">
			<div @click="back()"><li class="el-icon-arrow-left" style="font-size:30px"></li></div>
			<div @click="changeDisplay(1)" class="toLogin">登录</div>
			<div><li class="el-icon-star-off"></li>
				<li class="el-icon-edit-outline"></li>
				<li class="el-icon-message"></li></div>
		</div >
		<div  @click="pushto('editor',null)">发表</div>
		<div class="my-body-main">{{display}}</div>
		
	</div>
	<transition name="login">
	<Login v-show="display" v-on:change="changeDisplay"></Login>
    </transition>
	</div>
</template>
<style type="text/css">
.my-body{
	position: fixed;
	z-index: 1;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;

}
.my-body-header{
	width: 100%;
	height: 20%;;
	background-color:#303133;
	color: white;
}
.my-body-header .toLogin{
	width: 100%;
	height: 2em;
	text-align: center;
}
.my-body-main{
	width: 100%;
	height: 80%;
	background:white;
}
/* 动画*/
.login-enter-active{
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
}
</style>
<script type="text/javascript">
import Login from "../login/login"
export default{
	data(){
		return{
			display:0
		}
	},
	methods:{
	   changeDisplay:function(val){
	   	this.display=val;
	   }
	},
	components:{Login}
}
</script>