<template>
	<div  class="login-body">
	<div class="login">
		<div class="title">
			<div class="delete" @click="changeDisplay"><i class="el-icon-close" style="font-size:30px"></i></div>

		</div>
		<div class="form">
           <input type="text" name="username"  class="input-main" maxlength="13"  v-model="userData.username">
            <input type="password" name="password"  class="input-main" maxlength="13" v-model="userData.userpassword">
            <div  class="verify"><input type="text" name="verify" maxlength="4"><span>验证码</span></div>
            <button class="login-button" @click="login()">登录</button>
            {{userData.username}}
		</div>
	</div>
	</div>
</template>
<style type="text/css">

.login-body{
	width: 100%;
	height: 100%;
	position: fixed;
	
	z-index: 2;
}
.login{
    position: absolute;
	width: 100%;
	height: 100%;
	background-color: white;
	border-top-right-radius: 10px;
	border-top-left-radius:10px;
}
.title{
	width:100%;
	height: 2em;
}
.title .delete{
	float: right;
    right: 0em;
	width: 2em;
	height: 2em;
}

.form{
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
}
.form .input-main{
	padding-left: 3em;
	display: block;
	width: 80%;
	height: 3em;
	margin:0 auto;
	margin-top: 2em;
	border-radius: 2em;
	border: 1px solid grey;
    outline:0;
}

.form  .verify{

	width: 89%;
	margin:0 auto;
	display: block;
	border-radius: 2em;
	margin-top: 2em;
}
.form .verify input{
	padding-left: 3em;
	height: 3em;
	 border: 1px solid grey;
	 border-radius: 2em;
	 outline:0;
	 background-color: white;
}
.form input:hover{
   border: 1px solid red;
}
.form button{
	display: block;
	outline:0;
	width: 89%;
	height: 3em;
	margin:0 auto;
	margin-top: 2em;
	border-radius: 2em;
	 border: 0px solid grey;
	background-color: #909399;
	color: white;
}
.form button:hover{
	background-color:#F56C6C;
}
@media screen and (min-width: 600px) {
    .login{
    	position: absolute;
    	width:30em;
    	height: 30em;
    	left:50%;
         top:50%;
       margin-left:-15em;
        margin-top:-15em;
    }
    .form .input-main,.form button{
    	width: 60%;
    }
   .form  .verify{
   	width:67%
   }
   .form button{
   	width: 67%;
   }
    
}
</style>
<script type="text/javascript">
export default{
	data(){
		return{
			userData:{
				username:"",
				userpassword:""
			}
		}
	},
	methods:{
		changeDisplay:function(){
			this.$emit("change",0)
		},
		suc:function(data){
         alert(data);
		},
		login:function(){
			this.$ajax.post("get/login",this.userData);
		}
	}
}
</script>