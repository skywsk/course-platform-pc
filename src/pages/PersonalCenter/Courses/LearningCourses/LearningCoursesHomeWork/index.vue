<template>

  <learn-courses>
    <el-row>
      <el-col :span="24" class="homeWorkTitle"><h1>{{test}}</h1></el-col>
      <el-col :span="23" :offset="1" style="margin-bottom: 20px">
        <el-radio-group v-model="radio">
          <el-radio :label="1">全部</el-radio>
          <el-radio :label="2">已完成</el-radio>
          <el-radio :label="3">未完成</el-radio>
        </el-radio-group>
      </el-col>
        <el-col :span="24">
          <div class="homeWork">
            <el-col :span="24">
              <el-col :span="3" :offset="1"><h3>作业</h3></el-col>
              <el-col :span="3" :offset="6"><h3>完成情况</h3></el-col>
              <el-col :span="3" :offset="6"><h3>截止时间</h3></el-col>
            </el-col>


            <br><br><br>


            <el-col v-for="(a,b) in homework" :key="b" :span="24" class="detailed">
              <li @click="te">
              <el-col :span="3"></el-col>
              <el-col :span="3" :offset="1" @click="te">
                <i class="el-icon-s-order" style="font-size: 30px;" ></i>
              {{a.title}}
              </el-col>
              <el-col :span="3" :offset="6">
                <el-switch
                  disabled
                  v-model="a.state"
                  active-color="#13ce66"
                  inactive-color="#ff4949">
                </el-switch>
              </el-col>
                <el-col :span="3" :offset="6">
                  {{a.deadline}}
                </el-col>
              </li>
            </el-col>
          </div>
        </el-col>
    </el-row>

  </learn-courses>
</template>

<script>
  import LearnCourses from "@/components/LearnCourses";
    export default {
        name: "LearingingCoursesHomeWork",
        components:{
            LearnCourses,

        },
        data () {
            return {
                radio: '',
                test:'18数学3',
                homework:[
                    {title:'命题',url:'1',state:false,deadline:'2022-05-18'},
                ]
            };
        },
        methods:{
            te(){
                this.$router.push('/courseWork')
            }
        }
    }
</script>

<style scoped>
.homeWorkTitle{
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  border-bottom: 1px solid #eeee;
  height: 40px;
}
  .homeWork{
    height: 500px;
    margin-top: 30px;
  }
  .homeWork h3{
    display: block;
  }
  .detailed{
    height: 60px;
    line-height: 60px;
  }
  .detailed:hover{
    color:#409EFF;
    background-color: #eeeeee;
  }
  >>> .el-switch{
    cursor: pointer
  }
</style>