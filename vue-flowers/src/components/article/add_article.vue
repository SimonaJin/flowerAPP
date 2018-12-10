<template>
  <div class="articlBox">
    <div class="addArticlConent">
      <div class="inputBox">
        <input type="text" placeholder="请输入标题（必填）">
        <textarea placeholder="请输入文章为荣"></textarea>
        <div class="addphoto">
          <img src="" alt="">
          <div class="addpic">
            <span class="icon"></span>
            <span class="text">上传图片(最多5张)</span>
          </div>
        </div>
      </div>
      <div class="addpicText">
        <span class="icon"></span>
        <b>图文</b>
      </div>
    </div>
    <input type="button" value="发布" class="btn">
  </div>

</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/variable"
  .articlBox
    display:flex
    flex-direction:column
    .addArticlConent
      background:$color-text
      .inputBox
        padding:2px 10px
        input
          border-bottom:1px solid $color-separation-one
          padding-left:5px
          color:$color-minor
          width:100%
          height:35px
          box-sizing: border-box
        textarea
          box-shadow:0 0 9px rgba(139,137,137,0.3)
          margin:10px 0
          border-color:$color-separation-one
          width: 100%
          height:86px
          box-sizing: border-box
          resize:none
          font-size:$font-size-medium
          outline-color:$color-theme
          padding:5px
        .addphoto
          display:flex
          img
            flex:1
            width: 100%
            height:120px
            margin-right:10px
            background:$color-minor
          .addpic
            flex:1
            flex-direction:column
            border:1px dashed $color-separation-one
            span
              display:block
            .icon
              width:40px
              height:40px
              margin:20px auto
            .text
              width:100%
              text-align:center
              line-height:22px
              color:$color-minor
              font-size:$font-size-medium
      .addpicText
        width:56px
        height:56px
        margin:20px auto
        background:$color-sub-theme
        color:$color-text
        border-radius:50%
        box-shadow:0 0 6px rgba(0,0,0,0.3)
        text-align:center
        font-size:$font-size-small-s
        display:flex
        flex-direction:column
        .icon
          width:20px
          height:20px
          display:block
          margin:6px auto
    .btn
      margin:50px auto 20px auto
      background:$color-theme
      color:$color-text
      font-size:$font-size-large
      height:44px
      border-radius:5px
      width:72%
</style>
