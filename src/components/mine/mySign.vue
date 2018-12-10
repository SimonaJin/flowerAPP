<template>
<div class="signBox">
  <textarea placeholder="请输入个性签名"></textarea>
  <div class="title">
    <span class="icon"></span>请注意个性签名在个人信息页最多显示60个字，多余的字则会隐藏
  </div>
  <input type="button" class="btn" value="保存">
</div>
</template>

<script>
export default {
  name: 'my-sign'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
    .signBox
      background:$color-text
      padding:15px
      display:flex
      flex-direction:column
      textarea
        color:$color-minor
        border-color:$color-separation-one
        height:100px
        padding:8px
        line-height:$font-size-large-x
        font-size:$font-size-large
        box-shadow:0 0 5px $color-separation-two inset
      .title
        color:$color-minor
        line-height: 30px
        margin-top: 10px
        .icon
          width: 36px;
          display: block
          height: 29px
          float: left
      .btn
        margin: 14px 25px
        background:$color-theme
        color:$color-text
        font-size:$font-size-large-x
        height:44px
        border-radius:5px
</style>
