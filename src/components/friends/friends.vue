<template>
  <div class="friendsContent">
    <!--搜索-->
    <!--tab-->
    <div class="friendBox">
      <div class="boxname active">
        <span class="icon"></span>
        <span>花友</span>
      </div>
      <div class="boxname">
        <span class="icon"></span>
        <span>关注</span>
      </div>
      <div class="boxname">
        <span class="icon"></span>
        <span>粉丝</span>
      </div>
    </div>
    <!--花友列表-->
    <div class="friendsList">
      <ul>
        <li>
          <span class="photo"></span>
          <span class="name">张三</span>
        </li>
        <li>
          <span class="photo"></span>
          <span class="name">李四</span>
        </li>
      </ul>
      <div class="namelist">
        <span>a</span>
        <span>b</span>
        <span>c</span>
        <span>d</span>
        <span>e</span>
        <span>f</span>
        <span>g</span>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
.friendsContent
  .friendBox
    background:$color-text
    display:flex
    height:50px
    .boxname
      flex:1
      line-height:50px
      text-align:center
      span
        display:block
        float:left
      .icon
        width:36px
        height:50px
        margin-left:20px
    .active
        span
          color:$color-theme
  .friendsList
    background:$color-text
    margin-top:10px
    position:relative
    ul
      display:flex
      flex-direction:column
      li
        height:50px
        border-bottom:1px solid $color-separation-one
        span
          display:block
          float: left
        .photo
          width:40px
          height:40px
          background:$color-minor
          -webkit-border-radius: 50%
          -moz-border-radius: 50%
          border-radius: 50%
          margin:5px 14px 5px 22px
        .name
          line-height:50px
          color:$color-main
      :last-child
        border-bottom:none
    .namelist
      position:fixed
      right:5px
      bottom:15%
      display:flex
      flex-direction:column
      background:rgba(0,0,0,0.3)
      width:20px
      z-index:100
      text-align:center
      line-height:20px
      border-radius:8px
      span
        color:$color-text
        font-size:$font-size-small

</style>
