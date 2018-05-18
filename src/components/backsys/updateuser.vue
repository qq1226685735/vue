<template>
 <el-container>
     <el-main>
      <table>
        <tr>
          <td>用户id</td>
           <td>用户名</td>
            <td>用户性别</td>
             <td>用户权限</td>
              <td>用户头像</td>
              <td>操作</td>
        </tr>
        <tr v-for="n in userlist">
           <td>{{n.id}}</td>
           <td>{{n.username}}</td>
           <td>{{n.sex}}</td>
             <td>{{n.permission|per}}</td>
              <td><img :src="n.userimg" onerror="this.src='http://127.0.0.1:8081/images/none.png'" width="32" height="32" /></td>
              <td> <el-button type="danger" size="mini" plain @click="deleteuser(n.id)">修改</el-button></td>
          
        </tr>
      </table>
     <el-pagination
  background
  :page-size="6"
  layout="prev, pager, next"
  @current-change="handleCurrentChange"
  :total="usernumber">
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
       userlist: [],
          location:0,
         number:6,
         usernumber:0
      }
    },
    methods:{
       getData(){
        let   self=this;
          this.$ajax.post("get/userbynumber",{location: self.location,number: self.number},function(userdata){   

            console.log(userdata.userlist);
            console.log("呢我撒 ");
          
               self.userlist=userdata.userlist;
             self.usernumber=userdata.usernumber;
          
               


      });
    }, 
    handleCurrentChange(val) {
        let   self=this;
        let location=val*6-6;
          this.$ajax.post("get/userbynumber",{location: location,number: self.number},function(userdata){   

            console.log(userdata.userlist);
            console.log("呢我撒 ");
          
               self.userlist=userdata.userlist;
             
          
               console.log(self.userlist);


      });
      },
       delete(id){
         let  self=this;
          self.$ajax.post("delete/userbyid",{userid:id},function(userdata){   
        
           self.msg=userdata.msg;
           self.$message({
            type: 'success',
            message: self.msg
          });
           
           self.getData();


      });
       },

       deleteuser(id) {
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