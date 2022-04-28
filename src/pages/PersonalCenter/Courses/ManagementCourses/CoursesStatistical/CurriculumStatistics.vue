<template>
  <div >
    <statistical-card title="总访问量" count="5000" >
      <template slot="chart">
        <span>周同比 56.67% </span> <i class="el-icon-caret-top"></i>&nbsp; &nbsp;&nbsp; &nbsp;
        <span>日同比 10.67% </span> <i class="el-icon-caret-bottom"></i>
      </template>
      <template slot="footer">
        <span>总访问量:5000</span>
      </template>
    </statistical-card>
    <statistical-card title="日访问量" count="50" >
      <template slot="chart"><linechart></linechart></template>
      <template slot="footer">
        <span>日访问量:50</span>
      </template>
    </statistical-card>
    <statistical-card title="课程课时统计" count="50" >
      <template slot="chart">
       <barchart></barchart>
      </template>
      <template slot="footer">
        <span>总课时:50</span>
      </template>
    </statistical-card>

      <el-card class="course-data-box-card">
        <div class="courseData">
          <piechart></piechart>
        </div>
      </el-card>



    <statistical-card title="总访问量" count="5000" >
      <template slot="chart">
        <span>周同比 56.67% </span> <i class="el-icon-caret-top"></i>&nbsp; &nbsp;&nbsp; &nbsp;
        <span>日同比 10.67% </span> <i class="el-icon-caret-bottom"></i>
      </template>
      <template slot="footer">
        <span>总访问量:5000</span>
      </template>
    </statistical-card>
    <statistical-card title="日访问量" count="50" >
      <template slot="chart"><linechart></linechart></template>
      <template slot="footer">
        <span>日访问量:50</span>
      </template>
    </statistical-card>
    <statistical-card title="课程课时统计" count="50" >
      <template slot="chart">
        <barchart></barchart>
      </template>
      <template slot="footer">
        <span>总课时:50</span>
      </template>
    </statistical-card>

  </div>
</template>

<script>
  import linechart from "@/pages/PersonalCenter/Courses/ManagementCourses/CoursesStatistical/CurriculumStatisticsCharts/linechart";
  import StatisticalCard from "@/pages/PersonalCenter/Courses/ManagementCourses/CoursesStatistical/StatisticalCard";
  import barchart from "@/pages/PersonalCenter/Courses/ManagementCourses/CoursesStatistical/CurriculumStatisticsCharts/barchart";
  import piechart from "@/pages/PersonalCenter/Courses/ManagementCourses/CoursesStatistical/CurriculumStatisticsCharts/piechart";
    export default {
        name: "coursesStatistical",
        components:{
            StatisticalCard,
            linechart,
            barchart,
        piechart}
    }
</script>

<style scoped>
.courseData{
  height: 400px;
  width: 800px;
  margin: 0 auto;

}
  .course-data-box-card{
    height: 400px;
    width: 1390px;
    margin-top: 20px;
    margin-left: 40px;
    border-radius:10px;

  }
</style>


