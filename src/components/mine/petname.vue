<template>
  <div class="petnamebox">
    <input type="text" placeholder="请输入昵称" class="petname">
    <input type="button" class="btn" value="保存">
  </div>
</template>

<script>
export default {
  name: 'petname'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .petnamebox
    background:$color-text
    padding:15px
    display:flex
    flex-direction:column
    .petname
      color:$color-minor
      border-color:$color-separation-one
      height:46px
      padding:2px 8px
      line-height:$font-size-large-x
      font-size:$font-size-large
      box-shadow:0 0 5px $color-separation-two inset
    :focus
      outline-color:$color-theme
    .btn
      margin: 14px 25px
      background:$color-theme
      color:$color-text
      font-size:$font-size-large-x
      height:44px
      border-radius:5px
</style>
