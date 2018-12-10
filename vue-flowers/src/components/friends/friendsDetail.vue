<template>
  <!--详情-->
  <div class="detailContent">
    <!--基本信息-->
    <div class="informHeader">
      <div class="photo"><span></span></div>
      <div class="area">上海</div>
      <div class="sign">如果你无法简洁的表达你的想法，那只说明你还不够了解它。 -- 阿尔伯特·爱因斯坦   个性签名</div>
      <div class="area colorTheme">帖子0</div>
    </div>
    <!--关注他人-->
    <div class="actOther">
      <div class="title">花友还关注他人</div>
      <div class="otherBox">
        <div class="peoplebox">
          <span class="photo"></span>
          <span class="name">小二</span>
        </div>
        <div class="peoplebox">
          <span class="photo"></span>
          <span class="name">小二</span>
        </div>
        <div class="peoplebox">
          <span class="photo"></span>
          <span class="name">小二</span>
        </div>
        <div class="peoplebox">
          <span class="photo"></span>
          <span class="name">小二</span>
        </div>
        <div class="peoplebox">
          <span class="photo"></span>
          <span class="name">小二</span>
        </div>
        <div class="peoplebox">
          <span class="icon"></span>
        </div>
      </div>
    </div>
    <!--最近活动-->
    <div class="actOther">
      <div class="title">最近美文</div>
      <dl class="textBox">
        <dt><img src="" alt=""></dt>
        <dd>
          <div class="nametitle"><em>【美】</em>春季如何防护月季</div>
          <div class="text">月季品种丰富，花色繁多，根据株型可以大致分为藤本月季......</div>
          <div class="nameZan">
            <div class="name">一米阳光</div>
            <div class="zanbox">
              <span class="icon"></span>
              <span class="num">123</span>
            </div>
            <div class="zanbox">
              <span class="icon"></span>
              <span class="num">345</span>
            </div>
          </div>
        </dd>
      </dl>
    </div>
    <input type="text" value="关 注" class="attentionIpt">
  </div>
</template>

<script>
export default {
  name: 'friends-detail'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .informHeader
    background:$color-text
    display:flex
    flex-direction:column
    .photo
      width:60px
      height:60px
      border-radius:50%
      border:1px solid $color-theme
      margin:15px auto 0 auto
    .area
      text-align:center
      color:$color-main
      font-size:$font-size-medium
      line-height:30px
    .sign
      padding:5px 15px
      color:$color-minor
      font-size:$font-size-medium
      line-height:24px
    .colorTheme
      color:$color-theme
  .actOther
    background:$color-text
    margin-top:10px
    padding-bottom:5px
    .title
      color:$color-main
      font-size:$font-size-large
      padding-left:15px
      line-height:30px
      padding-top:5px
    .otherBox
      display:flex
      padding:0 15px
      margin-top:5px
      .peoplebox
        flex:1
        span
          display:block
        .photo
          width:46px
          height:46px
          border-radius:50%
          border:1px solid $color-theme
          margin:auto
        .name
          font-size:$font-size-medium
          line-height:24px
          text-align:center
          color:$color-minor
        .icon
          height: 100%
          width:100%

    .textBox
      padding:10px
      display:flex
      height:100px
      dt
        flex:2
        border:1px solid $color-separation-one
      dd
        flex:3
        padding-left:5px
        .nametitle
          font-size:$font-size-large
          line-height:26px
          em
            color:$color-sub-theme
            font-style:normal
        .text
          font-size:$font-size-medium
          color:$color-auxiliary
          line-height:22px
        .nameZan
          display:flex
          margin-top:5px
          .name
            flex:3
            color:$color-auxiliary
            font-size:$font-size-medium
            line-height:22px
          .zanbox
            flex:2
            span
              display:block
              float: left
            .icon
              width:20px
              height:20px
            .num
              padding-left:5px
              line-height:22px
              color:$color-minor
              text-align:right
  .attentionIpt
    background:$color-theme
    color:$color-text
    font-size:$font-size-large
    position:fixed
    bottom:0px
    left:0px
    height: 44px
    width: 100%
    text-align: center
    z-index:100
</style>
