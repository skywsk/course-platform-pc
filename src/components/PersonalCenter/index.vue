<template>
  <div class="PCheight">
    <el-col :span="4">
      <div class="nav_header">
        <br>
        <div>
        <el-avatar :size="80" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
        </el-avatar>
        </div>
        <br>
        <div>
        <span>{{userinfo.username}}</span>
        </div>
      </div>
      <el-menu
        router
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-reading"></i>
            <span>课程</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/createCourse">创建的课程</el-menu-item>
            <el-menu-item index="/learningCourse">学习的课程</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>个人中心</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/MyInformation">我的信息</el-menu-item>
            <el-menu-item index="2-2">我的消息</el-menu-item>
            <el-menu-item index="2-3">我的好友</el-menu-item>
            <el-menu-item index="2-4">我的团队</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="4">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">公告</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-collection"></i>
          <span slot="title">收藏</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-notebook-1"></i>
          <span slot="title">笔记</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
        <el-menu-item index="8">
          <i class="el-icon-warning-outline"></i>
          <span slot="title">反馈</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <div class="content">
      <div class="content_header">
        <h2>{{title}}</h2>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "index",
        props: ['title'],
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        computed: {
            ...mapState('LoginModule', ['userinfo'])
        }
    }
</script>

<style scoped>
  .nav_header {
    text-align: center;
    height: 150px;
    background-color: white;
    position: relative;
  }
  .content {
    width: 1180px;
    height: 700px;
    background-color: white;
    float: left;
    margin-top: 10px;
    margin-left: 50px;
    border-radius: 20px;
    box-shadow: #409EFF 0px 0px 10px 0px;
  }

  .content_header {
    height: 70px;
    background-color: #409EFF;
    border-radius: 20px 20px 0 0;
    text-align: center;
  }

  .content_header h2 {
    line-height: 70px;
  }
</style>