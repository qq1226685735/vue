<template>
  <div class="home">
   <HomeHeader></HomeHeader>
   <HomeNav v-on:selectComp="selectwhich(which,news)"></HomeNav>
   
   <div class="home-main">
   <component :is="which"  class="main-left"></component>
   <HomeMainRight></HomeMainRight>
   </div>

  </div>
</template>

<script>
import HomeHeader from './home/homeHeader.vue'
import HomeNav from './home/homeNav.vue'
import HomeMainLeft from './home/homeMainLeft.vue'
import HomeMainRight from './home/homeMainRight.vue'
import NewsByType from './home/newsbytype.vue'
import BScroll from 'better-scroll'
export default {
  name: 'App',
  components:{HomeHeader,HomeNav,HomeMainLeft,HomeMainRight,NewsByType},
  data(){
    return{
      which:"HomeMainLeft",
      newsbytype:[],
    }
  },
  methods:{
    selectwhich(which,news){
       this.which=which;
       this.newsbytype=news;
    }
  }
}
</script>

<style>

*{
  margin:0;
  padding: 0;
}
.home-main{
	width: 67em;
	margin-left: 15em;
	
}
 .main-left{
  position: absolute;
    height: 100%;
		width: 45em;
		
	
	}
@media screen and (max-width:480px){
.home-main {
  width: 100%;
   margin-left: 0em;
}
 .home .main-left{
   	width: 20em;
  
   	margin-top:10%;
   }
}
</style>
