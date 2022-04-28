<template>
  <el-dialog title="添加资料" :visible.sync="dialogFormVisible">
    <el-upload
      class="upload-demo"
      ref="upload"
      :action="url"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :on-success="successUpload"
      :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <br><br>
    <el-button type="primary" @click="addLabelDialog">选择题目关联标签</el-button>
    <br><br><br>

<el-row>
  <el-col :span="24">
    <el-col :span="3" :offset="2"><h4>知识点标签:</h4></el-col>
    <el-col :span="2" v-for="node in treeNodeData" :key="node">

      {{node.name}}
<!--      <ul v-for="node in treeNodeData" :key="node">-->
<!--        <li>{{node.name}}</li>-->
<!--      </ul>-->
    </el-col>
  </el-col>
</el-row>
<div>
    <el-dialog
      width="40%"
      title="知识点归属"
      :visible.sync="innerVisible"
      append-to-body>
      <tree-knowledge-points @sendTreeNodeData="sendTreeNodeData"></tree-knowledge-points>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="innerVisible=false">确认</el-button>
      </div>
    </el-dialog>


</div>

<!--    <template>-->
<!--      <ul v-for="node in treeNodeData" :key="node">-->
<!--        <li>{{node}}</li>-->
<!--      </ul>-->
<!--    </template>-->
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible=false">取 消</el-button>
      <el-button type="primary" @click="submitUpload">确 定</el-button>

    </div>
  </el-dialog>
</template>

<script>
  import base from '@/api/base'
  import TreeKnowledgePoints from "@/components/TreeKnowledgePoints";
    export default {
        name: "AddMaterial",
        components:{
                    TreeKnowledgePoints},
        data(){
            return{
                dialogFormVisible:false,
                search: '',
                url:base.uploadfile,
                fileList: [],
                innerVisible: false,
                treeNodeData:[],
            }
        },
        methods:{
            // close(){
            //     this.$emit('close')
            // },
            submitUpload() {
                this.$refs.upload.submit();
                this.dialogFormVisible=false
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            successUpload(response,file,fileList){
                console.log('success',response,file,fileList)
                this.$message({
                    message:'上传成功',
                    type:'success'
                })
                let fileName=response.name
                console.log(fileName)
                let fileUrl=base.host+'/'+response.url.slice(7)
                this.$emit("sendFileUrl", fileUrl)
            },
            addLabelDialog(){
                this.innerVisible = true
                // this.$refs.dialog.dialogVisible=true
            },
            sendTreeNodeData(value){
                this.treeNodeData=value
                console.log(this.treeNodeData)
            },


        }
    }
</script>

<style scoped>

</style>