<template>
	<div>
	<Carousel></Carousel>
	   <div class="main-left-newContent">
	<NewContent v-for="n in 8"><h1 slot="title">{{n}}</h1></NewContent>
	   </div>
	   <div id="loading-tip">正在加载</div>
  <Loading></Loading>
    </div>
	</div>
</template>
<script type="text/javascript">
import Carousel from './homeMainLeft/homeCarousel.vue'
import NewContent from './homeMainLeft/newContent.vue'
import Loading from './homeMainLeft/loading.vue'
export default{
	name:'main',
	components:{Carousel,NewContent,Loading}
}
</script>
<style lang="scss">
  
  .main-left-newContent{
  	margin-top:19em;
  }

 
@media screen and (max-width:480px){
 
   .main-left-newContent{
  	margin-top:13em;
  }
  
}
</style>