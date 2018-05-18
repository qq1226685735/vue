<template>
  <div class="home">
   <HomeHeader></HomeHeader>
   <HomeNav v-on:selectComp="selectwhich"></HomeNav>
   <div class="home-main">
   <component :is="which" :newtype="newsbytype" class="main-left"></component>
   <HomeMainRight></HomeMainRight>
   </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import HomeHeader from '@/components/home/homeHeader.vue'
import HomeNav from '@/components/home/homeNav.vue'
import HomeMainLeft from '@/components/home/homeMainLeft.vue'
import HomeMainRight from '@/components/home/homeMainRight.vue'
import NewsByType from '@/components/home/newsbytype.vue'
export default {
  name: 'App',
  components:{HomeHeader,HomeNav,HomeMainLeft,HomeMainRight,NewsByType},
  data(){
    return{
     which:"",
      newsbytype:""

    }
  },
  methods:{
    selectwhich(whichcom,type){
       this.which=whichcom;
       this.newsbytype=type;
    }
  },
  mounted(){
    this.which=HomeMainLeft;
  }
}
</script>

<style  scoped>

*{
  margin:0;
  padding: 0;
}
.home-main{
	width: 69em;
	margin-left: 15em;
	
}

@media screen and (max-width:480px){
.home-main {
	width: 100%;
   margin-left: 0em;
}

}
</style>
