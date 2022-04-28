<template>
  <div>
    <learn-courses ref="isshow">
      <div slot="given">
        <div class="box-info"></div>
        <StatisticalCard></StatisticalCard>
        <StatisticalCard></StatisticalCard>
        <StatisticalCard></StatisticalCard>
        <StatisticalCard></StatisticalCard>
        <StatisticalCard></StatisticalCard>
        <StatisticalCard></StatisticalCard>
        <StatisticalCard></StatisticalCard>
        <StatisticalCard></StatisticalCard>
      </div>
    </learn-courses>
  </div>
</template>

<script>
  import LearnCourses from "@/components/LearnCourses";
  import StatisticalCard from "@/pages/PersonalCenter/Courses/ManagementCourses/CoursesStatistical/StatisticalCard";
    export default {
        name: "LearningCourseStatistics",
        components:{
            LearnCourses,
            StatisticalCard
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