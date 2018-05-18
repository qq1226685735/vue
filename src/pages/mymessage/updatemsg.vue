<template>
	<div class="updatemsg">
	<div class="newheader"><div class="back" @click="back()" style="position:absolute;left:0"><li class="el-icon-arrow-left" style="font-size:30px"></li></div>
    <div style="width:4em;margin:0 auto;text-align:center;line-height:2em;">
    	修改资料
    </div>

    <div style="
    clear:both;position:absolute;right:0;top:0;width:2em;height:2em;margin-right:0em;"><img src="@/assets/images/icon/更多.png" width="100%" height="100%" id="img1"/></div> </div>
	  <div class="set"><el-input v-model="username" placeholder="请输入新的用户名"></el-input></div>
	   <div class="set"><el-input v-model="password" placeholder="请输入新的密码" type="password"></el-input></div>
       <div class="headimg" style=" width: 80%;
   height: 3em;
   margin:0 auto;">头像:<input type="file" name="userimg" accept="image/gif,image/jpeg,image/jpg,image/png"  ref="userimg"></input></div>
       <div style=" width: 80%;
   height: 3em;
   margin:0 auto;">性别:

   <el-select v-model="sex" placeholder="请选择">
    <el-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
    </el-option>
  </el-select>

     </div>
      <div  class="set" style="margin:0 auto;border-bottom: 0px"><el-button round @click="submit()">提交</el-button></div>
	</div>

</template>
<style type="text/css">
.updatemsg{
	position:absolute;
	width:100%;
	height: 100%;
	z-index: 100;
	top: 0;
	left: 0; 
}
.updatemsg .set{
	 width: 80%;
   height: 3em;
   font-size: 1.2em;
   line-height: 3em;
   margin:0 auto;
}	
</style>
<script type="text/javascript">
export default{
	data(){
		return{
			username:"",
			sex:"",
			token:"",
			password:"",
			 options2: [{
          value: '男',
          label: '男'
        }, {
          value: '女',
          label: '女'
          
        }],
           
		}
	},
	methods:{
		submit:function () {
			self=this;
			if (this.$refs.userimg.files.length !== 0) {
          var user = new FormData()
          user.append('userimg', this.$refs.userimg.files[0]);
          user.append('sex',this.sex);
          user.append('username',this.username);
           user.append('token',this.token);
            user.append('password',this.password);
          this.$axios.post(self.$url+'api/post/updateuser', user, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }).then(function(response){
				if(response.data.status==200){
				
				  localStorage.setItem('username',response.data.user["username"]);
				  
				
				localStorage.setItem('userimg',response.data.user["userimg"]);
				localStorage.setItem('id',response.data.user["id"]);
				localStorage.setItem('sex',response.data.user["sex"]);
				
				localStorage.setItem('permission',response.data.user["permission"]);
				let createtime=response.data.createtime;
				    localStorage.setItem('createtime',createtime);
				alert("更改成功");
				 self.back();
				  }
				  else if(response.data.status==427){
                     alert(response.data.msg);
                     self.replaceto("login",null);

				  }
				  else  alert(response.data.msg);

				  	
              


			}).catch(function (error) {
    console.log(error);
    });
        }
        else alert("文件错误");
      },

		},
		mounted(){

			 this.token=localStorage.getItem('token');
		
   	      if(this.token==null){
   	    this.replaceto("login",null);
   	    }
		}
	}

</script>