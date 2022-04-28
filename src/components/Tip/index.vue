<template>
  <div>
  <header class="header">
    <nav class="container">
      <h1 class="nav_log fl"><a href=""></a></h1>
      <template class="header_li">
      <ul class="fl">
        <li><router-link to="/home" >首页</router-link></li>
        <li><router-link to="/coursePlatform">课程平台</router-link></li>
        <li><router-link to="/school">学校</router-link></li>
        <li><router-link to="/knowledgeGraph">知识图谱</router-link></li>
      </ul>
      </template>

      <div class="header_right1">
        <template v-if="!userinfo.username">
        <router-link to="/login">登录</router-link>|<router-link to="/register">注册</router-link>
        </template>
        <div class="Avatar" v-else>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <el-dropdown class="Avatar_menu">
             <span class="el-dropdown-link">
              {{userinfo.username}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><p>首页</p></el-dropdown-item>
              <router-link to="/createCourse"><el-dropdown-item>个人中心</el-dropdown-item></router-link>
              <router-link to="/test2"><el-dropdown-item>帮助</el-dropdown-item></router-link>
              <el-dropdown-item><p @click="loginOut">退出登录</p></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </div>
      </div>
      <div class="header_search">
        <input type="search" name="" id="" placeholder="搜索课程" v-model="keyword" @keyup.enter="goSearch">
      </div>
    </nav>

  </header>


  </div>
</template>
<script>
  import {mapState,mapMutations} from 'vuex'
    export default {
        name: "index",
        data(){
            return {
                keyword:''
            }
        },
        methods:{
            ...mapMutations('LoginModule',['clearUser']),
            goSearch(){
                // this.$router.push("/search/"+this.keyword+"?k="+this.keyword.toUpperCase());
                // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)
                this.$router.push({name:'search',params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}})
            },
            loginOut(){
                this.clearUser('userinfo');
                localStorage.removeItem('userinfo')
                this.$router.push('/login')
            }
        },
        computed:{
            ...mapState('LoginModule',['userinfo'])
        }
    }
</script>

<style scoped>

  .Avatar {
    float: right;
    margin-right: 60px;

  }

  .el-dropdown-link {
    cursor: pointer;
  }

  .el-icon-arrow-down {
    font-size: 12px;

  }

  .Avatar_menu {
    margin-left: 10px;
    line-height: 100px;

  }
</style>