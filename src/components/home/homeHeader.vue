<template>
	<div id="header">
		<div class="my" @click="pushto('my',null)"><img src="@/assets/images/icon/我的.png" width="100%" height="100%" id="img1"/>
         </div>
		<Search class="search"></Search>
	</div>
</template>
<style type="text/css">
#header{
	position: fixed;
	left: 0;
	top:0;
	z-index: 2;
	width: 100%;
	height: 2em;
	text-align: center;
	font-size: 16px;
	line-height: 2em;
    background-color:#409EFF;
    color: white;

}
.search{
	width: 17em;
	position: absolute;
	font-size: 16px;
	right: 0;
}
.my{
	width: 2em;
	height: 2em;
	position: absolute;
    left: 0.5em;
}

</style>
<script type="text/javascript">
import Search from "./search"	
	export default{
   components:{Search},
	}
</script>
