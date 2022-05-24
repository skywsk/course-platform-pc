<template>
<div style="margin-top: 150px">

  <el-row>
    <el-col :span="24">
      <el-col :span="6" :offset="10" style="margin-top: 50px">
        <h2> <i class="el-icon-connection"></i>&nbsp;广东技术师范大学数据分析</h2>
      </el-col>
    </el-col>
    <el-col :span="24">
      <el-col :span="24"><curriculum-relationship-graph></curriculum-relationship-graph> </el-col>
    </el-col>
    <el-col :span="24">
      <el-col :span="6" :offset="10" >
        <h2> <i class="el-icon-connection"></i>&nbsp;教师与课程关系知识图谱</h2>
      </el-col>
    </el-col>
    <el-col :span="24">
      <el-col :span="24"><teacher-graph></teacher-graph> </el-col>
    </el-col>

<!--    <el-col :span="24">-->
<!--      <el-col :span="6" :offset="10" style="margin-top: 50px">-->
<!--        <h2> <i class="el-icon-connection"></i>&nbsp;广东技术师范大学数据分析</h2>-->
<!--      </el-col>-->
<!--    </el-col>-->
<!--    <el-col :span="24">-->
<!--      <el-col :span="24"><TeacherDistributionMap></TeacherDistributionMap> </el-col>-->
<!--    </el-col>-->
  </el-row>

</div>
</template>

<script>
  import TeacherGraph from "@/pages/KnowledgeGraph/charts/TeacherGraph";
  import CurriculumRelationshipGraph from  "@/pages/KnowledgeGraph/charts/CurriculumRelationshipGraph"
  // import TeacherDistributionMap from  "@/pages/KnowledgeGraph/charts/TeacherDistributionMap"
    export default {
        name: "index",
        components:{
            TeacherGraph,
            CurriculumRelationshipGraph,
            // TeacherDistributionMap
        }
    }
</script>

<style scoped>

</style>