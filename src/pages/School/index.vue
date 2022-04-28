<template>
  <div style="margin-top: 150px">
    <el-row style="background-color: white;border-radius: 20px;width: 90%;margin: 0 auto">
      <el-col :span="24">
        <el-col span="3" :offset="10" style="margin-top: 20px;">
          <h1 style="color: #bcb0ff">已入驻学校</h1>
        </el-col>
      </el-col>
      <el-col :span="24">
        <el-col :span="20" :offset="1">
          <el-col :span="4" :offset="2" v-for="school in schoolImages" :key="school.id">
            <router-link to="school.id">
              <el-image :src="school.imageUrl" style="margin-top: 50px; margin-bottom: 50px;"></el-image>
            </router-link>
          </el-col>
        </el-col>

      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                schoolImages: []
            }
        },
        created() {

            this.$api.getSchool().then(
                res => {
                    this.schoolImages = res.data.data
                }
            )


        }
    }
</script>

<style scoped>
  .imageBox {


  }
</style>