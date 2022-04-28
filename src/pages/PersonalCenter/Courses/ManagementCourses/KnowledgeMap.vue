<template><div>
  <div class="KMheader">
    <el-row>
      <el-col :span="3">
        <el-button type="primary" plain @click="addNode">添加知识点</el-button>
      </el-col>
      <el-col :span="3">
        <el-button type="primary" plain>添加子级知识点</el-button>
      </el-col>
      <el-col :span="3" :offset="11">
        <span><i></i></span>
        <el-input v-model="input"  prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="2">
        <el-dropdown>
          <span class="el-dropdown-link"><i class="el-icon-circle-plus-outline"></i>批量导入</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>模板导入</el-dropdown-item>
            <el-dropdown-item>同步其他课程</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="2">
        <p><i class="el-icon-s-opportunity"></i>查看知识图谱</p>
      </el-col>
    </el-row>
    <div>

    </div>
  </div>
  <br><br><br><br>


  <div>
    <tree-list ref="add"></tree-list>
  </div>
</div>
</template>

<script>
  import TreeList from "@/components/TreeList";

    export default {
        name: "KnowledgeMap",
        components:{
            TreeList
        },
        data() {

            return {

            }
        },
        methods:{
            addNode(){
                this.$refs.add.addNode()
            }
        }
    }







</script>

<style scoped>
  .KMheader {
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
</style>