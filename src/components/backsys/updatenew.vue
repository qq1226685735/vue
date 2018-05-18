<template>
	<div>
 <el-container class="container">
     <el-main>
      <table>
        <tr>
          <td>新闻id</td>
           <td>新闻标题</td>
           <td>新闻类型</td>
           <td>新闻内容</td>
            <td>发表用户id</td>
             <td>浏览数</td>
              <td>评论数</td>
              <td>操作</td>
        </tr>
        <tr v-for="n in newlist">
           <td>{{n.id}}</td>
           <td>{{n.newtitle}}</td>
            <td>{{n.newtype}}</td>
             <td> <el-button type="text" @click="setcontent(n.newcontent)">查看新闻</el-button></td>

             <td>{{n.userid}}</td>
              <td>{{n.looknumber}}</td>
               <td>{{n.commentnumber}}</td>
               <td> <el-button type="danger" size="mini" plain @click="deletenew(n.id)">修改</el-button></td>
          
        </tr>
      </table>
  
     <el-pagination
  background
  :page-size="6"
  layout="prev, pager, next"
  @current-change="handleCurrentChange"
  :total="newnumber">
</el-pagination>
    </el-main>
</el-container>
 <div  class="newshow" v-show="isshow">
 	
 <div ><i class="el-icon-close" style="font-size:30px;float:right" @click="isshow=false"></i></div>
 <div v-html="newcontent" ></div>
 </div>
 </div>
</template>
<style  scoped>
table{
      position: relative;
    overflow: hidden;
    box-sizing: border-box;
    flex: 1;
    width: 100%;
    max-width: 100%;
    background-color: #fff;
    font-size: 14px;
    color: #606266;
}
tr{
      display: table-row;
    vertical-align: inherit;
    border-color: inherit;
    background-color: #fff;
}
td{
  padding: 10px 0;

    min-width: 0;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    border-bottom: 1px solid #ebeef5;
}
.newshow{
	position:fixed;
	width:80%;
	left:10%;
	top:0;
	height:100%;
	overflow-y:scroll;
	background-color: white;
}
.newshow img{
   display: block;
 max-width: 100%;
 
  margin:0 auto;
}
</style>
<script type="text/javascript">
export default {
    data() {
      return {
        newlist: [{date:"ss",userid:"sdfs",reason:"ss"}],
          location:0,
         number:6,
         newnumber:0,
         isshow: false,
         newcontent:""
      }
    },
    methods:{
       getData(){
        let   self=this;
          this.$ajax.post("get/newbynumbertwo",{location: self.location,number: self.number},function(userdata){   

            console.log(userdata.newlist);
            console.log("呢我撒 ");
          
               self.newlist=userdata.newlist;
             self.newnumber=userdata.newnumber;
          
               console.log(self.newlist);


      });
    }, 
    handleCurrentChange(val) {
        let   self=this;
        let location=val*6-6;
          this.$ajax.post("get/newbynumbertwo",{location: location,number: self.number},function(userdata){   

            console.log(userdata.newlist);
            console.log("呢我撒 ");
          
               self.newlist=userdata.newlist;
             
          
               console.log(self.newlist);


      });
      },
      setcontent(content){
        this.newcontent=content;
        this.isshow=true;
       },

      deletenew(id) {
          let self=this;
        this.$confirm('是否删除该用户', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.delete(id);
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
      }
    },
    mounted(){
      this.getData();
    }
  };
</script>