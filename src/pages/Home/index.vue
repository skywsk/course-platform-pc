<template>

  <div>



    <div class="banner">
      <banner></banner>
    </div>


  <!--网页导航广告栏-->
  <div class="container clearfix">



    <div class="entry">
      <div class="entry2">
        <ul>
          <li><a href=""><img src="./images/01.jpg" alt="" width="1240"></a></li>
          <!--                <li><a href=""><img src="./images/02.png" alt="" width="1240"></a></li>-->
          <!--                <li><a href=""><img src="./images/01.png" alt="" width="1240"></a></li>-->
        </ul>
      </div>
      <div class="entry_categoy">
        <ul>
          <li><a href="">计算机</a></li>
          <li><a href="">教育教学</a></li>
          <li><a href="">外语</a></li>
          <li><a href="">理学</a></li>
          <li><a href="">工学</a></li>
          <li><a href="">农学</a></li>
        </ul></div>
      <ol class="indicator">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </div>

  </div>

  <!--网页热门课程推荐-->
  <div class="container">
    <div class="coursehot clearfix">
      <div class="coursehot_hd"><h1 class="fl">热门课程</h1><a href="" >查看更多</a></div>
      <div class="coursehot_bd">
        <ul class="coursehot_list">
          <li>
            <a href="https://www.icourse163.org/course/BIT-268001?outVendor=zw_mooc_pcsybzkcph_">
              <img src="./images/02.png" width="100%">
              <h4>Python语言程序设计</h4>
              <p>北京理工大学</p>
              <p>嵩天</p>
            </a></li>
          <li>
            <a href="https://www.icourse163.org/course/HFUT-1206828802?outVendor=zw_mooc_pcsybzkcph_&outVendor=zw_mooc_pcsybzkcph_&outVendor=zw_mooc_pcsybzkcph_">
              <img src="./images/03.png" width="100%">
              <h4>高等数学</h4>
              <p>合肥工业大学</p>
              <p>朱士信</p>
            </a>
          </li>
          <li>
            <a href="https://www.icourse163.org/course/PKU-1001553023">
              <img src="./images/04.png" width="100%">
              <h4>程序设计与算法</h4>
              <p>北京大学</p>
              <p>郭炜</p>
            </a>
          </li>
          <li>
            <a href="https://www.icourse163.org/course/ZJU-9001?from=searchPage">
              <img src="./images/05.png" width="100%">
              <h4>C语言程序设计</h4>
              <p>浙江大学</p>
              <p>翁恺</p>
            </a>
          </li>
        </ul></div>

    </div>
  </div>

  </div>

</template>
<script>
    import Banner from "@/pages/Home/Banner";
    export default {
        name: "index",
        components:{
            Banner,
        },

    }
</script>

<style scoped>
  .entry {
    margin-top: 130px;
    width: 1240px;
    height: 700px;
    position: relative;
  }
  .entry img{
    border-radius: 30px;
  }

  .entry_categoy{
    position: absolute;
    top: 0;
    left: 0;
    height: 697.5px;
    width: 180px;
    background-color: rgba(0,0,0,.7);
    border-radius: 30px 0px 0 30px;
  }
  .entry_categoy ul li a{
    color: white;
  }
  .entry_categoy ul li:hover{
    background-color: dodgerblue;
  }
  .entry_categoy ul li a::after{
    content: ' ';
    position: absolute;
    left: 150px;
    margin-top: 46px;
    display: inline-block;
    width: 20px;
    height: 20px;
    /*background: url("../images/icon/向右１.png");*/
    background-size: 100% 100%;
  }
  .entry2 ul li a::after{
    content: ' ';
    position: absolute;
    top:310px;
    left: 1150px;
    width: 40px;
    height: 40px;
    background: url("./images/向右2.png");
    background-size: 100% 100%;
  }
  .entry2 ul li a::before{
    content: ' ';
    position: absolute;
    top:310px;
    left: 250px;
    width: 40px;
    height: 40px;
    /*background: url("../images/icon/向左3.png");*/
    background-size: 100% 100%;
  }
  .indicator{
    position: absolute;
    top:650px;
    left: 620px;
    width: 200px;
    height: 20px;

  }
  .indicator li{
    float: left;
    width:20px;
    height: 20px;
    margin-right: 20px;
    background-color: rgba(255,255,255,255.20);
    border-radius: 50%;
  }
  .coursehot{
    margin-top: 20px;
    height: 500px;

  }
  .coursehot_hd{
    height: 100px;
    line-height:100px;
  }
  .coursehot_hd a{
    float: right;
    font-size: 20px;
  }
  .coursehot_hd a::after{
    content: ' ';
    display: inline-block;
    position: absolute;
    margin-top: 40px;
    margin-left: -31px;
    width:20px;
    height: 20px;
    background: #f7f7f7 url("./images/向右2.png");
    background-size: 100% 100%;
  }
  .coursehot_bd{
    height: 340px;
    background-color: white;
    border-radius: 30px;
  }
  .coursehot_bd ul li{
    float: left;
    margin-top: 25px;
    margin-left: 5px;
    width:300px;
    height: 290px;
    border-radius: 20px;
    line-height: 30px;
  }
  .coursehot_bd ul li img{
    border-radius: 30px;
  }
  .banner{
    position: relative;
    margin-top: 140px;
  }
</style>