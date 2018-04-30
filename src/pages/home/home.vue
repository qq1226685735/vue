<template>
  <div class="home">
   <HomeHeader></HomeHeader>
   <HomeNav v-on:selectComp="which=arguments[0]"></HomeNav>
   <div class="home-main">
   <component :is="which"  class="main-left"></component>
   <HomeMainRight></HomeMainRight>
   </div>
  </div>
</template>

<script>
import HomeHeader from '@/components/home/homeHeader.vue'
import HomeNav from '@/components/home/homeNav.vue'
import HomeMainLeft from '@/components/home/homeMainLeft.vue'
import HomeMainRight from '@/components/home/homeMainRight.vue'
import Recommend from '@/components/home/Recommend.vue'
export default {
  name: 'App',
  components:{HomeHeader,HomeNav,HomeMainLeft,HomeMainRight,Recommend},
  data(){
    return{
      which:"HomeMainLeft"
    }
  },
}
</script>

<style>

*{
  margin:0;
  padding: 0;
}
.home-main{
	width: 100%;
	margin-left: 15em;
	
}
 .main-left{
        float: left;
		width: 45em;
		height:40em;
		
		margin-top: 3em;
	}
@media screen and (max-width:480px){
.home-main {
   margin-left: 0em;
}
 .main-left{
   	width: 100%;
   	margin-top: 4em;
   }
}
</style>
