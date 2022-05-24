<template>
  <learn-courses>
    <el-col>
      <el-col :span="24" class="title"><h1>资料</h1></el-col>
    </el-col>
    <el-col>
      <div>
        <br><br>
        <div class="dataList">
          <el-table
            :data="tableData.filter(data => !search || data.fileName.toLowerCase().includes(search.toLowerCase()))"
            @row-click="upload"
            style="width: 100%">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="序号"
              prop="id">
            </el-table-column>
            <el-table-column
              label="文件夹/文件名"
              prop="fileName"
              @click="upload"
            >
            </el-table-column>
            <el-table-column
              label="大小"
              prop="fileSize">
            </el-table-column>
            <el-table-column>
              <template slot="header" >
                <el-input
                  v-model="search"
                  size="mini"
                  prefix-icon="el-icon-search"
                  placeholder="输入关键字搜索"/>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <pagination :total='total' :pageSize='pageSize'></pagination>
        <!--    <test :total="total" :page-size="pageSize"></test>-->
      </div>
    </el-col>
  </learn-courses>
</template>

<script>

  import LearnCourses from "@/components/LearnCourses";
    export default {
        name: "LearningCoursesData",
        components:{
            LearnCourses,

        },
        data(){
            return{
                tableData: [{id:1,fileName:'第一章',fileSize:'2M'},
                    {id:2,fileName:'第二章',fileSize:'1M'},
                    {id:3,fileName:'离散数学知识图谱',fileSize:'1M'},
                ],
                search: '',
                total:'',
                pageSize:'',
                fileUrl:'',
            }
        },
        methods:{
            upload(row, column, event){
                console.log(row, column, event)
                location.replace('http://localhost:8888/1652718770966-离散数学知识图谱.xlsx');
            }
        }
    }
</script>

<style scoped>
  .title{
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    border-bottom: 1px solid #eeee;
    height: 40px;
  }
  /*.dataList{*/
  /*  width: 1200px;*/
  /*  height: 400px;*/
  /*  background-color: white;*/
  /*  margin:0 auto;*/
  /*}*/
</style>