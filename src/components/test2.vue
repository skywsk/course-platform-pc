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
            <el-col :span="3" :offset="3" style="margin-bottom: 20px">题数：1</el-col>
            <el-col :span="3" :offset="3">总分：100分</el-col>
          </el-col>
          <el-col :span="24">
            <el-col :span="4" style="margin-top: 20px;margin-left: 20px;"><h4>一、选择题</h4></el-col>
            <el-col :span="24" style="margin-top: 20px;margin-left: 20px;margin-bottom: 20px"><p>1.关于永真式错误的是(   )</p></el-col>
            <el-col :span="24" style="margin-left: 20px;margin-bottom: 20px" >
              <el-radio-group v-model="radio" >
                <el-col :span="24"  style="margin-bottom: 20px" ><el-radio :label="1">
                  A.一个永真式，对同一分量都用任何公式置换，其结果仍为一永真式
                </el-radio></el-col>
                <el-col :span="24" style="margin-bottom: 20px"><el-radio :label="2">
                  B.任何两个永真式的合取或析取后不再是一个永真式
                </el-radio></el-col>
                <el-col :span="24" style="margin-bottom: 20px"><el-radio :label="3">
                  C.设A,B,C为合式公式，若A蕴含B且A是永真式，则B也是永真式
                </el-radio></el-col>
                <el-col :span="24" style="margin-bottom: 20px"><el-radio :label="4">
                  D.永真式与永假式互为否定式
                </el-radio></el-col>
              </el-radio-group>
            </el-col>
            <el-col><el-button
              style="margin-left: 20px;margin-bottom: 20px"
              v-if="!cardShow"
              @click="submit" >提交</el-button></el-col>
            <el-col :span="20" :offset="2" v-if="cardShow">
              <el-card shadow="always">
                <el-col :span="24" style="margin-bottom: 20px">
                  <el-col :span="1" :offset="1"  style="color: #86ff73;" v-if="iconShow"><i class="el-icon-check"></i></el-col>
                  <el-col :span="1" :offset="1"  style="color: #F56C6C;" v-if="!iconShow"><i class="el-icon-close"></i></el-col>
                  <el-col :span="3" :offset="1" ><p>我的答案：{{myOption}}</p></el-col>
                  <el-col :span="3" :offset="2" style="color: #86ff73"><p>正确答案：C</p></el-col>
                </el-col>
                <el-col :span="24"  v-if="!iconShow"  >
                  <el-col :span="23" :offset="1" style="margin-bottom: 20px">
                    <p>解析：永真式是命题公式中有一类重言式。如果一个公式，对于它的任一解释下其真值都为真，就称为重言式（永真式）。数理逻辑旨在利用有限的公理推出尽可能多的重言式，除此之外，重言式在计算机词法分析领域也具有重要应用。</p>
                  </el-col>
                  <el-col :span="24" style="margin-bottom: 20px">
                    <el-col :span="2" :offset="1">推荐</el-col>
                    <el-col :span="3">
                      <el-link type="primary">前序习题</el-link>
                    </el-col>
                    <el-col :span="3" >
                      <el-link type="primary">同序习题</el-link>
                    </el-col>
                    <el-col :span="4" >
                      <el-link type="primary">相关知识点视频</el-link>
                    </el-col>
                  </el-col>
                </el-col>
              </el-card>
            </el-col>
          </el-col>


<!--          <el-col :span="24" v-for="(item,index) in titleDetailed" :key="index" style="margin-top: 20px">-->
<!--            <el-col :span="24">{{item.problem}}</el-col>-->
<!--            <el-col :span="24" v-for="(a,b) in item.options" :key="b">-->
<!--              <el-radio v-model="radio" label="a.id">{{a.content}}</el-radio>-->
<!--            </el-col>-->
<!--          </el-col>-->
        </el-col>
        <el-col :span="5" class="num" :offset="1">
          <el-col style="margin-left: 20px;margin-top: 20px">
            <el-col ><h4>一、选择题</h4></el-col>
            <el-col style="margin-top: 20px">  <el-button type="primary">1</el-button></el-col>
          </el-col>
        </el-col>
      </el-col>
    </el-row>

  </div>

</template>

<script>
    export default {
        name: "test2",
        data(){
            return{
                radio:'',
                title:'第一章 永真式',
                myOption:'A',
                iconShow:false,
                cardShow:false,
                // titleDetailed:[
                //     {problem:'关于永真式错误的是( )',
                //         radio: "radio",
                //         options:[
                //               {id:1,content:'一个永真式，对同一分量都用任何公式置换，其结果仍为一永真式'
                //               },
                //               {id:2,content:'任何两个永真式的合取或析取后不再是一个永真式'},
                //               { id:3,content:'设A,B,C为合式公式，若A蕴含B且A是永真式，则B也是永真式'},
                //               {id:4,content:'永真式与永假式互为否定式'}
                //           ]},
                //     {problem:'关于永真式错误的是( )',
                //         options:[
                //             {id:1,content:'一个永真式，对同一分量都用任何公式置换，其结果仍为一永真式'},
                //             {id:2,content:'任何两个永真式的合取或析取后不再是一个永真式'},
                //             { id:3,content:'设A,B,C为合式公式，若A蕴含B且A是永真式，则B也是永真式'},
                //             {id:4,content:'永真式与永假式互为否定式'}
                //         ]},
                //     ],
            }
        },
        methods:{
            submit(){
                this.cardShow=true
                if(this.radio===1)this.myOption='A'
                else if(this.radio===2)this.myOption='B'
                else if(this.radio===3)this.myOption='C',this.iconShow=true
                else if(this.radio===4)this.myOption='D'
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