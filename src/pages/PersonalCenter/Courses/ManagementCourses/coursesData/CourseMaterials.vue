<template>
  <div>
  <div class="dataHeader">
    <el-button type="primary" plain style="float: right" @click='addMaterial'>新建文件夹</el-button>
    &nbsp;&nbsp;
    <el-button type="primary" plain
               icon="el-icon-plus"
               style="float: right;margin-right: 10px"
               @click='addMaterial'
                >添加资料</el-button>
  </div>
    <br><br>
    <div class="dataList">
      <el-table
        :data="tableData.filter(data => !search || data.fileName.toLowerCase().includes(search.toLowerCase()))"
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
          label="文件夹"
          prop="fileName">
        </el-table-column>
        <el-table-column
          label="大小"
          prop="fileSize">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
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
    <add-material ref="dialog" ></add-material>
    <pagination :total='total' :pageSize='pageSize'></pagination>
<!--    <test :total="total" :page-size="pageSize"></test>-->
  </div>
</template>

<script>
    import AddMaterial from "@/pages/PersonalCenter/Courses/ManagementCourses/coursesData/AddMaterial";
    import pagination from "@/components/pagination";

    // import test from "@/components/test";
    export default {
        name: "CourseMaterials",
        components:{
          AddMaterial,
            // test
            pagination
        },
        data(){
            return{
                tableData: [],
                search: '',
                total:'',
                pageSize:''
            }
        },
        methods:{
            addMaterial(){
                this.$refs.dialog.dialogFormVisible=true;
            },
            // close(){
            //     this.dialogFormVisible=false
            // },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        },
        created() {
            this.$api.getCourseMaterials({
                page:1
            }).then(res=>{
                console.log(res.data)
                if(res.data.state===200){
                    this.tableData=res.data.data
                    this.total=res.data.total
                    this.pageSize=res.data.pageSize
                    console.log(this.tableData.data)
                    console.log(this.total)
                }

            })
        }

    }
</script>

<style scoped>
.dataList{
  width: 1440px;
  height: 400px;
  background-color: white;
  margin:0 auto;
}
</style>