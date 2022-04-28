<template>
  <div>
    <el-row>
      <el-col style="background-color: #3A4357;" :span="24" >
        <el-col :span="2" :offset="10"><span style="line-height: 40px;color: #eee">作业详细</span></el-col>

      </el-col>
    </el-row>
    <el-row style="margin-top: 50px;">
      <el-col :span="24">
        <el-col :span="15" class="detailed" :offset="2">
          <el-col :span="24" >
          <el-col :span="5" :offset="10" style="margin-top: 20px">
            <h3>{{title}}</h3>
          </el-col>
            <div class="titleLine"></div>
          </el-col>
          <el-col :span="24" style="border-bottom: #eeeeee 1px solid; margin-top: 20px">
            <el-col :span="3" :offset="3" style="margin-bottom: 20px">题数：</el-col>
            <el-col :span="3" :offset="3">总分：</el-col>
            <el-col :span="3" :offset="3">作答时间：：</el-col>
          </el-col>
          <el-col :span="24" v-for="(item,index) in titleDetailed" :key="index" style="margin-top: 20px">
            <el-col :span="24">{{item.problem}}</el-col>
            <el-col :span="24" v-for="(a,b) in item.options" :key="b">
              <el-radio v-model="a.id" label="index">{{a.content}}{{a.id}}{{a}}</el-radio>
            </el-col>
          </el-col>
        </el-col>
        <el-col :span="5" class="num" :offset="1"></el-col>
      </el-col>
    </el-row>

  </div>

</template>

<script>
    export default {
        name: "test2",
        data(){
            return{
                title:'第一章 数理逻辑',
                titleDetailed:[
                    {problem:'关于永真式错误的是( )',
                          options:[
                              {id:1,content:'一个永真式，对同一分量都用任何公式置换，其结果仍为一永真式'},
                              {id:2,content:'任何两个永真式的合取或析取后不再是一个永真式'},
                              { id:3,content:'设A,B,C为合式公式，若A蕴含B且A是永真式，则B也是永真式'},
                              {id:4,content:'永真式与永假式互为否定式'}
                          ]},
                    {problem:'关于永真式错误的是( )',
                        options:[
                            {id:1,content:'一个永真式，对同一分量都用任何公式置换，其结果仍为一永真式'},
                            {id:2,content:'任何两个永真式的合取或析取后不再是一个永真式'},
                            { id:3,content:'设A,B,C为合式公式，若A蕴含B且A是永真式，则B也是永真式'},
                            {id:4,content:'永真式与永假式互为否定式'}
                        ]},
                    ],
                radio:'1'
            }
        }
    }
</script>

<style scoped>
.detailed{

  height: 600px;
  background-color: white;
  border-radius: 10px;
}
  .num{
    height: 500px;
    background-color: white;
    border-radius: 10px;
  }
  .titleLine{

  }
</style>