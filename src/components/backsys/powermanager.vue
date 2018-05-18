<template>
 <el-container>
     <el-main>
      <table>
        <tr>
          <td>日期</td>
           <td>用户id</td>
            <td>申请理由</td>
             <td>申请角色</td>
              <td>操作</td>
        </tr>
        <tr v-for="n in powerlist">
           <td>{{n.date}}</td>
           <td>{{n.userid}}</td>
            <td><el-button type="text" @click="open(n.reason)">点击查看理由</el-button></td>
             <td>{{n.role|per}}</td>
              <td><el-button type="success" size="mini" plain @click="open2(n.id,n.userid,n.role)">同意</el-button> <el-button type="danger" size="mini"plain @click="open3(n.id,n.userid,n.role)">拒绝</el-button></td>
          
        </tr>
      </table>
     <el-pagination
  background
  :page-size="6"
  layout="prev, pager, next"
  @current-change="handleCurrentChange"
  :total="powernumber">
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
        powerlist: [{date:"ss",userid:"sdfs",reason:"ss"}],
          location:0,
         number:6,
         powernumber:0
      }
    },
    methods:{
       getData(){
        let   self=this;
          this.$ajax.post("get/powerbynumber",{location: self.location,number: self.number},function(userdata){   

            console.log(userdata.powerlist);
            console.log("呢我撒 ");
          
               self.powerlist=userdata.powerlist;
             self.powernumber=userdata.powernumber;
          
               console.log(self.powerlist);


      });
    }, 
    handleCurrentChange(val) {
        let   self=this;
        let location=val*6-6;
          this.$ajax.post("get/powerbynumber",{location: location,number: self.number},function(userdata){   

            console.log(userdata.powerlist);
            console.log("呢我撒 ");
          
               self.powerlist=userdata.powerlist;
             
          
               console.log(self.powerlist);


      });
      },
       upuser(id,userid,role){
         let  self=this;
         alert(id+userid+role);
          self.$ajax.post("put/uppowerbyuserid",{powerid:id,userid:userid,role:role},function(userdata){   
        
           self.msg=userdata.msg;
           self.$message({
            type: 'success',
            message: self.msg
          });
           
           self.getData();


      });
       },
       deny(id,userid,role){
         let  self=this;
          self.$ajax.post("put/denyuppower",{powerid:id,userid:userid,role:role},function(userdata){   
        
           self.msg=userdata.msg;
           self.$message({
            type: 'success',
            message: self.msg
          });
           
           self.getData();


      });
       },
     open(msg) {
        this.$alert(msg, '申请理由', {
          confirmButtonText: '确定',
         });
      },
        open2(id,userid,role) {
          let self=this;
        this.$confirm('是否同意', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.upuser(id,userid,role);
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
      },
        open3(id,userid,role) {
          let self=this;
        this.$confirm('是否拒绝', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.deny(id,userid,role);
          
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