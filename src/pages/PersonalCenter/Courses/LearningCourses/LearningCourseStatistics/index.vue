<template>
  <div>
    <learn-courses ref="isshow">
      <div slot="given">
        <div class="box-info">


          <el-row>
            <el-col :span="24">
              <el-col :span="24"></el-col>
              <el-col>
                <div  style="width: 400px;height: 400px;margin-left: 25px" id="courseProgress">
                  <pie></pie>
                </div>
              </el-col>
              <el-col :span="6" offset="9"><h4 style="color: #409EFF;">课程学习进度</h4></el-col>
            </el-col>
            <el-col :span="24" style="margin-top: 10px;color: #409EFF;">
              <el-col>
                <el-col :span="4" :offset="6">完成进度</el-col>
                <el-col :span="4" :offset="4">班级排名</el-col>
              </el-col>

              <el-col style="margin-top: 10px">
                <el-col :span="4" :offset="6"><span style="font-size: 20px;font-weight:600">45</span>/100</el-col>
                <el-col :span="4" :offset="4">第&nbsp;<span style="font-size: 20px;font-weight:600">15</span>&nbsp;名</el-col>
              </el-col>

            </el-col>
          </el-row>
        </div>
        <StatisticalCard title="课程学习次数" count="50次">
          <template slot="chart" >
            <barchart></barchart>
          </template>
        </StatisticalCard>
        <StatisticalCard title="课程学习时长" count="15小时">
          <template slot="chart" >
            <linechart></linechart>
          </template>
        </StatisticalCard>
        <StatisticalCard title="章节测试" count="50/100 个">
          <template slot="chart" >
            <linechart></linechart>
          </template>
        </StatisticalCard>
        <StatisticalCard title="作业" count="50/100 个">
          <template slot="chart" >
            <linechart></linechart>
          </template>
        </StatisticalCard>
        <StatisticalCard title="讨论" count="发帖:0帖">
          <template slot="chart" >
            <el-col>
              <el-col :span="10" >回帖：&nbsp;<span style="font-size: 20px;font-weight:600">45</span>&nbsp;&nbsp;帖</el-col>
              <el-col :span="10" :offset="1">获赞数：&nbsp;<span style="font-size: 20px;font-weight:600">15</span>&nbsp;&nbsp;个</el-col>
            </el-col>
          </template>
        </StatisticalCard>
        <StatisticalCard title="考试" count="暂无数据">
        </StatisticalCard>
      </div>
    </learn-courses>
  </div>
</template>

<script>
  import barchart from "@/pages/PersonalCenter/Courses/ManagementCourses/CoursesStatistical/CurriculumStatisticsCharts/barchart";
  import pie from "@/pages/PersonalCenter/Courses/LearningCourses/LearningCourseStatistics/chart/pie";
  import LearnCourses from "@/components/LearnCourses";
  import StatisticalCard from "@/pages/PersonalCenter/Courses/ManagementCourses/CoursesStatistical/StatisticalCard";
  import linechart from "@/pages/PersonalCenter/Courses/ManagementCourses/CoursesStatistical/CurriculumStatisticsCharts/linechart";
    export default {
        name: "LearningCourseStatistics",
        components:{
            linechart,
            LearnCourses,
            StatisticalCard,
            pie,
            barchart
        },
        mounted() {
           this.$refs.isshow.isshow=false

        }
    }
</script>

<style scoped>
.box-info{
  width: 450px;
  height: 525px;
  background-color:white;
  float: left;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 10px;
}
</style>