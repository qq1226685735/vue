<template>
  <div class="main-right">
   <Account></Account>
   <Joke></Joke>
   
    </div>
</template>
<script type="text/javascript">
import Account from './homeMainRight/account.vue'
import Joke from './homeMainRight/joke.vue'

export default{
  name:'main-right',
  components:{Account,Joke},
  
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