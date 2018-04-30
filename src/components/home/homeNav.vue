<template>
	<header class="nav">
		<ul>
			<li v-for='nav in navs' @mouseover='num=nav.num'  @click="selectone(nav.num)"
      :class='{navchange:num==nav.num}' :id='nav.id'>{{nav.name}}</li>
		</ul>
	</header>
</template>
<script>
 var a=1;
$(function(){
 
 $("#ten").click(function(){
  if(a==1){
  $("#five").css({"display":"block"});
  $("#six").css({"display":"block"});
   $("#seven").css({"display":"block"});
    $("#eight").css({"display":"block"});
     $("#nine").css({"display":"block"});
      $("#ten").text('收起');
      a=-a;
  }else{
     $("#five").css({"display":"none"});
  $("#six").css({"display":"none"});
   $("#seven").css({"display":"none"});
    $("#eight").css({"display":"none"});
     $("#nine").css({"display":"none"});
      $("#ten").text('更多');
       a=-a;
     
  } 
  })
 
 })
export default {
  name: 'header',
  data(){
  	return {
       navs:[{name:'首页',num:1,id:"one"},{name:'推荐',num:2,id:"two"},
             {name:'科技',num:3,id:"three"},{name:'军事',num:4,id:"four"},
             {name:'娱乐',num:5,id:"five"},{name:'财经',num:6,id:"six"},
             {name:'段子',num:7,id:"seven"},{name:'美食',num:8,id:"eight"},
             {name:'健康',num:9,id:"nine"},{name:'更多',num:10,id:"ten"}],
      num:1
  	}
  },
  methods:{
    selectone:function(index){
      if(index==1)
       this.$emit('selectComp','HomeMainLeft');
     if(index==2)  this.$emit('selectComp','Recommend');
    }
  }
}
</script>

<style lang="sass">

@import 'homeNav.scss'
</style>
