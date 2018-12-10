<template>
  <div id="app">
    <!--<login></login>-->
    <m-header></m-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab></tab>
  </div>
</template>

<script>
// import login from 'components/login/login.vue'
import MHeader from 'components/header/header.vue'
import tab from 'components/tab/tab.vue'
export default {
  components: {
    MHeader,
    tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
