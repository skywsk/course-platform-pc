<template>
  <div id="app">
    <tip v-show="$route.meta.Tipshow"></tip>
    <router-view></router-view>
    <tail v-show="$route.meta.Tailshow"></tail>
  </div>
</template>

<script>
    import Tip from './components/Tip'
    import Tail from './components/Tail'
    export default {
        name: 'App',
        components: {
            Tip,
            Tail,
        },
        mounted() {

        },

    }

</script>

<style>

</style>
