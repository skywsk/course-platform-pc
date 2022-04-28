<template>
  <div>
    <el-row>
      <el-col :span="24" >
        <el-image  :src="coursePlatformImageUrl" ></el-image>
      </el-col>
      <el-col :span="24" style="margin-top: 100px">
        <el-col :span="24">
              <el-col :span="6" :offset="10">
                <h2> <i class="el-icon-school"></i>&nbsp;高校师生共同学习</h2>
              </el-col>
        </el-col>
        <el-col :span="24">
          <el-col :span="8">
            <statistical-card  title="提供课堂支持">
            <template slot="chart">
              <div>
                <h4 style="color: #606266">创建拥有独立域名的课程主页，加入课程方式多样，个性化定制课程权限</h4>
              </div>
            </template>
            </statistical-card>
          </el-col>
          <el-col :span="8">
            <statistical-card title="把握学生动态">
  <template slot="chart">
    <div>
      <h4 style="color: #606266">创建班级，作业布置、作业批改、作业评价一体化，考勤签到，下载报表，智能化分析学生数据</h4>
    </div>
  </template>
</statistical-card>
          </el-col>
          <el-col :span="8">
          <statistical-card title="促进协作教学">
          <template slot="chart">
            <div>
              <h4 style="color: #606266">
                创建班级，作业布置、作业批改、作业评价一体化，考勤签到，下载报表，智能化分析学生数据
              </h4>
            </div>
          </template>
        </statistical-card>
        </el-col>

        </el-col>
      </el-col>
      <el-col :span="24" style="margin-top: 100px">
        <el-col :span="24">
          <el-col :span="6" :offset="10" style="margin-bottom: 20px">
            <h2><i class="el-icon-reading"></i>&nbsp;热门课程</h2>
          </el-col>
        </el-col>
        <el-col :span="24">
          <el-col :span="7"  style="margin-left: 50px" v-for="(course,index) in hotCourse" :key="index">
            <el-card shadow="hover" style="text-align: center;border-radius: 10px">
              <el-image :src="course.url" class="hotCourseImage" >
              </el-image>
              <h3 style="margin-bottom: 10px;">{{course.courseName}}</h3>
              <p style="margin-bottom: 10px;">{{course.school}}</p>
              <p style="margin-bottom: 10px;">{{course.teacher}}</p>
            </el-card>
          </el-col>

        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    import StatisticalCard from "@/pages/PersonalCenter/Courses/ManagementCourses/CoursesStatistical/StatisticalCard";
    export default {
        name: "index",
        components: {StatisticalCard},
        data(){
            return{
                coursePlatformImageUrl:'',
                hotCourse:[
                ]
            }
        },
        created() {
            this.$api.getCoursePlatform().then(res=>{
                console.log(res.data)
                this.coursePlatformImageUrl=res.data.data[0].imageUrl
                this.hotCourse=res.data.hotCourse
                console.log(this.hotCourse)
            })
        }
    }
</script>

<style scoped>
.hotCourseImage{
  border-radius: 10px;
  width: 350px;
  height: 200px;
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>