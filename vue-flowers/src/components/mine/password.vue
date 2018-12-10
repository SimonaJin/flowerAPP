<template>
<div class="accountlist">
  <ul class="accountbox">
    <li>
      <span class="title word-space">旧密码</span>
      <input type="text" placeholder="请输入密码">
    </li>
    <li>
      <span class="title word-space">新密码</span>
      <input type="text" placeholder="请输入密码">
    </li>
    <li>
      <span class="title">再次输入</span>
      <input type="text" placeholder="请输入密码">
    </li>
  </ul>
  <input type="button" class="btn" value="提交">
</div>
</template>

<script>
export default {
  name: 'password'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .accountlist
    background:$color-text
    margin-top: 10px
    .accountbox
      li
        display:flex
        height:50px
        padding-left:22px
        border-bottom:1px solid $color-separation-one
        .title
          flex:1
          line-height:50px
        .word-space
          letter-spacing:7px
        input
          flex:4
          margin-left:10px
          outline:none
          color:$color-minor
    .btn
      margin: 20px 55px
      background:$color-theme
      color:$color-text
      font-size:$font-size-large
      height:44px
      border-radius:5px
</style>
