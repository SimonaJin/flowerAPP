<template>
  <div class="messageList">
    <ul>
      <li>
        <span class="text">最近有<em>1</em>人关注你</span>
        <span class="time">2小时前</span>
      </li>
      <li>
        <span class="text textline">你的美文“<b>成都最美花园成都最美花园成都最美花园成都最美花园成都最美花园成都最美花园</b>”被<em>1</em>人赞过</span>
        <span class="time">2017-7-4</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'message'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .messageList
    background:$color-text
    ul
      li
        padding:5px 15px
        border-bottom:1px solid $color-separation-one
        .text
          color:$color-main
          font-size:$font-size-medium
          line-height:36px
          em
            color:$color-theme
            font-style:normal
          b
            color:$color-minor
        .textline
          line-height:24px
        .time
          color:$color-minor
          font-size:$font-size-medium
          float: right
          line-height:36px
        .textline+.time
          line-height:24px
</style>
