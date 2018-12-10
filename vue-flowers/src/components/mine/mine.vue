<template>
  <div class="mine-content">
    <!--头像基本信息-->
    <div class="inform">
      <!--头像-->
      <div class="head-portrait">
        <span class="portrait"></span>
      </div>
      <router-link class="informbox" to="/myinformation"  tag="div">
        <div class="namebox">
          <div class="petname">一米阳光</div>
          <div class="praise">
            <span class="icon"></span>
            <span class="num">7835</span>
          </div>
        </div>
        <div class="personal-sign">IcoMoon是独特的双音字体图标,并与一个正确对齐字形,它是唯一的Web服务生成清晰的图标字体。Icomoon官网地址及相关网址资源如</div>
      </router-link>
    </div>
    <!--文章管理-->
    <div class="textlist">
      <div class="textbox">
        <div class="textnum">234</div>
        <div class="title">我的</div>
      </div>
      <div class="textbox">
        <div class="textnum">4791</div>
        <div class="title">收藏</div>
      </div>
      <div class="textbox">
        <div class="textnum">35</div>
        <div class="title">草稿</div>
      </div>
    </div>
    <!--账号管理-->
    <div class="accountlist">
      <ul class="accountbox">
        <router-link tag="li" to="/account">
          <span class="icon"></span>
          <span class="title">账号管理</span>
          <span class="icon"></span>
        </router-link>
        <li>
          <span class="icon"></span>
          <span class="title">关于</span>
          <span class="icon"></span>
        </li>
        <li>
          <span class="icon"></span>
          <span class="title">推荐给朋友</span>
          <span class="icon"></span>
        </li>
        <li>
          <span class="icon"></span>
          <span class="title">清除缓存</span>
          <span class="icon"></span>
        </li>
      </ul>
    </div>
    <!--弹出框-->
    <div class="alertBox">
      <span class="icon"></span>
      <span class="text">已清除234M</span>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .mine-content
    .inform
      background:$color-text
      height:115px
      display: flex
      .head-portrait
        width:110px
        flex: 0 10px 0 15px
        height:115px
        .portrait
          width:74px
          height:74px
          display:block
          margin:16px auto
          -webkit-border-radius: 50%
          -moz-border-radius: 50%
          border-radius: 50%
          background:$color-theme
          border:2px solid $color-text
          box-shadow: 3px 5px 5px $color-auxiliary
      .informbox
        flex: 1
        .namebox
          display:flex
          height:44px
          overflow:hidden
          padding-right:10px
          .petname
            font-size: $font-size-large
            color:$color-main
            line-height: 44px
            flex:2
          .praise
            flex:1
            span
              height:44px
              display:block
              line-height:44px
            .icon
              width:40px
              float: left
            .num
              color:$color-auxiliary
              float: right
              padding-right:5px
        .personal-sign
          line-height:20px
          font-size:$font-size-medium
          color:$color-minor
          height: 60px
          overflow: hidden
          padding-right: 10px
          &:after
            content:'...'
    .textlist
      display:flex
      background:$color-text
      margin-top: 10px
      height:54px
      .textbox
        flex:1
        text-align:center
        padding: 5px 0;
        .textnum
          color:$color-auxiliary
          font-size:$font-size-large
          line-height:24px
        .title
          color:$color-minor
          font-size:$font-size-medium
          line-height: 20px

    .accountlist
      background:$color-text
      margin-top: 10px
      .accountbox
        li
          display:flex
          height:50px
          padding-left:22px
          border-bottom:1px solid $color-separation-one
          .icon
            flex:0 0 40px
          .title
            flex:1
            line-height:50px
            padding-left:8px
        :last-child
          border-bottom:none
    .alertBox
      padding: 5px
      height: 26px
      background: rgba(0,0,0,0.3)
      min-width: 130px
      position: absolute
      left: 35%
      bottom: 60px
      border-radius: 5px
      .icon
        width:26px
        height:26px
        display:block
        margin-left:5px
        float: left
      .text
        color:$color-text
        float: left
        line-height:26px
</style>
