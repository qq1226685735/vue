<template>
	<div>
	 <div id="editorElem" style="text-align:left"></div>
   <button v-on:click="getContent">查看内容</button>
</div>
</template>

<script type="text/javascript">
import E from 'wangeditor'

	  export default {
      name: 'editor',
      data () {
        return {
          editorContent: ''
        }
      },
      methods: {
        getContent: function () {
            alert(this.editorContent)
        }
      },
      mounted() {
        var editor = new E('#editorElem');
      editor.customConfig.uploadImgServer = '127.0.0.1:8888/upLoadFile'; //上传URL
editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
editor.customConfig.uploadImgMaxLength = 5;    
editor.customConfig.uploadFileName = 'myFileName';
editor.customConfig.uploadImgHooks = {
    customInsert: function (insertImg, result, editor) {
                // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
                // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
         
                // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
                var url =result.data;
                insertImg(url);
         
                // result 必须是一个 JSON 格式字符串！！！否则报错
            }
        }
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
        }
        editor.create()
      }
    }
</script>