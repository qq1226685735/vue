<template>
	<div class="form">
	
	<input type="text" v-model="content"  class="input">
	<button class="submit" @click="search()">搜索</button>
	</div>
</template>
<script type="text/javascript">
export default{
	data(){
		return {
			content:""
		}
	},
	methods:{
		search(){
			this.pushto('searchresult',{msg:this.content})
		}
	}
}
</script>
<style lang="sass">
 @import "search.scss"
</style>