<style type="text/css">
.new-detail{

	width: 100%;
	height: 8em;
	border-bottom: 1px solid grey;
	color: black;
	 animation:newcomp_animation 2s;
	
}
@keyframes newcomp_animation
{
from {opacity: 0}
to {opacity: 1}
}
.new-detail:active{

	background-color: grey;
	
}
a{

text-decoration:none;

}

a{
background-color: grey;

}
.title-photo{
	width: 100%;
	height: 4em
}
.title{
	width:70%;
	height: 100%;

	float: left;
}
.photo{
	width: 30%;
	height: 100%;
	
	float: left;
}	
.content{
	width: 100%;
	height: 4em;
	
}	

</style>
<template>
	<router-link :to="newpath">
	<div class="new-detail">
      <div class="title-photo">
      	<div class="title"><slot name="title"></slot></div>
      	<div class="photo"><slot name="photo"></slot></div>
      </div>
      <div class="content"><slot name="content"></slot></div>
		
	</div>

	   </router-link>

</template>
<script type="text/javascript">
	
	export default{
		name:'newComp',
		props:['newid'],
		computed:{
			newpath(){
				return '/new/'+this.newid;
			}
		}
	}
</script>