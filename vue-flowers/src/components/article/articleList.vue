<template>
  <div>
    <div class="articlelistContent">
      <div class="listHeader">
        <div class="photo"></div>
        <div class="namebox">
          <div class="name">月季<span class="num">234984人关注</span></div>
          <div class="text">【美】2349</div>
        </div>
        <div class="attend">关注</div>
      </div>
      <div class="tablist">
        <div class="item active">综合</div>
        <div class="item">最热</div>
        <div class="icon"></div>
      </div>
      <div class="secondlist" style="display: none">
        <ul>
          <li class="active">
            <span class="text">综合排序<em class="icon"></em></span>
          </li>
          <li>
            <span class="text">按热度从高到低<em class="icon"></em></span>
          </li>
          <li>
            <span class="text">按时间排序<em class="icon"></em></span>
          </li>
          <li>
            <span class="text">按评分从高到低<em class="icon"></em></span>
          </li>
        </ul>
      </div>
      <div class="articlelist">
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
      <div class="edit"><span class="icon"></span></div>

    </div>
    <!--遮罩-->
    <div class="mask" style="display: none"></div>
    <!--弹出-->
    <div class="alertbox" style="display: none">
      <h3>分类</h3>
      <div class="alerlist">
        <span>月季月季季月月季季月月季季月</span>
        <span>月季月季月季季月</span>
        <span>月季月季</span>
        <span>月季月</span>
      </div>
      <div class="inputbox">
        <input type="button" value="取消" class="btn-cencle">
        <input type="button" value="确定" class="btn">
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

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/variable"
  .articlelistContent
    .listHeader
      background:$color-text
      padding 10px
      display:flex
      height:50px
      .photo
        width:50px
        height:50px
        -webkit-border-radius: 50%
        -moz-border-radius: 50%
        border-radius: 50%
        background:$color-theme
        margin: auto
      .namebox
        flex:4
        margin-left:10px
        .name
          color:$color-main
          font-size:$font-size-large
          line-height:24px
          font-weight:bold
          .num
            font-size:$font-size-medium
            color:$color-minor
            margin-left:8px
        .text
          color:$color-minor
          font-size:$font-size-medium
          line-height:18px
      .attend
        flex:1
        border:1px solid $color-sub-theme
        color:$color-sub-theme
        border-radius:5px
        text-align:center
        height:42px
        line-height:42px
        margin:auto
    .tablist
      margin-top:10px
      height:36px
      background:$color-text
      border-bottom:1px solid $color-separation-one
      display:flex
      position:relative
      .item
        flex:2
        line-height:36px
        text-align:center
        color:$color-main
        font-size:$font-size-medium
        &.active
          color:$color-theme
      .icon
        flex:1

    .secondlist
      position:absolute
      background:$color-text
      box-sizing:border-box
      box-shadow:0 0 8px rgba(0,0,0,0.3)
      width: 100%
      li
        border-bottom:1px solid $color-separation-one
        padding-left:20px
        line-height:30px
        color:$color-minor
        font-size:$font-size-medium
        .text
          display block
          .icon
            flex:1
            float: right
            margin-right:10px
            width:30px
            height:30px
    .articlelist
      background:$color-text
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
    .edit
      position:fixed
      bottom: 15%
      right:20px
      width:42px
      height:42px
      -webkit-border-radius: 50%
      -moz-border-radius: 50%
      border-radius: 50%
      background:$color-theme
      color:$color-text
      box-shadow:0 0 8px rgba(0,0,0,0.6)
  .mask
    background:rgba(0,0,0,0.5)
    position:absolute
    left:0px
    top:0px
    width: 100%
    height:100%
    z-index:100
  .alertbox
    position:absolute
    right:0px
    top:0px
    background:$color-text
    z-index:101
    height:100%
    width:80%
    padding-left:10px
    h3
      margin-top:10px
      padding-left: 10px
      color:$color-main
      line-height:36px
      font-size:$font-size-large-x
    .alerlist
      margin-top:10px
      span
        color:$color-minor
        border:1px solid $color-minor
        padding:2px 10px
        line-height:22px
        font-size:$font-size-medium
        border-radius:5px
        margin-right:8px
        margin-bottom: 10px
        float: left
    .inputbox
      position:absolute
      bottom:0
      right:0
      display:flex
      width:100%
      input
        flex :1
        color:$color-text
        font-size:$font-size-large
        height:44px
      .btn-cencle
        background:$color-minor
      .btn
        background:$color-theme
</style>
