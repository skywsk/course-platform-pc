<template>
  <div>
    <div class="header" style="background-color: #3A4357">
      <el-row>
        <el-col :span="2" :offset="10"><span style="line-height: 40px;color: #eee">新建作业</span></el-col>
        <el-button type="primary" style="float: right" @click="submit">完成</el-button>
      </el-row>
    </div>

    <div class="homeWorking">
      <div class="title">
        标题：
        <el-input
          placeholder="请输入作业标题"
          v-model="input"
          style="width: 60%"
          clearable>
        </el-input>
        <br><br>
        评分机制：
        <el-radio v-model="radio" label="1">百分制</el-radio>
        <el-radio v-model="radio" label="2">自定义</el-radio>
        <br><br>
        <div class="block">
          <span class="demonstration">截止时间：</span>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </div>
      </div>
    </div>
    <div class="body">
      <el-container>
        <el-aside class="aside">
          <div class="questionsNum">
            <p v-if="qNum>0">题数:{{qNum}}，总分:100分</p><br><br>
            <ul class="questionsNumUl">
              <li v-for="(num,index) in questionNum" v-bind:key="index" >  {{num.id}}
                <el-button type="danger"
                           @click="removeOption"
                           icon="el-icon-delete" circle
                           style="float: right"
                           size="mini"></el-button></li>
            </ul>
          </div>
        </el-aside>


        <el-main   class="main">

          <div class="questionsType">
            <h4>添加题目</h4><br>
            <el-row >
              <el-col :span="24">
                <el-col :span="20">
                  <el-button type="primary" round  @click="addSingleChoice" >单选题</el-button>
                  <el-button type="primary" round>多选题</el-button>
                  <el-button type="primary" round>填空题</el-button>
                  <el-button type="primary" round>判断题</el-button>
                  <el-button type="primary" round>简答题</el-button>
                  <el-button type="primary" round>更多题型</el-button>
                </el-col>
                <el-col :span="2"><p>题库选题</p></el-col>
              </el-col>

            </el-row>

            <p style="margin-left: 10px"></p>
          </div>




          <div class="edit_main">
            <div class="stem" >
              <el-row>
                <el-col :span="24" style="margin-top: 30px">
                  <el-col :span="2" :offset="1"><h4>题干：</h4></el-col>
                  <el-col :span="20"><div class="edit">  <ueditor :FrameHeight="FrameHeight"></ueditor></div></el-col>
                </el-col>
              </el-row>


              <el-row>
                <el-col :span="24" v-for="(option) in optionsData"
                        v-bind:key="option.id"
                        style="margin-top: 30px">
                  <el-col :span="2" :offset="1">
                    <el-button  circle type="radio" value="a" name="option">{{option.id}}</el-button>
                  </el-col>
                  <el-col :span="20">
                    <ueditor :FrameHeight="FrameHeight"></ueditor>
                  </el-col>

                </el-col>
              </el-row>
              <br>

              <el-col :offset="1">
                <el-button @click="addoption">添加选项</el-button>
                <el-button @click="removeoption">删除选项</el-button>
              </el-col>
              <br><br><br>
              <el-col :offset="1">
                <el-button @click="dialogFormVisible=true">知识点归属</el-button>
              </el-col>

              <br><br><br>
              <el-row>
                <el-col :span="24">
                  <el-col :span="3" :offset="1"><h4>知识点标签:</h4></el-col>
                  <el-col :span="4" v-for="node in treeNodesData" :key="node">
                                    {{node.label}}
                  </el-col>
                </el-col>
              </el-row>
              <br><br>
              <div>
                <el-dialog
                  width="40%"
                  title="知识点归属"
                  :visible.sync="dialogFormVisible"
                  append-to-body>
                  <tree-knowledge-points @sendTreeNodeData="sendTreeNodeData"></tree-knowledge-points>
                  <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogFormVisible=false">确认</el-button>
                  </div>
                </el-dialog>
              </div>
              <el-col>
                <el-col :span="2" offset="1">解析：</el-col>
              <el-col :span="18">
                <ueditor :FrameHeight="FrameHeight"></ueditor>
              </el-col>
              </el-col>
            </div>
          </div>

        </el-main>
      </el-container>
    </div>


  </div>

</template>

<script>
    let i=4
    import ueditor from "@/components/ueditor";
    import TreeKnowledgePoints from "@/components/TreeKnowledgePoints";
    export default {
        name: "WorkEditor",
        components:{
            ueditor,
            TreeKnowledgePoints
        },
        data() {
            return {
                value1: '',
                FrameHeight:200,
                qNum:0,
                input: '',
                radio: '1',
                treeNodesData:[],
                dialogFormVisible:false,
                questionNum:[
                ],
                optionsData: [
                    {id: 'A', options: 'A'},
                    {id: 'B', options: 'B'},
                    {id: 'C',options: 'C'},
                    {id:'D',options: 'D'}
                ],
            }
        },
        methods:{
            addSingleChoice(){
                ++this.qNum;
                if (this.qNum>0) this.questionNum.push({
                    id:this.qNum
                })
            },

            addoption(){
                this.optionsData.push({
                    id: String.fromCharCode(65+i),
                    options: String.fromCharCode(65+i)
                });
                if(i<25)i++
                else i=0

            },
            removeoption(){
                this.optionsData.pop()
            },

            removeOption(){
                this.questionNum.shift(
                    this.qNum--,
                    {id:this.qNum}
                )
            },
            sendTreeNodeData(value){
                this.treeNodesData=value
            },
            submit(){
                let problem={
                    title:this.input,
                    time:this.value1
                }
                console.log(problem)
                this.$store.commit('HomeWork/setProblem',problem)

                this.$router.push('managementCourse')

            }
        }
    }
</script>

<style scoped>
  .header{
    height: 40px;
    position: absolute;
  }
  .homeWorking{
    position: relative;
    margin:0 auto;
    margin-top: 60px;
    width: 1200px;
    height: 200px;
    background-color: white;
    border-radius: 10px;
  }
  .title{
    position: absolute;
    width: 1000px;
    height: 100px;
    margin-left: 250px;
    margin-top: 50px;
  }
  .body{
    width: 1200px;
    height: 600px;
    margin:0 auto;
    margin-top: 20px;
  }
  .aside{
    width: 200px;
    height: 500px;
    background-color: white;
    border-radius: 10px;
  }
  .main{
  overflow: visible;
  }
  .questionsNum{
    width: 250px;
    /*background-color: whitesmoke;*/
    margin-top: 50px;
    margin-left: 20px;

  }
  .questionsNumUl li{
    display:block;
    height: 50px;

  }
  .questionsType{
    width: 880px;
    height: 100px;
    background-color: white;
    text-align: center;
    border-radius: 10px;
    margin-top: -20px;
  }
  .edit_main{
    position: relative;
    margin-top: 20px;
    width: 880px;
    background-color: white;
    border-radius: 10px;
  }
  .edit ul li{
    display: inline-block;
    margin-right: 50px;
  }

  .stem{
    position: absolute;
    margin-top: 20px;
    margin-left: 20px;
    background-color: white;
  }

  .edit{
    width: 800px;
    height: 50px;
    border-radius: 10px;
    display: inline-block;
  }
</style>