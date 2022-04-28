<template>
  <div>
    <el-container>
<!--     菜单栏-->
      <div class="aside">
        <div class="asideMenu">
        <el-menu router
                 default-active="$route.path"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 :collapse="isCollapse">
          <el-menu-item disabled>
            <i class="el-icon-reading" ></i>
            <span slot="title">{{courseTitle}}</span>
          </el-menu-item>
          <el-menu-item index="/learningCoursesIndex">
            <i class="el-icon-house"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/learningCourseStatistics">
            <i class="el-icon-s-data"></i>
            <span slot="title">统计</span>
          </el-menu-item>
          <el-menu-item index="/coursesKnowledgeMap">
            <i class="el-icon-s-opportunity"></i>
            <span slot="title">知识图谱</span>
          </el-menu-item>
          <el-menu-item index="/learningCourseDiscuss">
            <i class="el-icon-chat-dot-square"></i>
            <span slot="title">讨论</span>
          </el-menu-item>
          <el-menu-item index="/learningCoursesData">
            <i class="el-icon-document-add"></i>
            <span slot="title">资料</span>
          </el-menu-item>
          <el-menu-item index="/learningCoursesNotice">
            <i class="el-icon-message"></i>
            <span slot="title">通知</span>
          </el-menu-item>
          <el-menu-item index="/learningCoursesHomeWork">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">作业</span>
          </el-menu-item>
          <el-menu-item index="/learningCoursesExamination">
            <i class="el-icon-document"></i>
            <span slot="title">考试</span>
          </el-menu-item>
        </el-menu>
        </div>
      </div>
      <el-container>
        <el-main>
<!--          头部-->
          <el-header style="height: 60px;">
            <el-row>
              <el-col :span="3">
                <el-button @click="menuswitch" style="height: 60px;border-radius: 0" type="primary">
                  <i class="el-icon-s-unfold" v-if="isCollapse">展开</i>
                  <i class="el-icon-s-fold" v-else>收起</i>
                </el-button>
              </el-col>
              <el-col :span="3" :offset="17">
                <div class="Avatar">
                  <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                  <el-dropdown class="Avatar_menu">

             <span class="userName">
              {{userinfo.username}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>
                        <router-link to="/">首页</router-link>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <router-link to="/createCourse">个人中心</router-link>
                      </el-dropdown-item>
                      <el-dropdown-item>帮助</el-dropdown-item>
                      <el-dropdown-item><p>退出登录</p></el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </el-col>
            </el-row>
          </el-header>

<!--          内容-->

          <div class="show">
            <div class="show-box" v-if="isshow">
            <slot></slot>
            </div>
            <slot name="given"></slot>
          </div>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        name: "LearnCourses",
        data() {
            return {
                courseTitle:'离散数学',
                isCollapse: true,
                isshow:true
            };
        },
        computed:{
          ...mapState('LoginModule',['userinfo'])
        },
        methods: {
            menuswitch() {
                let menuSwitch = !this.isCollapse
                this.isCollapse = menuSwitch
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.aside{
  height: 800px;
  background-color: white;
}
.asideMenu{
  margin-top: 150px;
}
  .el-header {
    background-color: #409EFF;
    color: #333;
    padding: 0px;

  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    padding: 0px;
  }
  .Avatar {
    float: right;
    margin-top: 10px;
  }
  .show{
    margin-top: 20px;
    margin-right: 20px;
    margin-left: 20px;
  }
  .show-box{
    width: 1250px;
    height: 700px;
    background-color: white;
    margin:0 auto;
    margin-top: 20px;
    border-radius: 20px;
  }

</style>