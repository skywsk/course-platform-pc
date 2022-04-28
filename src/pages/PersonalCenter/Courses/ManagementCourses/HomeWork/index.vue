<template>
  <div>
    <div>
      <el-row>
        <el-col :span="3" offset="15">
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
    <div>
      <el-empty description="暂无作业"></el-empty>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
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
        }
    }
</script>

<style scoped>

</style>