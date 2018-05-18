<template>
	<div>
	<div class="account">
		<div style="text-align:center;font-size:1.5em">公告</div>
		<div class="my-message">
		<div v-for="n in announcelist">
      {{n.content}}
    </div>

		</div>
	</div>
	</div>
</template>
<script type="text/javascript">
export default{
 data(){

    return {
      announcelist:[],  
      }
   },
  methods:{
      init(){
         let self=this;
          this.$ajax.post("/get/announcebynumber",{location:0,number:1},function(userdata){   

              
                self.announcelist=userdata.announcelist;
               


      });
     
      }
    },
   mounted(){
   this.init();
       
    }
}	
</script>
<style lang="sass">
 @import "account.scss"
</style>