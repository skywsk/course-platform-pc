<template>
  <div>
    <div>
      <el-row>
        <el-col :span="3" :offset="15">
        <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
        </el-col>
        <el-col :span="6">
          <router-link to="/workEditor">
            <el-button type="primary" plain style="margin-right: 10px">
              新建作业
            </el-button>
          </router-link>
          <el-button type="primary" plain>题库</el-button>
          <el-button type="primary" plain>新建文件夹</el-button>
        </el-col>
      </el-row>
    </div>
    <el-col v-if="problem.title===''">
      <el-empty description="暂无作业，请添加"></el-empty>
    </el-col>
    <template v-if="problem.title!==''">
    <el-col :span="24" style="margin-top: 30px;background-color: #f7f7f7">
      <el-col :span="3" :offset="1"><h4>作业题目</h4></el-col>
      <el-col :span="3" :offset="6"><h4>截止时间</h4></el-col>
      <el-col :span="3" :offset="6"><h4>完成情况</h4></el-col>
    </el-col>
    <el-col :span="24" style="margin-top: 30px" @click="tt">
      <el-col :span="3" :offset="1">{{problem.title}}</el-col>
      <el-col :span="3" :offset="6">{{problem.time}}</el-col>
      <el-col :span="3" :offset="6">0/1</el-col>
    </el-col>
    </template>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Homework",
        data() {
            return {
                options: [ {
                    value: '选项1',
                    label: '默认班级'
                }],
                value: ''
            }
        },
        computed:{
            ...mapState('HomeWork',['problem'])
        },
        methods:{
            tt(){
                console.log(11)
            }
        }
    }
</script>

<style scoped>

</style>