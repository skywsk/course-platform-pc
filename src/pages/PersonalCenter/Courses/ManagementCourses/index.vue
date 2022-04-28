<template>
  <el-container class="el-container">
    <el-header class="el-header">
      <h2>离散数学</h2>
      <div class="Avatar">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <el-dropdown class="Avatar_menu">
             <span class="el-dropdown-link">
              {{userinfo.username}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><router-link to="/">首页</router-link></el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/createCourse">个人中心</router-link>
            </el-dropdown-item>
            <el-dropdown-item>帮助</el-dropdown-item>
            <el-dropdown-item><p>退出登录</p></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-main class="el-main" >
      <el-tabs type="border-card" stretch="true">

        <el-tab-pane> <span slot="label"><i class="el-icon-house"></i> 首页</span>
          <ManagementIndex></ManagementIndex>
        </el-tab-pane>

        <el-tab-pane>
          <span slot="label"><i class="el-icon-s-data"></i> 统计</span>
          <CoursesStatistical></CoursesStatistical>
        </el-tab-pane>

        <el-tab-pane >
          <span slot="label"><i class="el-icon-s-opportunity"></i> 知识图谱</span>
          <KnowledgeMap></KnowledgeMap>
        </el-tab-pane>

        <el-tab-pane label="讨论">
          <span slot="label"><i class="el-icon-chat-dot-square"></i> 讨论</span>
          <CoursesDiscuss></CoursesDiscuss>
        </el-tab-pane>

        <el-tab-pane>
          <span slot="label"><i class="el-icon-document-add"></i> 资料</span>
          <CoursesData></CoursesData>
        </el-tab-pane>

        <el-tab-pane>
          <span slot="label"><i class="el-icon-message"></i> 通知</span>
          <CoursesNotice></CoursesNotice>
        </el-tab-pane>

        <el-tab-pane >
          <span slot="label"><i class="el-icon-edit-outline"></i> 作业</span>
          <home-work></home-work>
        </el-tab-pane>

        <el-tab-pane>
          <span slot="label"><i class="el-icon-document"></i> 考试</span>
          <examination-management></examination-management>
        </el-tab-pane>

        <el-tab-pane>
          <span slot="label"><i class="el-icon-user"></i> 管理</span>
          <course-management></course-management>
        </el-tab-pane>

      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
    import {mapState} from 'vuex'
    import ManagementIndex from "@/pages/PersonalCenter/Courses/ManagementCourses/ManagementIndex/index";
    import CoursesStatistical from "@/pages/PersonalCenter/Courses/ManagementCourses/CoursesStatistical/index";
    import CoursesData from "@/pages/PersonalCenter/Courses/ManagementCourses/coursesData/index";
    import CoursesNotice from "@/pages/PersonalCenter/Courses/ManagementCourses/CoursesNotice";
    import CoursesDiscuss from "@/pages/PersonalCenter/Courses/ManagementCourses/CoursesDiscuss";
    import KnowledgeMap from "@/pages/PersonalCenter/Courses/ManagementCourses/KnowledgeMap";
    import HomeWork from "@/pages/PersonalCenter/Courses/ManagementCourses/HomeWork/index";
    import ExaminationManagement from "@/pages/PersonalCenter/Courses/ManagementCourses/ExaminationManagement/index";
    import CourseManagement from "@/pages/PersonalCenter/Courses/ManagementCourses/CourseManagement/index";
    export default {
        name: "index",
        components:{
            ManagementIndex,
            CoursesStatistical,
            CoursesData,
            CoursesNotice,
            CoursesDiscuss,
            KnowledgeMap,
            HomeWork,
            ExaminationManagement,
            CourseManagement
        },
        computed: {
            ...mapState('LoginModule', ['userinfo'])
        }
    }
</script>

<style scoped>
  .el-header {
    background-color: #409EFF;
    color: #333;
    height: 80px;
    text-align: center;
  }
  .el-header h2{
    width: 100px;
    height: 40px;
    display: inline-block;
    line-height: 55px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 600px;
  }

  .el-container {
    margin-bottom: 40px;
  }
  .Avatar {
    float: right;
    margin-top: 10px;
  }
</style>