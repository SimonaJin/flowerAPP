<template>
  <div class="fdlist">
    <ul>
      <li>
        <div class="photo"></div>
        <div class="namebox">
          <span class="name">一米阳光</span>
          <span class="area">北京</span>
        </div>
        <div class="collectbox">
          <span class="icon"></span>
          <span class="text">互相关注</span>
        </div>
      </li>
      <li class="active">
        <div class="photo"></div>
        <div class="namebox">
          <span class="name">一米阳光</span>
          <span class="area">北京</span>
        </div>
        <div class="collectbox">
          <span class="icon"></span>
          <span class="text">被关注</span>
        </div>
      </li>
      <li class="focus">
        <div class="photo"></div>
        <div class="namebox">
          <span class="name">一米阳光</span>
          <span class="area">北京</span>
        </div>
        <div class="collectbox">
          <span class="icon"></span>
          <span class="text">已关注</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'fridendslist'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
.fdlist
  background:$color-text
  li
    display:flex
    height:50px
    border-bottom:1px solid-color $color-separation-one
    .photo
      width:40px
      height:40px
      background:$color-minor
      -webkit-border-radius: 50%
      -moz-border-radius: 50%
      border-radius: 50%
      margin:5px 14px 5px 22px
    .namebox
      flex:4
      span
        display:block
        width:100%
      .name
        color:$color-main
        line-height:26px
      .area
        color:$color-minor
        font-size:$font-size-medium
        line-height:$font-size-large
    .collectbox
      width:50px
      padding-right:10px
      flex:1
      text-align:center
      span
        display:block
      .icon
        height:28px
      .text
        font-size: $font-size-small
        line-height:$font-size-medium-x
        color:$color-minor
  .active
    .collectbox
      .text
        color:$color-theme
  .focus
    .collectbox
      .text
        color:$color-sub-theme
</style>
