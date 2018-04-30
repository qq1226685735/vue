<template>
	<div id="header">
		<div class="my" @click="pushto('my',null)"><li class="el-icon-menu" style="font-size:20px"></li></div>
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
    opacity: 0.9;

}
.search{
	width: 17em;
	position: absolute;
	font-size: 16px;
	right: 0;
}
.my{
	width: 3em;
		font-size: 16px;
	position: absolute;
    left: 0;
}

</style>
<script type="text/javascript">
import Search from "./search"	
	export default{
   components:{Search},
	}
</script>
