<template>
  <div>
    <button @click="tiao">test</button>

  </div>
</template>

<script>
    export default {
        name: "index",
        methods:{
            tiao(){
                this.$router.push()
            }
        }
    }
</script>

<style scoped>

</style>