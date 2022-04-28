<template>
  <div>
    <PersonalCenter title="创建的课程">
      <template>
        <div class="addCourse">
          <el-button type="primary" round @click="showAddCourse">添加课程</el-button>
          <el-button icon="el-icon-search" circle></el-button>
        </div>
        <div class="Course">
          <ul>
            <li>
              <div @click="outsideLink">
                <el-image
                  style="width: 250px; height:200px;border-radius: 20px"
                  :src="url"
                  :fit="fit"></el-image>
                <h4>{{CourseName}}</h4>
                <p>{{Teacher}}</p>
              </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </template>
    </PersonalCenter>
    <add-course-dialog ref="addCourse"></add-course-dialog>
  </div>

</template>

<script>
    import PersonalCenter from '@/components/PersonalCenter'
    import addCourseDialog from "@/pages/PersonalCenter/Courses/CreateCourse/addCourseDialog";
    export default {
        name: "index",
        components: {
            PersonalCenter,
            addCourseDialog
        },
        data() {
            return {
                url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                CourseName: '离散数学',
                Teacher: '张三'
            }
        },
        methods: {
            outsideLink() {
                let {href} = this.$router.resolve({
                    path: '/managementCourse'
                });
                window.open(href, '_blank')
            },
            showAddCourse(){
               this.$refs.addCourse.dialogVisible=true
            }

        }

    }
</script>

<style scoped>
  .content_header {
    height: 70px;
    background-color: #409EFF;
    border-radius: 20px 20px 0 0;
    text-align: center;
  }

  .content_header h2 {
    line-height: 70px;
  }

  .addCourse {
    height: 65px;


  }

  .addCourse button {
    margin-top: 10px;
    float: right;
    margin-right: 20px;
  }

  .Course {
    height: 550px;
  }

  .Course ul {
    margin-left: 25px;
  }

  .Course ul li {
    float: left;
    width: 280px;

    height: 250px;
    text-align: center;
  }

</style>