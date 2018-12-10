<template>
  <div class="accountlist">
    <div class="phoneBox">
      <span class="text">手机号:</span>
      <input type="text" placeholder="请输入手机号" class="textInput">
      <input type="button" value="发送验证" class="phoneCheck">
    </div>
    <input type="button" class="btn" value="绑定">
  </div>
</template>

<script>
export default {
  name: 'phone'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .accountlist
    background:$color-text
    .phoneBox
      display:flex
      height:50px
      border-bottom:1px solid $color-separation-one
      .text
        flex:50px
        text-align:right
        padding-right:8px
        line-height 50px
      .textInput
        outline:none
        color:$color-minor
      .phoneCheck
        flex:50px
        height: 34px
        border:1px solid $color-theme
        color:$color-theme
        margin:auto 10px
        background:$color-text
        line-height 34px
        border-radius:5px
    .btn
      margin: 20px 55px
      background:$color-theme
      color:$color-text
      font-size:$font-size-large
      height:44px
      border-radius:5px
</style>
