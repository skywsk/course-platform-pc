<template>
  <div>
    <el-tabs tab-position="top" style="height: 1000px;">
      <el-tab-pane label="课程统计">课程统计<curriculum-statistics></curriculum-statistics></el-tab-pane>
      <el-tab-pane label="班级统计"><class-statistical></class-statistical></el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
  import ClassStatistical from "@/pages/PersonalCenter/Courses/ManagementCourses/CoursesStatistical/ClassStatistical";
  import CurriculumStatistics from "@/pages/PersonalCenter/Courses/ManagementCourses/CoursesStatistical/CurriculumStatistics";
    export default {
        name: "CoursesStatistical",
        components: {ClassStatistical,
            CurriculumStatistics},
        data() {
            return {

            };
        }
    }
</script>

<style scoped>

</style>