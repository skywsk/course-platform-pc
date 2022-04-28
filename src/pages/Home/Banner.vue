<template>
  <div class="banner">
    <el-carousel height="650px"
                 style="border-radius: 20px;">
      <el-carousel-item v-for="image in banner" :key="image.id" >
        <el-image :src="image.imageUrl">

        </el-image>
      </el-carousel-item>
    </el-carousel>
<!--    <div class="banner_menu"></div>-->
  </div>
</template>

<script>
    export default {
        name: "Banner",
        data(){
            return({
                banner:[]
            })
        },
        created() {
            this.$api.getBanner().then(
                res=>{
                    this.banner=res.data.data
                }
            )
        }

    }
</script>

<style scoped>
  .banner {
    width: 1240px;
    height: 650px;
    margin-left: 140px;
    border-radius: 20px;
    position: relative;
    /*z-index: 10;*/
  }
  /*.banner_menu{*/
  /*  position: absolute;*/
  /*  width: 100px;*/
  /*  height: 100px;*/
  /*  background-color: #409EFF;*/
  /*}*/
</style>