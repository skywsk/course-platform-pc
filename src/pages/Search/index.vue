<template>
  <div class="search">
    search section
    <h1>{{$route.params.keyword}}</h1>
    <h1>{{$route.query.k}}</h1>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
.search{
  margin-top: 300px;
  background-color: #86ff73;
  height: 100px;
}
</style>