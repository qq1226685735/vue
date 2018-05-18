<template>
	<header class="nav">
		<ul>
			<li v-for='nav in navs' @mouseover='num=nav.num'  @click="selectone(nav.num)"
      :class='{navchange:num==nav.num}' :id='nav.id'>{{nav.name}}</li>
		</ul>
	</header>
</template>
<script>
 
export default {
  name: 'header',
  data(){
  	return {
       navs:[{name:'首页',num:1,id:"one"},{name:'推荐',num:2,id:"two"},
             {name:'科技',num:3,id:"three"},{name:'军事',num:4,id:"four"},
             {name:'娱乐',num:5,id:"five"},{name:'财经',num:6,id:"six"},
             {name:'段子',num:7,id:"seven"},{name:'健康',num:8,id:"eight"},
             {name:'其他',num:9,id:"nine"},{name:'更多',num:10,id:"ten"}],
      num:1
  	}
  },
  methods:{

    selectone:function(index){
 switch(index)
{
case 1:
 this.$emit('selectComp','HomeMainLeft','');
  break;
case 2:
 this.$emit('selectComp','NewsByType','推荐');

  break;
case 3:
  this.$emit('selectComp','NewsByType','科技');
  break;
case 4:
  this.$emit('selectComp','NewsByType','军事');
  break;
case 5:
  this.$emit('selectComp','NewsByType','娱乐');
  break;
case 6:
  this.$emit('selectComp','NewsByType','财经');
  break;
case 7:
  this.$emit('selectComp','NewsByType','段子');
  break;
case 8:
  this.$emit('selectComp','NewsByType','健康');
  break;
case 9:
  this.$emit('selectComp','NewsByType','其他');
  break;

default:
  return "未知";
}
  }
},
  mounted(){
    // 监听更多收起点击事件
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
  }
}
</script>

<style lang="sass"  scoped>

@import 'homeNav.scss'
</style>
