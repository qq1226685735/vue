<template>
	<div id="new">
		<div class="newheader"><div class="back" @click="back()"><li class="el-icon-arrow-left" style="font-size:30px"></li></div>
    <div style="width:8em;margin:0 auto;text-align:center">
       <div id="topimg" style="float:left;width:1.5em;height:1.5em;border-radius:50%;overflow:hidden;background-color: #e6e6e6;"><img :src="author.userimg" onerror="this.src='http://127.0.0.1:8081/images/none.png'" width="100%" height="100%" /></div>{{author.username}} 
    </div>

    <div style="
    clear:both;position:absolute;right:0;top:0;width:2em;height:2em;margin-right:0em;"><img src="@/assets/images/icon/更多.png" width="100%" height="100%" id="img1"/></div> </div>
		<div class="wrapper2" ref="wrapper2">
          <div class="content2">
          	<div class="top-tip" v-show="topshow">{{toptip}}</div>
		    <div class="newtitle">{{nw.newtitle}}</div>
		    <div class="newdetail">

          <div id="userimg"><img :src="author.userimg" onerror="this.src='http://127.0.0.1:8081/images/none.png'" width="100%" height="100%" /></div>
          <div  id="name">
          	<div>{{author.username}}</div>
          	<div>{{nw.puttime}}</div>
          </div>
		    </div>
		    <div class="newcontent"><span v-html="nw.newcontent"></span></div>
		    <div class="newadmire"><div id="admire" @click="admiresub()">
        <div id="admireimg"><img :src="admireimg" width="100%" height="100%" id="img1"/>
        </div>{{newadmirenum}}</div>
        <div id="reserve" @click="reservesub()"><div id="reserveimg"><img src="@/assets/images/icon/收藏.png" width="100%" height="100%" />
        </div>
        {{newreversenum}}
        </div>
      </div>
		    <div class="newcomment">
        <Comment v-for="(n,index) in comments"  :key="n.id">
        <img :src="users[index].userimg" onerror="this.src='http://127.0.0.1:8081/images/none.png'" slot="photo" width="100%" height="100%" ></img>
        <span slot="username" >{{users[index].username}}</span>
          <span slot="comment" >{{n.commentcontent}}</span>
        <span slot="date" >{{dates[index]}}</span>
        <div slot="admire"  id="admire" @click="admirecom(n.id,index)">
        <div id="admireimg"><img :src="admirecomimg[index]" width="100%" height="100%" id="img1"/>
        </div>{{commentadmirenum[index]}}</div>
        </Comment>

        </div>
		     <div v-if="loadingshow">
	   <div id="loading-tip" ><span style="font-size:0.8em;color:gray;line-height:0.8em;">加载中</span></div>
       <Loading ></Loading>
        </div>
         <div id="loading-tip" v-else>
        <span style="font-size:0.8em;color:gray;line-height:0.8em;">已经到底了</span>
        </div>
          </div>
        </div>
       <div class="newfooter">
        <div style="position:absolute;width:1.5em;height:1.5em;left:1em"><img src="@/assets/images/icon/发布.png" width="100%" height="100%" id="img1"/></div>
       	<input type="text" v-model="comment" placeholder="写评论..."/><div class="submitcomment" @click="submitcomment()" >发布</div>
       </div>

	</div>

</template>
<style type="text/css">
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
#new{
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: #dbdbdb;
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
.newfooter{
	position: fixed;
	width: 50%;
  left: 25%;
	height: 2em;
	bottom: 0em;
  background-color: white;
}
.newfooter input{
  border: 1px solid #dbdbdb;
 width: 80%;
 height: 2em;
 padding-left: 3em;
 margin-left: 1em;
 float: left;
 border-radius:0.5em; 
}
.newfooter .submitcomment{
  float: left;
  width: 2em;
  height: 2em;
  margin-left: 1em;
  font-size: 1em;
  line-height: 2em;
  text-align: center;
  color:gray;

}
.newheader .back{
	width: 2em;
	height: 2em;
	float: left;
}
.newtitle{
	width:100%;
	height: 3em;
	   font-family: "Times New Roman", Times, serif;
      font-size:1.3em;
        color: #000000;
        font-weight: 500;
	text-align: center;
}
.newdetial{
	width: 100%;
	height: 2em;
}
.newdetail #userimg{
  margin-left: 1em;
