<template>
  <div>
    <el-row>
      <el-col style="background-color: #3A4357" :span="24">
        <el-col :span="2" :offset="10"><span style="line-height: 40px;color: #eee">编辑章节</span></el-col>
        <el-button type="primary" style="float: right">完成</el-button>
      </el-col>
    </el-row>

    <el-col style="margin-top: 30px">
      <el-col :span="5" class="aside">
        <tree-knowledge-points></tree-knowledge-points>
      </el-col>
      <el-col :span="17" class="main" :offset="1">
          <ueditor :FrameHeight="FrameHeight"></ueditor>
      </el-col>
    </el-col>
  </div>
</template>

<script>
    import TreeKnowledgePoints from "@/components/TreeKnowledgePoints";
    import Ueditor from "@/components/ueditor";
    export default {
        name: "EditChapter",
        components: {Ueditor, TreeKnowledgePoints},
        data(){
            return{
                FrameHeight:550
            }
        }
    }
</script>

<style scoped>
.aside{
  background-color: white;
  height: 600px;
}
  .main{

    border-radius: 20px;
  }
</style>