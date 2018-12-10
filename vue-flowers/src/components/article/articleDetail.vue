<template>
  <div class="acticleContent">
    <!--标题-->
    <div class="acticleHeader">
      <!--文章标题-->
      <div class="title">春季如何防护月季春季如何防护月季春季如何防护月季</div>
      <div class="headerbox">
        <!--头像-->
        <div class="photo">
          <span></span>
        </div>
        <!--用户名称+时间-->
        <div class="name">
          <span class="text">小白兔的白</span>
          <span class="time">7小时前</span>
        </div>
        <!--关注按钮-->
        <div class="atticent">关注ta</div>
      </div>
    </div>
    <!--文章简介-->
    <div class="textIntroBox">
      <div class="text">月季品种丰富，花色繁多，根据株型可以大致分为藤本月季、灌木月季、微月三类。微月的修剪方法可以参考灌木月季，藤月放在最后介绍修剪方法</div>
      <div class="pic pic-one"><img src="" alt=""></div>
      <div class="zanlist">
        <div class="flowerfen">
          <span class="num">234</span>
          <span class="icon"></span>
        </div>
        <div class="browse"><span>3244</span> 浏览</div>
        <div class="answer"><span>3244</span> 回答</div>
      </div>
    </div>
    <!--评论专区-->
    <div class="specialArea">
      <div class="title">
        <strong>评论专区</strong>
        <span class="num">+234</span>
      </div>
      <div class="commentBox">
        <div class="headerbox">
          <!--头像-->
          <div class="photo">
            <span></span>
          </div>
          <!--用户名称+时间-->
          <div class="name">
            <span class="text">小白兔的白</span>
            <span class="time">7小时前</span>
          </div>
          <!--关注按钮-->
          <div class="atticent">关注ta</div>
        </div>
        <div class="discuss">月季品种丰富，花色繁多，。微月的修剪方法可以参考灌木月季，藤月放在最后介绍修剪方法。</div>
        <div class="zanbox">
          <div><span class="num">3244</span> 点赞</div>
          <div><span class="num">3244</span> 评论</div>
        </div>
        <div class="otherDiscuss">
          <div class="boxlist">
            <div>
              <div class="namebox">
                <span class="photo"></span>
                <span class="text">小黑的夜晚</span>
              </div>
              <div class="discussText">月季品种丰富，花色繁多，。微月的修剪方法可以参考灌木月季，藤月放在最后介绍修剪方法。</div>
            </div>
            <div>
              <div class="namebox">
                <span class="photo"></span>
                <span class="text">小黑的夜晚</span>
                <b>回复</b>
                <span class="text">大白天的干什么</span>
              </div>
              <div class="discussText">月季品种丰富，花色繁多，。微月的修剪方法可以参考灌木月季，藤月放在最后介绍修剪方法。</div>
            </div>
          </div>
          <div class="more">更多评论</div>
        </div>
      </div>
      <div class="commentBox">
        <div class="headerbox">
          <!--头像-->
          <div class="photo">
            <span></span>
          </div>
          <!--用户名称+时间-->
          <div class="name">
            <span class="text">小白兔的白</span>
            <span class="time">7小时前</span>
          </div>
          <!--关注按钮-->
          <div class="atticent">关注ta</div>
        </div>
        <div class="discuss">月季品种丰富，花色繁多，。微月的修剪方法可以参考灌木月季，藤月放在最后介绍修剪方法。</div>
        <div class="zanbox">
          <div><span class="num">3244</span> 点赞</div>
          <div><span class="num">3244</span> 评论</div>
        </div>
      </div>
    </div>
    <!--输入评论-->
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
  .acticleContent
    .acticleHeader
      background:$color-text
      padding:8px 10px 10px 10px
      border-bottom:1px solid $color-separation-one
      .title
        line-height:27px
        color:$color-main
        font-size:$font-size-large
        font-weight:bold
      .headerbox
        display:flex
        .photo
          margin-right:10px
          span
            display:block
            width:36px
            height:36px
            -webkit-border-radius: 50%
            -moz-border-radius: 50%
            border-radius: 50%
            background:$color-theme
            margin: auto
        .name
          flex:3
          span
            display:block
          .text
            line-height:20px
            color:$color-auxiliary
            font-size:$font-size-medium
          .time
            line-height:16px
            color:$color-minor
            font-size:$font-size-small
        .atticent
          width:70px
          background: $color-separation-one
          border-radius:8px
          color:$color-minor
          height:28px
          text-align:center
          line-height:28px
          font-size:$font-size-medium
          margin:auto
    .textIntroBox
      background:$color-text
      padding:10px
      .text
        color:$color-main
        line-height:20px
        font-size:$font-size-medium
      .pic
        margin:14px 0
        background:$color-separation-two
      .pic-one
        width: 100%
        height:200px
      .zanlist
        display:flex
        .flowerfen
          flex:2
          span
            display:block
            float: left
          .num
            line-height:22px
            font-size:$font-size-medium
            color:$color-theme
          .icon
            width:22px
            height:22px
        .browse
          flex:1
          color:$color-minor
          text-align:right
        .answer
          flex:1
          color:$color-minor
          text-align:right
    .specialArea
      background:$color-text
      margin-top:10px
      .title
        border-bottom:1px solid $color-separation-one
        padding-left:10px
        height:34px
        strong
          line-height:34px
          font-size:$font-size-medium-x
          font-weight:bold
          color:$color-main
          display: inline-block
          float: left
        .num
          display:block
          background:$color-theme
          height:22px
          line-height:22px
          font-size:$font-size-small
          color:$color-text
          float: left
          margin:6px 8px
          padding:0 8px
          border-radius:8px
      .commentBox
        padding:10px
        .headerbox
          display:flex
          .photo
            margin-right:10px
            span
              display:block
              width:36px
              height:36px
              -webkit-border-radius: 50%
              -moz-border-radius: 50%
              border-radius: 50%
              background:$color-theme
              margin: auto
          .name
            flex:3
            span
              display:block
            .text
              line-height:20px
              color:$color-auxiliary
              font-size:$font-size-medium
            .time
              line-height:16px
              color:$color-minor
              font-size:$font-size-small
          .atticent
            width:70px
            background: $color-separation-one
            border-radius:8px
            color:$color-minor
            height:28px
            text-align:center
            line-height:28px
            font-size:$font-size-medium
            margin:auto
        .discuss
          margin-top:5px
          color:$color-main
          font-size:$font-size-medium
          line-height:20px
        .zanbox
          width:100%
          display:inline-block
          line-height:26px
          div
            font-size:$font-size-medium
            color:$color-minor
            float: left
            margin-right:10px
        .otherDiscuss
          background:$color-separation-two
          padding:10px
          .namebox
            .photo
              float: left
              margin-right:10px
              display:block
              width:28px
              height:28px
              -webkit-border-radius: 50%
              -moz-border-radius: 50%
              border-radius: 50%
              background:$color-theme
              margin: auto 5px auto auto
            .text,b
              line-height:28px
              font-size:$font-size-medium
            .text
              color:$color-minor
            b
              color:$color-theme
          .discussText
            color:$color-main
            font-size:$font-size-medium
            line-height:22px
          .more
            width: 100%
            text-align:center
            font-size:$font-size-medium
            color:$color-theme
            line-height: 24px
</style>
