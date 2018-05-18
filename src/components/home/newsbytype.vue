<template>
	<div class="wrapper3" ref="wrapper3">
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
</template>
<script type="text/javascript">
import BScroll from 'better-scroll'
import NewContent from './homeMainLeft/newContent.vue'
import Loading from './homeMainLeft/loading.vue'
export default{
	name:'recommend',
  props:['newtype'],
	components:{NewContent,Loading},
  data(){
    return{
         news:[{newtitle:"第三方",newimg:this.$url+"upload/1.jpg"}],
         location:0,
         number:6,
         toptip:"释放刷新",
         topshow:true,
         loadingshow:false,
    
    }
  },
  methods:{
      initNewData(){
          let self=this;
          this.$ajax.post("get/newbytype",{location: self.location,number: self.number,type: self.newtype},function(userdata){   

            console.log(userdata.news);
            console.log("呢我撒 ");
          
               self.news=userdata.news;
         
          
               console.log(self.news);


      });
  },
  _initScroll(){
                this.scroll = new BScroll(this.$refs.wrapper3,{
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
                  self.$ajax.post("get/newbytype",{location:0,number:self.number,type:self.newtype},function(userdata){ 
          
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
         let  self=this;

         self.scroll.on('pullingUp', () => {
          self.loadingshow=true;
             console.log("DDDD");
             self.location=self.location+6;
          console.log(self.location);
          var t = setTimeout(function (){
   self.$ajax.post("get/newbytype",{location: self.location,number: self.number,type:self.newtype},function(userdata){   
             if(userdata.news[0]!=null){
            console.log(userdata.news);
            console.log("呢我撒 ");
            for(var a in userdata.news){
               self.news.push(userdata.news[a]);
            }

         


    }
       else {
          
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

       } 
             
      
       

},
watch: {
  newtype:function(val){
     let  self=this;
      
      self.location=0;
       self.initNewData();
        self.$nextTick(() => {
           self._initScroll();
              self._pullingdown();
               self. _pullingup();


             });
  },
  type:function(val){
    alert(val);
  }

},
  created(){
  let self=this;
    self.initNewData();
        self.$nextTick(() => {
           self._initScroll();
              self._pullingdown();
               self. _pullingup();


             });

  }


}
</script>
<style lang="scss" scoped>
 
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
   .wrapper3{
    float: left;
    width: 45em;
    height:40em;
    margin-top: 1em;
     overflow: hidden;
  }
@media screen and (max-width:480px){
 
  .wrapper3{
    position: absolute;
    width: 100%;
    height: 90%;
    overflow: hidden;
    margin-top:10%;
  }
  
}

</style>