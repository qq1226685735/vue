<template>
	<div  class="login-body">
	<div class="login">
		<div class="title">
			<div class="delete" @click="back()"><i class="el-icon-close" style="font-size:30px"></i></div>

		</div>
		<div class="form">
           <input type="text" name="username"  class="input-main" maxlength="13"  v-model="userData.username">
            <input type="password" name="password"  class="input-main" maxlength="13" v-model="userData.password">
            <div  class="verify"><input type="text" v-model="userData.code" maxlength="4"><span @click="changeImg()"><img id="captchaImage" width="100" height="40" :src="codeImg"></span></div>
            <button class="login-button" @click="login()">登录</button>
             <button class="login-button" @click="pushto('register')">注册</button>
         
		</div>
	</div>
	</div>
</template>
<style type="text/css"  scoped>

.login-body{
	width: 100%;
	height: 100%;
	position: fixed;
	background-image:url(../../assets/images/1.jpg);
	z-index: 2;
}
.login{
    position: absolute;
	width: 100%;
	height: 100%;
	background-color: white;

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
				password:"",
				code:""
			},
			codeapi:this.$url+"VerificationCode/generate?",
			codeImg:""
		}
	},
	methods:{
		changeImg:function(){
			
        var rad = Math.floor(Math.random() * Math.pow(10, 8));
            //uuuy是随便写的一个参数名称，后端不会做处理，作用是避免浏览器读取缓存的链接
          
           this.codeImg=this.codeapi+rad;
		},
		login:function(){
			var self=this;
			this.$ajax.post("get/login",this.userData,function(userdata){
				if(userdata.status==200){
				 localStorage.setItem('token',userdata.token);
				
				   localStorage.setItem('username',userdata.user["username"]);
				  
				
				 localStorage.setItem('userimg',userdata.user["userimg"]);
				 localStorage.setItem('id',userdata.user["id"]);
				 localStorage.setItem('sex',userdata.user["sex"]);
				
				 localStorage.setItem('permission',userdata.user["permission"]);
				let createtime=userdata.createtime;
				     localStorage.setItem('createtime',createtime);
				  alert("登陆成功");
				 self.replaceto("my",null);
				  }
				  else alert(userdata.msg);
              


			});
			
			
			
		}

	},
	mounted(){
		this.changeImg();
	}
}
</script>