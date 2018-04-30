<template>
	<div class="hotspot">
	<span>轻松一刻</span>
  <NewContent v-for="n in 5"></NewContent>
    </div>
</template>
<script type="text/javascript">
import NewContent from '../homeMainLeft/newContent.vue'
export default{
  name:'main-right',
  components:{NewContent}
}
</script>
<style lang="sass">

@import 'hotspot.scss'
</style>