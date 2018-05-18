<template>
  <div>
	<div class="newheader"><div class="back" @click="back()" style="position:absolute;left:0"><li class="el-icon-arrow-left" style="font-size:30px"></li></div>
    <div style="width:4em;margin:0 auto;text-align:center;line-height:2em;">
    	我的发表
    </div>

    <div style="
    clear:both;position:absolute;right:0;top:0;width:2em;height:2em;margin-right:0em;"><img src="@/assets/images/icon/更多.png" width="100%" height="100%" id="img1"/></div> </div>
	<div class="wrapper5" ref="wrapper5">
  <div class="content">
    <div class="top-tip" v-show="topshow">{{toptip}}</div>
     <div class="main-left-newContent">
<NewContent v-for="n in news"  :key="n.id" @click.native="opennew(n.id,n.userid)">
    <span slot="title" >{{n.newtitle}}</span>
    <img :src="n.newimg" slot="photo" width="100%" height="100%"></img>
   <span slot="others" ><span>{{n.commentnumber}}评论</span>
    <span  style="padding-left:1em;">{{n.looknumber}}浏览</span>
      <span style="float:right;margin-right:1em;">类型:{{n.newtype}}</span>

 </span>
 <div slot="extend" class="extend" @click.stop="open2(n.id)"  style="position:absolute;right:1em;margin-top:2.5em;width:1em;height:1em;" ><el-button type="danger" icon="el-icon-delete" circle style="transform:scale(0.6)" ></el-button></div>
  </NewContent>
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
   .wrapper5{
    width: 45em;
    height:40em;
    margin:0 auto;
    overflow: hidden;
  }
@media screen and (max-width:480px){
 
  .wrapper5{
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
         news:[],
         location:0,
         number:8,
         toptip:"释放刷新",
         topshow:true,
         loadingshow:false,
    }
  },
  methods:{
      initNewData(){
        let   self=this;
          this.$ajax.post("get/newbyuserid",{location: self.location,number: self.number},function(userdata){   

            console.log(userdata.news);
            console.log("呢我撒 ");
          
               self.news=userdata.news;
         
          
               console.log(self.news);


      });
  },
  _initScroll(){
                this.scroll = new BScroll(this.$refs.wrapper5,{
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
                  self.$ajax.post("get/newbyuserid",{location:0,number:self.number},function(userdata){ 
          
               self.news=userdata.news;
          
               console.log(self.news);


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
   self.$ajax.post("get/newbyuserid",{location: self.location,number: self.number},function(userdata){   
             if(userdata.news[0]!=null){
            console.log(userdata.news);
            console.log("呢我撒 ");
            for(var a in userdata.news){
               self.news.push(userdata.news[a]);
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

       opennew(newid,userid){
       this.pushto('/new',{id:newid,user:userid})

       },
       deletenew(id){
         let  self=this;
          self.$ajax.post("get/deletebynewid",{newid:id},function(userdata){   
        
           self.msg=userdata.msg;
           self.$message({
            type: 'success',
            message: self.msg
          });
           
           self.initNewData();


      });
       },
        open2(id) {
          let self=this;
        this.$confirm('将删除本条新闻, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.deletenew(id);
          
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
