<template>
  <div>

   <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>  <!-- 设置缓存路由 -->
    <router-view v-if="!$route.meta.keepAlive">
    
    </router-view> 

  </div>

</template>

<script>
export default {
  name: 'App',
	watch: {
    $route (to, from) {
      // 对路由变化作出响应...
     console.log(to);  
     console.log(from);  
    }
}

}
</script>

<style>

*{
  margin:0;
  padding: 0;
  	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;

}
</style>
