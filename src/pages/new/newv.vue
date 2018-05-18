<template>
	<div id="new">
		<div class="newheader"><div class="back" @click="back()" style="position:absolute;left:0"><li class="el-icon-arrow-left" style="font-size:30px"></li></div>
    <div style="width:4em;margin:0 auto;text-align:center;line-height:2em;">
    	审核新闻
    </div>

    <div style="
    clear:both;position:absolute;right:0;top:0;width:2em;height:2em;margin-right:0em;"><img src="@/assets/images/icon/更多.png" width="100%" height="100%" id="img1"/></div> </div>
    <div style="position:fixed;right:0;bottom:0"> <el-button type="success" @click="access()">审核通过</el-button>
      <el-button type="danger" @click="noaccess()">审核不通过</el-button></div>
    <div class="wrapper">
		    <div class="newtitle">{{nw.newtitle}}</div>
		    <div class="newcontent"><span v-html="nw.newcontent"></span></div>
	</div>   

	</div>

</template>
<style type="text/css">

#new{
	position: absolute;
	width: 100%;
	background-color: #dbdbdb;
}
.wrapper{
	width: 50%;
	margin:0 auto;
	margin-top: 2em;

}

.newheader{
	position: fixed;
	width: 100%;
	height: 2em;
	background-color: white;
  line-height: 1.5em;
  z-index: 100;
  border-bottom: 1px solid #e6e6e6;

}
.newtitle{
	width:100%;
	height: 3em;

	   font-family: "Times New Roman", Times, serif;
      font-size:1.3em;
        color: #000000;
        font-weight: 500;
	text-align: center;
	background-color: white;
}
.newcontent{


	width:100%;
  background-color: white;
 letter-spacing:1px;
 font-family: "Microsoft Yahei";
     
}
.newcontent img{
   display: block;
 max-width: 100%;
 
  margin:0 auto;
}

 @media screen and (max-width:600px){
 
   #new{
    background-color: white;
   }
   .wrapper{
	width: 100%;
	margin:0 auto;
	margin-top: 2em;

}
  
}

</style>
<script type="text/javascript">
import Vue from 'vue'
import BScroll from 'better-scroll'
import admireblack from '@/assets/images/icon/点赞.png'
import admirered from '@/assets/images/icon/点赞red.png'
import Comment from '@/components/comment/commentdetail.vue'
import Loading from '@/components/home/homeMainLeft/loading.vue'
export default{
   data(){

   	return {
   		id:"",  //新闻id
   		toptip:"释放刷新",
        topshow:true,
        loadingshow:false,
        authorid:"",
        comment:"",
         number:6,
         location:0,
         newadmirenum:0,
         newreversenum:0,
         admireimg:admireblack,
          comments:[],
          dates:[],
          users:[{username:"",userimg:""}],
          admirecomimg:[admireblack,admireblack,admireblack,admireblack,admireblack,admireblack],
          commentadmirenum:[],

   		nw:{
   			newtitle:"",
   			userid:"",
   			newcontent:"",
   			puttime:"",

   		},
   		author:{
   			username:"",
   			userimg:"",

   		}
   	}
   },
   components:{Loading,Comment},
   methods:{
   	getnew(){
   		let self=this;
   		self.$ajax.post("get/newvbyid",{newid:self.id},function(userdata){
				if(userdata.status==200){
				   self.nw=userdata.new;
				   self.nw["puttime"]=userdata.puttime;
				  }
				  else alert(userdata.msg);
              


			});
   		
     
   	},
   	access(){
     let self=this;
   		self.$ajax.post("post/newvtonew",{newid:self.id},function(userdata){
				if(userdata.status==200){
				   alert("操作成功")
				   self.back();
				  }
				  else alert(userdata.msg);
              


			});
   	},
   	noaccess(){
     let self=this;
   		self.$ajax.post("delete/newvbyid",{newid:self.id},function(userdata){
				if(userdata.status==200){
				  alert("操作成功")
				   self.back();
				  }
				  else alert(userdata.msg);
              


			});
   	}


    
   },
   mounted(){ 
   	let self=this;
        self.id=self.$route.query.id;
        self.location=0;
        self.authorid=self.$route.query.user;
		self.getnew();
      

	}
}
</script>