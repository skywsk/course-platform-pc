<template>
  <learn-courses>
    <el-col :span="24" class="title"><h1>知识图谱</h1></el-col>
    <el-col >
      <el-col>
        <el-col :span="4" :offset="20">
        <router-link to="/courseGraph">
          <el-button class="el-icon-s-opportunity">查看知识图谱</el-button>
        </router-link>
        </el-col>
      </el-col>
      <el-col :span="20" :offset="2">
          <tree-list></tree-list>
      </el-col>
    </el-col>
  </learn-courses>
</template>

<script>
  import TreeList from "@/components/TreeList";

  import LearnCourses from "@/components/LearnCourses";
    export default {
        name: "CoursesKnowledgeMap",
        components:{
            LearnCourses,
            TreeList
        },
    }
</script>

<style scoped>
  .title{
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    border-bottom: 1px solid #eeee;
    height: 40px;
  }
</style>