width: 2em;
height: 2em;
border-radius: 50%;
overflow:hidden;
float: left;
background-color: #e6e6e6;
}
.newdetail #name{
	width: 10em;
	height: 2em;
	float: left;
	margin-left: 1em;
}
.newcontent{
	clear: both;
  margin-top: 3em;
	width:100%;
 letter-spacing:1px;
 font-family: "Microsoft Yahei";
     
}
.newcontent img{
   display: block;
 max-width: 100%;
 
  margin:0 auto;
}
.newadmire{
	width:5em;
  margin:0 auto;
	height: 1em;
}
#admire{
  width: 50%;
  float: left;
}
#admireimg{
  float: left;
  width: 1em;
  height: 1em;
}
#reserve{
 width: 50%;
  float: left;
}
#reserveimg{
  float: left;
  width: 1em;
  height: 1em;
}
.newcomment{
  margin-top: 2em;
}
  .wrapper2{
    position: absolute;
  	width: 50%;
    margin-left: 25%;
    height: 90%;
  	overflow: hidden;
    margin-top:2.4%;
    background-color: white;
  }
 .content2 .top-tip{
 	width: 25%;
 	text-align: center;
 	position: absolute;
 	left:41%;
 	top: -3em;
 }
 .content2 #loading-tip{
 	width: 100%;
 	text-align: center;
 }
 @media screen and (max-width:480px){
 
  .wrapper2{
  
  	width: 100%;
  	margin-left: 0;
  	 height: 88%;
  	margin-top:10%;

  }
  .newfooter{
    width: 100%;
    left: 0;
  }
  .newfooter .submitcomment{
    margin-left: 0.2em;
  }
  .newfooter input{
    width: 70%;
  }
  
}
 @media screen and (max-width:600px){
 
   #new{
    background-color: white;
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
   		self.$ajax.post("get/newbyid",{newid:self.id},function(userdata){
				if(userdata.status==200){
				   self.nw=userdata.new;
				   self.nw["puttime"]=userdata.puttime;
				  }
				  else alert(userdata.msg);
              


			});
   		   this.$ajax.post("get/author",{userid:self.authorid},function(userdata){   

          	console.log(userdata.user);
          	console.log("呢我撒 ");
          
               self.author["username"]=userdata.username;
               self.author["userimg"]=userdata.userimg;
				 
				  
               console.log(self.author);


			});//获取新闻作者信息
         
          this.$ajax.post("/get/newadmirenum",{newid: parseInt(self.id)},function(userdata){   

           
               self.newadmirenum=userdata.number;
         
          
               console.log(self.author);


      });//获取点赞数
           this.$ajax.post("/get/newreversenum",{newid: parseInt(self.id)},function(userdata){   

           
               self.newreversenum=userdata.number;
         
          
               console.log(self.author);


      });//获取收藏数
   	},
   		initNewData(){
       let self=this;
           this.$ajax.post("get/commentbynumber",{location:0,number:self.number,newid: parseInt(self.id)},function(userdata){   

          	console.log(userdata.comments);
          	console.log("呢我撒 ");
          
               self.comments=userdata.comments;
				       self.dates=userdata.dates;
                 self.users=userdata.users;
                 self.commentadmirenum=userdata.commentnum;
				   
               console.log(self.comments);


			});
       
     	},
     	_initScroll(){
                this.scroll = new BScroll(this.$refs.wrapper2,{
                    pullUpLoad:true,
                  
                    click:true,
                    momentumLimitDistance:15,
                    momentumLimitTime:150,
                    bounce: {
  top: true,
  bottom: false

}
                 

                })
            },
        _pullingdown(){
        	let self=this;
        	 self.scroll.on('touchEnd', (pos) => {
                // 下拉动作
               
                console.log("ss");
                if (pos.y > 30) {
                	
                	console.log("sss");
               //刷新
                  
                   self.getnew();
                   self.initNewData();
                   self.location=0;
                  self.toptip="刷新成功";
                  self.loadingshow=true;
                  setTimeout(function () {
                  	self.toptip="释放刷新";
                  }, 600);
                  
                }
                else {
             
              this.scroll.refresh();
            }
              });


        },
        _pullingup(){
        let self=this;
          
         self.scroll.on('pullingUp', () => {
             console.log("DDDD");
          self.loadingshow=true;
             self.location=self.location+6;
        	console.log(self.location);
        	var t = setTimeout(function (){
   self.$ajax.post("get/commentbynumber",{location: self.location,number: self.number,newid: parseInt(self.id)},function(userdata){   
             if(userdata.comments[0]!=null){
          	console.log(userdata.comments);
          	console.log("呢我撒 ");
          	for(var a in userdata.comments){
               self.comments.push(userdata.comments[a]);
                self.dates.push(userdata.dates[a]);
                  self.users.push(userdata.users[a]);
                  self.admirecomimg.push(admireblack);
                   self.commentadmirenum.push(userdata.commentnum[a]);
          	}

        


		}
	     else {
         self.location=self.location-6;
	     	self.loadingshow=false;

	     }
			
              self.scroll.finishPullUp();
            self.scroll.refresh();
			});
         
				    
        
}, 1000);
          
          });


        },
      submitcomment(){
      let self=this;
     this.token=localStorage.getItem('token');
   	    if(this.token==null){
   	   this.replaceto("login",null);
    	}
    	else {

     self.$ajax.post("post/addcomment",{comment:self.comment,newid:self.id},function(userdata){ 
          
                if(userdata.status==200){
        
            self.initNewData();
             
          }
    
          else  if(userdata.status==435){

            self.replaceto("login",bull);
          }

           else  alert(userdata.msg);


      });
    	}

      },
      admiresub(){
        let self=this;
        self.$ajax.post("post/admirenew",{newid:self.id},function(userdata){ 
          
                if(userdata.status==200){
             self.admireimg=admirered;
            self.newadmirenum=self.newadmirenum+1;

             
          }
    
          else  if(userdata.status==435){

            self.replaceto("login",bull);
          }
          else if(userdata.status==423){
           
            alert(userdata.msg);
          }
           else  alert(userdata.msg);


      });

      }
       ,
       reservesub(){
        let self=this;
         self.$ajax.post("post/reversenew",{newid:self.id},function(userdata){ 
          
                if(userdata.status==200){
            self.newreversenum=self.newreversenum+1;

             
          }
    
          else  if(userdata.status==435){

            self.replaceto("login",bull);
          }
          else if(userdata.status==423){
           
            alert(userdata.msg);
          }
           else  alert(userdata.msg);


      });

       },
        admirecom(comid,index){
          let self=this;
        self.$ajax.post("post/admirecomment",{commentid:comid},function(userdata){ 
          
                if(userdata.status==200){
           Vue.set(self.commentadmirenum, index,self.commentadmirenum[index]+1)


             
          }
    
          else  if(userdata.status==435){
           alert("请登录");
            self.replaceto("login",null);
          }
          else if(userdata.status==423){
           
            alert(userdata.msg);
          }
           else  alert(userdata.msg);


      });

      }
   },
   computed:{
    getusername(){
        let user=this.users[1];

        
      },
      getuserimg(index){
        let user=this.users[index];
        return user.userimg;
        
      },
   },
   mounted(){ 
   	let self=this;
        self.id=self.$route.query.id;
        self.location=0;
        self.authorid=self.$route.query.user;
		self.getnew();
		self.initNewData();
        self.$nextTick(() => {
           self._initScroll();
              self._pullingdown();
               self._pullingup();
              


             });

	}
}
</script>