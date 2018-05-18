<template>
	
	<div class="commentdetail">
		<div class="userimg"><div id="img"><slot name="photo"></slot></div></div>
		<div class="main">
        <div class="username"><slot name="username"></slot></div>
        <div class="comment"><slot name="comment"></slot></div>
        <div class="date"><slot name="date"></slot></div>
		</div>
		<slot name="admire"></slot>
		
	</div>


</template>
<script type="text/javascript">
import admireblack from '@/assets/images/icon/点赞.png'
import admirered from '@/assets/images/icon/点赞red.png'
export default{

	data(){
		return{
			 admireimg:admireblack
		}
	}
}
</script>
<style  scoped>
  .commentdetail {
    position: relative;
    width: 100%;
    min-height: 3em;
}
 .commentdetail .userimg{
 	position: absolute;
 	width: 20%;
 	left: 0;

 }
 .commentdetail .userimg #img{
 	width: 2em;
 	height: 2em;
 	margin:0 auto;
 	border-radius: 50%;
  background-color: #e6e6e6;
 	overflow: hidden;
 }
  .commentdetail .main{
  	position: relative;
  	width: 80%;
  	 min-height: 3em;
  	 margin-left: 20%;
  }
  .username{
  	color: #409EFF;
  	font-size: 1em;
  }
  .comment{
  	color: black;
  	font-size: 1em;
  	 letter-spacing:0px;
  }
  .date{
  	color: gray;
  	font-size: 1em;
  }
  #admire{
  	clear: both;
   position: absolute;
   right: 0;
   top: 0em;
  	width:2em;
  }

#admireimg{
  float: left;
  width: 1em;
  height: 1em;
}
</style>
