<style type="text/css">
#lunbo{
    position: absolute;
    top:3em;
    left: 15em;
    width: 45em;
	height: 18em;
	
}
@media screen and (max-width:480px){
#lunbo{
	top:4em;
}
}
@media screen and (max-width:480px){
#lunbo{
  left: 0;
  width: 100%;
  height: 13em;
}
}
.imgdiv{
	position: absolute;
	width: 100%;
	height: 100%;
	

}
#button{ 
    position: absolute;
	width: 10em;
	height: 100%;
	right: 0em;
    background-color: black;
    opacity: 0.6;
   
}
#button li{
	list-style: none;
	height: 20%;
	
	color: white;
	

	
}
#button-mobile{
	  position: absolute;
	width: 100%;
	height: 2em;
	bottom: 0em;
    background-color: black;
    opacity: 0.6;
    overflow: hidden;
    display: none;
}
.ca-button{
	display:none;
}
.left-button{
position: absolute;
width: 2em;
height: 2em;
top: 5.5em;
left: 0;
background-color: black;
opacity: 0.2;
text-align: center;
border-radius: 50%;
}
.left-button:hover{
	opacity: 0.5;
}
.right-button{
position: absolute;
width: 2em;
height: 2em;
top: 5.5em;
right: 0;
opacity: 0.2;
border-radius: 50%;
text-align: center;
background-color: black;
}
.right-button:hover{
	opacity: 0.5;
}

#button-mobile li{
      position: absolute;
      width: 100%;
      height: 100%;
      line-height: 2em;
	list-style: none;
	text-align: center;
	color: white;
	

	
}


#button .changebg{
	background-color: grey;
}
@media screen and (max-width:480px){
  #button-mobile{
  	display: block;
  }
  #button{
  	display: none;
  }
  #lunbo:hover .ca-button {
	 	display:block;
  } 
  
}
/*轮播过渡*/
.hide-enter-active {
  transition: all 1s ease;
}
.hide-leave-active {
  transition: all 1s ;
}
.hide-leave{
/* .slide-fade-leave-active for below version 2.1.8 */ 
  

}
.hide-leave-to{
/* .slide-fade-leave-active for below version 2.1.8 */ 
  opacity: 0;

}

.hide-enter{
 opacity: 0;

}
/*定义标题过渡*/
.title-enter-active {
  transition: all 1s ease;
}
.title-leave-active {
  transition: all 1s ;
}

.title-leave-to{
/* .slide-fade-leave-active for below version 2.1.8 */ 
  
     transform:translateY(-2em);
}

.title-enter{
   transform: translateY(2em);

}

</style>
<template>
	<div id="lunbo">
		  <transition name="hide">
		<div v-if="num==1" class="imgdiv"><img src="@/assets/images/1a.jpg" width="100%" height="100%"></div>
		 </transition>
		  <transition name="hide">
		<div v-if="num==2" class="imgdiv"><img src="@/assets/images/2a.jpg" width="100%" height="100%"></div>
		</transition>
		 <transition name="hide">
		<div v-if="num==3" class="imgdiv"><img src="@/assets/images/3a.jpg" width="100%" height="100%"></div>
		</transition>
		 <transition name="hide">
		<div v-if="num==4" class="imgdiv"><img src="@/assets/images/4a.jpg" width="100%" height="100%"></div>
			</transition>
			<transition name="hide">
		<div v-if="num==5" class="imgdiv"><img src="@/assets/images/4a.jpg" width="100%" height="100%"></div>
			</transition>
			
	   
		<ul id="button">
			<li @mouseover="num=1"  :class="{changebg:num==1}">标题1</li>
			<li @mouseover="num=2"  :class="{changebg:num==2}">
			标题2</li>
			<li @mouseover="num=3"  :class="{changebg:num==3}">
			标题3</li>
			<li @mouseover="num=4"  :class="{changebg:num==4}">
			标题4</li>
			<li @mouseover="num=5"  :class="{changebg:num==5}">
			标题5</li>
			
		</ul>
  
		<ul id="button-mobile">
			<transition name="title">
			<li @mouseover="num=1"  v-if="num==1">标题1
			</li>
			</transition>
			<transition name="title">
			<li @mouseover="num=2"  v-if="num==2">
			标题2</li>
			</transition>
			<transition name="title">
			<li @mouseover="num=3"  v-if="num==3">
			标题3</li>
			</transition>
			<transition name="title">
			<li @mouseover="num=4"  v-if="num==4">
			标题4</li>
			</transition>
			<transition name="title">
			<li @mouseover="num=5"  v-if="num==5">
			标题5</li>
			</transition>
			
		</ul>
		<div class="ca-button">
		<div class="left-button" @click="dec()"><li class="el-icon-arrow-left" style="font-size:2em;color:white"></li></div>
		<div class="right-button" @click="inc()"><li class="el-icon-arrow-right" style="font-size:2em;color:white"></li></div>
	    </div>
	</div>
</template>
<script type="text/javascript">

export default{
	name:'lunbo',
	data(){
		return{
         num:1
		}
	},
	created(){
		var that=this;
      setInterval(function(){ 
     if(that.num==4) that.num=5;
           else  that.num=(that.num+1)%5;
         	

},3000);
	},
	methods:{

		inc:function(){
			if(this.num==4) this.num=5;
           else  this.num=(this.num+1)%5;
         	
		},
		dec:function(){
			if(this.num==1) this.num=5;
           else  this.num=(this.num-1)%5;
         	
		}
	 
	}
}

</script>