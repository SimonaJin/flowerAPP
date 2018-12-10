<template>
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/index">
        <span class="tab-icon"></span>
        <span class="tab-link">首页</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/article">
        <span class="tab-icon"></span>
        <span class="tab-link">美文</span>
      </router-link>
      <!--<router-link tag="div" class="tab-item" to="/question">-->
        <!--<span class="tab-icon"></span>-->
        <!--<span class="tab-link">问花友</span>-->
      <!--</router-link>-->
      <router-link tag="div" class="tab-item" to="/friends">
        <span class="tab-icon"></span>
        <span class="tab-link">花友社</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/mine">
        <span class="tab-icon"></span>
        <span class="tab-link">我</span>
      </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
.tab
  position:fixed
  bottom: 0
  left: 0
  display:flex
  width: 100%
  height: 48px
  line-height: 48px
  font-size: 14px
  background:$color-text
  .tab-item
    flex: 1
    text-align:center
    .tab-link
      color:$color-main
      font-size: 14px
    &.router-link-active
      .tab-link
        color:$color-theme
</style>
