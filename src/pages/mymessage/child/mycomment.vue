<template>
  <div>
	<div class="newheader"><div class="back" @click="back()" style="position:absolute;left:0"><li class="el-icon-arrow-left" style="font-size:30px"></li></div>
    <div style="width:4em;margin:0 auto;text-align:center;line-height:2em;">
    	我的评论
    </div>

    <div style="
    clear:both;position:absolute;right:0;top:0;width:2em;height:2em;margin-right:0em;"><img src="@/assets/images/icon/更多.png" width="100%" height="100%" id="img1"/></div> </div>
	<div class="wrapper6" ref="wrapper6">
  <div class="content">
    <div class="top-tip" v-show="topshow">{{toptip}}</div>
     <div class="main-left-newContent">

   <div class="intro">
   	<ul >
   	<li>新闻名称</li>
   	<li>评论日期</li>
   	<li>评论内容</li>
   	<li>操作</li>
   </ul>
   	</div>
   	<div v-for="(n,index) in comments"  class="comment">
   		<div>{{n.newtitle}}</div>
   		<div>{{dates[index]}}</div>
   		<div>{{n.commentcontent}}</div>
   		<div><button @click="opennew(n.newid,n.userid)">查看</button> <el-button type="text" @click="open2(n.id)">删除</el-button></div>

   	</div>
   </div>
  <div v-if="loadingshow">
     <div id="loading-tip" ><span style="font-size:0.8em;color:gray;line-height:0.8em;">加载中</span></div>
       <Loading ></Loading>
        </div>
        <div id="loading-tip" v-else>
        <span style="font-size:0.8em;color:gray;line-height:0.8em;">已经到底了</span>
        </div>
  <div class="loading-wrapper"></div>
 </div>
	</div>

	</div>
</template>
<style lang="scss" scoped>
 .newheader{
	position: fixed;
	width: 100%;
	height: 2em;
	background-color: white;
  line-height: 1.5em;
  z-index: 100;
  border-bottom: 1px solid #e6e6e6;

}

  .main-left-newContent{
    margin-top:0em;
    height: auto;
    margin-top: 1em;
  }
  .intro{
  	width: 100%;
  	height: 2em;
  	background-color: #409EFF;

  }
  .intro li{
  	line-height: 2em;
     width: 25%;
     text-align: center;
  	list-style: none;
  	color: white;
  	float: left;
  }
  .comment{

  	width: 100%;
  	height: 5em;
  	border-bottom: 1px solid gray;
  }
  .comment div{
  	text-align: center;
  	width: 25%;
  	height: 100%;
  	float: left;
  	overflow: hidden;
  }
 .top-tip{
  width: 25%;
  text-align: center;
  margin: 0 auto;
  position: relative;
  bottom:1em;
 }
 #loading-tip{
  text-align: center;
 }
   .wrapper6{
    width: 45em;
    height:40em;
    margin:0 auto;
     overflow: hidden;
  }
@media screen and (max-width:480px){
 
  .wrapper6{
    position: absolute;
    width: 100%;
    height: 90%;
    overflow: hidden;
  }
  
}

</style>
<script type="text/javascript">
import BScroll from 'better-scroll'
import NewContent from '@/components/home/homeMainLeft/newContent.vue'
import Loading from '@/components/home/homeMainLeft/loading.vue'
export default{
	name:'recommend',
  props:['newtype'],
	components:{NewContent,Loading},
  data(){
    return{
         comments:[],
         dates:[],
         location:0,
         msg:'',
         number:8,
         toptip:"释放刷新",
         topshow:true,
         loadingshow:false,
    }
  },
  methods:{
      initNewData(){
         let  self=this;
          self.$ajax.post("get/commentbyuserid",{location: self.location,number: self.number},function(userdata){   

            console.log(userdata.comments);
            console.log("呢我撒 ");
          
               self.comments=userdata.comments;
         
              self.dates=userdata.dates;
               console.log(self.comments);


      });
  },
  _initScroll(){
                this.scroll = new BScroll(this.$refs.wrapper6,{
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
       let   self=this;
           self.scroll.on('touchEnd', (pos) => {
                // 下拉动作

                console.log("ss");
                if (pos.y > 30) {
                  
                  console.log("sss");
               //刷新
                  self.$ajax.post("get/commentbyuserid",{location:0,number:self.number},function(userdata){ 
          
               self.comments=userdata.comments;
          self.dates=userdata.dates;
               console.log(self.comments);


      });
                  self.location=0;
                  self.toptip="刷新成功";
          
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
       let   self=this;

         self.scroll.on('pullingUp', () => {
          self.loadingshow=true;
             console.log("DDDD");
             self.location=self.location+8;
          console.log(self.location);
          var t = setTimeout(function (){
   self.$ajax.post("get/commentbyuserid",{location: self.location,number: self.number},function(userdata){   
             if(userdata.comments[0]!=null){
            console.log(userdata.comments);
            console.log("呢我撒 ");
            for(var a in userdata.comments){
               self.comments.push(userdata.comments[a]);
                self.dates.push(userdata.dates[a]);
       
            }

         


    }
       else {
           self.location=self.location-8;
        self.loadingshow=false;
       }
      
         self.scroll.finishPullUp();
            self.scroll.refresh();

      });
         
            
        
}, 1000);
          
          });


        },
        delete(id){
       let  self=this;
          self.$ajax.post("get/deletebycommentid",{commentid:id},function(userdata){   
        
           self.msg=userdata.msg;
           self.$message({
            type: 'success',
            message: self.msg
          });
           self.initNewData();


      });
        },
    
       opennew(newid,userid){
       this.pushto('/new',{id:newid,user:userid})

       },
        open2(id) {
        	let self=this;
        this.$confirm('将删除本条评论, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.delete(id);
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
             
      
       

},
  mounted(){
  	  this.token=localStorage.getItem('token');
   	    if(this.token==null){
   	    	alert("请登录");
   	   this.replaceto("login",null);
   	}
    let   self=this;
       self.initNewData();
        self.$nextTick(() => {
           self._initScroll();
              self._pullingdown();
               self. _pullingup();


             });

  }

}
</script>
