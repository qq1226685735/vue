<style type="text/css">
	#detail{
		position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	background-color: red;
	left: 0;
	z-index: 2;
	}
	#back{
 
  width: 3em;
  height: 3em;
  text-align: center;
		
        
	}
</style>
<template>
	
	<div id="detail" >
		<div  id="back" @click="back()">返回</div>
        <h3>标题{{newid}}</h3>
        <div>内容{{newid}}</div>

	</div>
</template>
<script type="text/javascript">
	export default{
		name:'newDetail',
		methods:{
			back:function(){
				history.back(-1)
			}
		},
		data(){
			return{
				newid:this.$route.params.newid
			}
		}
	}
</script>