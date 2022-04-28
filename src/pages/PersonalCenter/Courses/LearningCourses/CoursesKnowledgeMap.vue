<template>
  <learn-courses>
     <knowledge-map ref="coursesKnowledgeMap"></knowledge-map>
  </learn-courses>
</template>

<script>
  import KnowledgeMap from "@/pages/PersonalCenter/Courses/ManagementCourses/KnowledgeMap";
  import LearnCourses from "@/components/LearnCourses";
    export default {
        name: "CoursesKnowledgeMap",
        components:{
            LearnCourses,
            KnowledgeMap,
        }

    }
</script>

<style scoped>

</style>