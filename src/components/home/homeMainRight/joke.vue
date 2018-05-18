<template>
	<div class="jokearea">
	<span style="font-size:1.5em;">轻松一刻</span>
   
    <div v-for="n in jokes" class="joke">
      {{n.content}}
    </div>
   
    </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
export default{
  name:'mainht',
 data(){

    return {
      jokes:[],  //新闻id
      }
   },
  props:['content'],
  methods:{
      init(){
         let self=this;
          this.$ajax.post("/get/jokebynumber",{location:0,number:6},function(userdata){   

              
                self.jokes=userdata.jokes;
               


      });
     
      }
    },
   mounted(){
   this.init();
       
    }
}
</script>
<style lang="sass">

@import 'joke.scss'
</style>