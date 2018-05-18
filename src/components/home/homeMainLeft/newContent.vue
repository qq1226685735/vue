<template>
	
	<div class="new-title">
      	<div class="photo"><slot name="photo"></slot></div>
      	<div class="main">
        <div class="title"><slot name="title"></slot></div>
        <div class="others"><slot name="others"></slot></div>
		</div>
		<slot name="extend"></slot>
	</div>


</template>
<script type="text/javascript">
	
	export default{
		name:'newContent',
	
		
	}
</script>
<style lang="sass" scoped>
@import "newContent.scss"
</style>
