<template>
 <div id="graph">

 </div>
</template>

<script>
    export default {
        name: "test",
       created() {
         this.$api.getKnowledgeGraph().then(
           res=>{
            console.log(res)
           }
         )
       }
    }
</script>

<style scoped>
#graph{
 width: 1000px;
 height: 600px;

}
</style>