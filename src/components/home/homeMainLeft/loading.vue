<style type="text/css">
	#loading{
	
		height: 10px;
		width: 100%;
	
	}
	#loading-center{
		width: 10em;
	
		margin:0 auto;
		
	}
	#loading-center-absolute {
		margin-left:4em;
		height: 10px;
		width: 8em;
	
		
	}
	.object{
		width:10px;
		height: 10px;
		margin:0 auto;
		background-color: grey;
		float: left;
		margin-right: 8px;
		-moz-border-radius: 50% 50% 50% 50%;
		-webkit-border-radius: 50% 50% 50% 50%;
		border-radius: 50% 50% 50% 50%;
	}

	#object_one {	
		-webkit-animation: object_one 1.5s infinite;
		animation: object_one 1.5s infinite;
		}
	#object_two {
		-webkit-animation: object_two 1.5s infinite;
		animation: object_two 1.5s infinite;
		-webkit-animation-delay: 0.25s; 
	    animation-delay: 0.25s;
		}
	#object_three {
	    -webkit-animation: object_three 1.5s infinite;
		animation: object_three 1.5s infinite;
		-webkit-animation-delay: 0.5s;
	    animation-delay: 0.5s;	
		}
	@-webkit-keyframes object_one {
	75% { -webkit-transform: scale(0); }
	}
	@keyframes object_one {

	  75% { 
	    transform: scale(0);
	    -webkit-transform: scale(0);
	  }
	}
	@-webkit-keyframes object_two {
	  75% { -webkit-transform: scale(0); }
	}
	@keyframes object_two {
	  75% { 
	    transform: scale(0);
	    -webkit-transform:  scale(0);
	  }
	}
	@-webkit-keyframes object_three {

	  75% { -webkit-transform: scale(0); }
	}
	@keyframes object_three {

	  75% { 
	    transform: scale(0);
	    -webkit-transform: scale(0);
	  } 
	}
	
</style>
<template>
	<div id="loading">
		<div id="loading-center">
			<div id="loading-center-absolute">
				<div class="object" id="object_one"></div>
				<div class="object" id="object_two"></div>
				<div class="object" id="object_three"></div>
			</div>
		</div>
	</div>
	
</template>
<script type="text/javascript" src="@/assets/js/jquery-2.0.2.min.js"></script>
	<script type="text/javascript" src="@/assets/js/main.js"></script>
<script type="text/javascript">
	
</script>