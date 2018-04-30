<template>
	<div>

	<NewContent v-for="n in 8"></NewContent>

	</div>
</template>
<script type="text/javascript">
import NewContent from './homeMainLeft/newContent.vue'

export default{
	name:'recommend',
	components:{NewContent}
}
</script>
<style lang="scss">
 

 
@media screen and (max-width:480px){
   .main-left{
   	width: 100%;
   }
   .main-left-newContent{
  	margin-top:13em;
  }
  
}
</style>