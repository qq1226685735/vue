<style type="text/css">
#lunbo{
    position: absolute;
	width: 100%;
	height: 12em;
	
}
.imgdiv{
	position: absolute;
	width: 100%;
	height: 100%;
	

}
#button{ 
    position: relative;
    margin:0 auto;
	width: 8em;
	top: 10em;
   
   
}
#button li{
	list-style: none;
	width: 1em;
	height: 1em;
	margin-left:10px;
	background-color: white;
	float: left;
}
#button .changebg{
	background-color: grey;
}
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
</style>
<template>
	<div id="lunbo">
		  <transition name="hide">
		<div v-if="num==1" class="imgdiv"><img src="../../assets/1a.jpg" width="100%" height="100%"></div>
		 </transition>
		  <transition name="hide">
		<div v-if="num==2" class="imgdiv"><img src="../../assets/2a.jpg" width="100%" height="100%"></div>
		</transition>
		 <transition name="hide">
		<div v-if="num==3" class="imgdiv"><img src="../../assets/3a.jpg" width="100%" height="100%"></div>
		</transition>
		 <transition name="hide">
		<div v-if="num==4" class="imgdiv"><img src="../../assets/4a.jpg" width="100%" height="100%"></div>
			</transition>
	   
		<ul id="button">
			<li @mouseover="num=1"  :class="{changebg:num==1}">1</li>
			<li @mouseover="num=2"  :class="{changebg:num==2}">2</li>
			<li @mouseover="num=3"  :class="{changebg:num==3}">3</li>
			<li @mouseover="num=4"  :class="{changebg:num==4}">4</li>
		</ul>
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
      	that.num=(that.num+1)%4;
      	if(that.num==0) that.num=4;
      	

},3000);
	},
	methods:{
	 
	}
}

</script>