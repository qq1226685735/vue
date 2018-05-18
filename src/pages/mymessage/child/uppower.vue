<template>
  <div>
    <div class="newheader"><div class="back" @click="back()" style="position:absolute;left:0"><li class="el-icon-arrow-left" style="font-size:30px"></li></div>
    <div style="width:4em;margin:0 auto;text-align:center;line-height:2em;">
      权限申请
    </div>
 
     <div style="
    clear:both;position:absolute;right:0;top:0;width:2em;height:2em;margin-right:0em;"><img src="@/assets/images/icon/更多.png" width="100%" height="100%" id="img1"/></div> </div>
  <div class="form">
     <div>
       <el-select v-model="role" placeholder="请选择申请角色">
         <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
         </el-option>
      </el-select>
    </div>
    <div style="margin-top:2em;">
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入申请理由"
        v-model="reason">
     </el-input>

    </div>
    <div style="margin-top:2em;">
    <el-button round @click="submit()">提交</el-button>
    </div>
  </div>
</div>
</template>
<style type="text/css" scoped>
.form{
  width: 80%;
  margin:0 auto;
  margin-top: 3em;
}
</style>
<script>
  export default {
    data() {
      return {
        options: [{
          value: '1',
          label: '自媒体用户'
        }, {
          value: '2',
          label: '机构'
        }, {
          value: '3',
          label: '审核员'
        }],
        role:null,
        reason: ''
      }
    },
    methods:{
      submit(){
         let  self=this;
          self.$ajax.post("post/powerapply",{role:self.role,reason:self.reason},function(userdata){   
              alert(userdata.msg);
              self.back();
          });
      }
    }
  }
</script>