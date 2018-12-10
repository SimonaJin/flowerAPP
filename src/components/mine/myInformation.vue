<template>
  <div class="accountlist">
    <ul class="accountbox">
      <router-link tag="li" to="">
        <span class="title">头像</span>
        <span class="photo"></span>
        <span class="icon"></span>
      </router-link>
      <router-link tag="li" to="/Petname">
        <span class="title">昵称</span>
        <span class="anwser">一米阳光</span>
        <span class="icon"></span>
      </router-link>
      <li>
        <span class="title">性别</span>
        <span class="anwser">女</span>
        <span class="icon"></span>
      </li>
      <li>
        <span class="title">生日</span>
        <span class="anwser">1991-04-16</span>
        <span class="icon"></span>
      </li>
      <router-link tag="li" to="/mySign">
        <span class="title">个性签名</span>
        <span class="anwser">水电费根据你的风积分人气哦客服扣扣局哦哦</span>
        <span class="icon"></span>
      </router-link>
    </ul>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'my-information'
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
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
          flex:0 0 50px
        .photo
          width:36px
          height:36px
          -webkit-border-radius: 50%
          -moz-border-radius: 50%
          border-radius: 50%
          background:$color-theme
          margin: auto
        .anwser
          color:$color-main
          flex:2
          line-height:50px
          text-align:right
          overflow:hidden
        .title
          flex:1
          width:60px
          line-height:50px
          padding-left:8px
          color:$color-minor
      :last-child
        border-bottom:none
</style>
