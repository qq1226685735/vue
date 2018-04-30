<template>
  <div class="main-right">
   <Account></Account>
   <Hotspot></Hotspot>
   
    </div>
</template>
<script type="text/javascript">
import Account from './homeMainRight/account.vue'
import Hotspot from './homeMainRight/hotspot.vue'

export default{
  name:'main-right',
  components:{Account,Hotspot}
}
</script>
<style lang="scss">

  .main-right{
    float: left;
    width: 22em;
    height: 40em;
    margin-top: 3em;
    margin-left: 2em;
  
  }
@media screen and (max-width:480px){

  .main-right{
  display: none;
  }
  
}
</style>