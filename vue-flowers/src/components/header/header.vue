<template>
<header class="m-header">
  <span class="icon icon-back"></span>
  <span class="title">我</span>
  <span class="icon icon-calender"></span>
  <span class="icon icon-message"></span>
</header>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .m-header
    width: 100%
    height:42px
    background: $color-theme
    position:relative
    span
      display: block
      height:42px
    .icon
      width:36px
      position:absolute
      top:0px
      &.icon-back
        left:0px
      &.icon-calender
        right:36px
      &.icon-message
        right:0px
    .title
      width: 100%
      text-align:center
      color:$color-text
      line-height: 42px
      font-size: $font-size-large
</style>
