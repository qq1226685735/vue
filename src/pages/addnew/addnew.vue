<template>
	<div class="add">
    <div class="newheader"><div class="back" @click="back()" style="position:absolute;left:0"><li class="el-icon-arrow-left" style="font-size:30px"></li></div>
    <div style="width:4em;margin:0 auto;text-align:center;line-height:2em;">
      发布新闻
    </div>

    <div style="
    clear:both;position:absolute;right:0;top:0;width:2em;height:2em;margin-right:0em;"><img src="@/assets/images/icon/更多.png" width="100%" height="100%" id="img1"/></div> </div>
		<div class="newtitle">
	<input v-model="title" placeholder="新闻标题" maxlength="30"></input>
     </div>
     <div class="newimg set" >新闻展示图<input type="file" name="newimg" accept="image/gif,image/jpeg,image/jpg,image/png"  ref="newimg"></input>
	</div>
   <div class="set">类型:<select v-model="newtype">
         <option disabled >请选择</option>
          <option>科技</option>
          <option>军事</option>
            <option>娱乐</option>
              <option>财经</option>
                <option>段子</option>
                  <option>健康</option>
                    <option>其他</option>
         </select></div>
      <div id="toolbar" class="toolbar" >
    </div>
    <div id="editorElem" class="text"> <!--可使用 min-height 实现编辑区域自动增加高度-->
        新闻内容
    </div>
    <button v-on:click="getContent">查看内容</button>
     <button type="button" @click="submit()">提交</button>

	</div>
</template>
<style >
.newheader{
  position: fixed;
  top: 0;
  width: 100%;
  height: 2em;
  background-color: white;

}
.newtitle input{
	padding-left: 3em;
	display: block;
	width: 80%;
	height: 2em;
	margin-top: 4em;
	border-radius: 2em;
	border: 1px solid grey;
    outline:0;
}

.toolbar{
	width:30em;

}
.text{
	width: 100%;
	min-height: 30em;
}
</style>
<script type="text/javascript">
import E from 'wangeditor';
export default {
  data() {
    return {
      title: '',
       editorContent: '',
       newtype:'',
       token:''
    }
  },
  methods:{
  	 submit:function(){
          self=this;
        if (this.$refs.newimg.files.length !== 0) {
          var nw = new FormData()
          nw.append('newimg', this.$refs.newimg.files[0]);
          nw.append('title',this.title);
           nw.append('content',this.editorContent);
            nw.append('newtype',this.newtype);
             nw.append('token',this.token);
          this.$axios.post(self.$url+'/api/post/addnew', nw, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }).then(function(response){
        if(response.data.status==200){
        
          
        alert(response.data.msg);
         self.back();
          }
    
          else  alert(response.data.msg);

            
              


      }).catch(function (error) {
    console.log(error);
    });
        }
      },
       getContent: function () {
            alert(this.editorContent)
        } 
    },
      mounted() {
         this.token=localStorage.getItem('token');
          if(this.token==null){
        this.replaceto("login",null);
        }
      	var editor = new E('#toolbar','#editorElem');
      	editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
        editor.customConfig.uploadImgMaxLength = 5;   

    // 配置服务器端地址
    editor.customConfig.uploadImgServer = 'http://127.0.0.1:8081/api/post/upLoadFile';

    // 进行下文提到的其他配置
    // ……
    // ……
    // ……
    editor.customConfig.onchange = (html) => {
          this.editorContent = html
        };
    editor.create();
        
      }
  }

</script>