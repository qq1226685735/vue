<template>
 <el-container>
     <el-main>

      <table>
        <tr>
          <td>笑话id</td>
           <td>发布日期</td>
            <td>笑话内容</td>
             <td>发表用户id</td>
              <td>操作</td>
              <td><el-button type="primary" size="mini">添加笑话</el-button></td>
        </tr>
        <tr v-for="n in jokelist">
           <td>{{n.id}}</td>
           <td>{{n.date}}</td>
           <td>{{n.content}}</td>
             <td>{{n.userid}}</td>
              <td> <el-button type="danger" size="mini" plain @click="deletejoke(n.id)">删除</el-button></td>
          
        </tr>
      </table>
     <el-pagination
  background
  :page-size="6"
  layout="prev, pager, next"
  @current-change="handleCurrentChange"
  :total="jokenumber">
</el-pagination>
    </el-main>
</el-container>

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
</style>
<script type="text/javascript">
export default {
    data() {
      return {
       jokelist: [],
          location:0,
         number:6,
         jokenumber:0
      }
    },
    methods:{
       getData(){
        let   self=this;
          this.$ajax.post("get/jokebynumber",{location: self.location,number: self.number},function(userdata){   

            console.log(userdata.jokelist);
            console.log("呢我撒 ");
          
               self.jokelist=userdata.jokelist;
             self.jokenumber=userdata.jokenumber;
          
               


      });
    }, 
    handleCurrentChange(val) {
        let   self=this;
        let location=val*6-6;
          this.$ajax.post("get/jokebynumber",{location: location,number: self.number},function(userdata){   

            console.log(userdata.announcelist);
            console.log("呢我撒 ");
          
               self.jokelist=userdata.jokelist;
             
          
               console.log(self.jokelist);


      });
      },
       delete(id){
         let  self=this;
          self.$ajax.post("delete/jokebyid",{jokeid:id},function(userdata){   
        
           self.msg=userdata.msg;
           self.$message({
            type: 'success',
            message: self.msg
          });
           
           self.getData();


      });
       },

      deletejoke(id) {
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