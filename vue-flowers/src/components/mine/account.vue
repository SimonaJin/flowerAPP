<template>
  <div class="accountlist">
    <ul class="accountbox">
      <router-link tag="li" to="/Password">
        <span class="icon"></span>
        <span class="title">密码修改</span>
        <span class="icon"></span>
      </router-link>
      <li>
        <span class="icon"></span>
        <span class="title">忘记密码</span>
        <span class="icon"></span>
      </li>
      <router-link tag="li" to="/phone">
        <span class="icon"></span>
        <span class="title">绑定/解绑手机</span>
        <span class="icon"></span>
      </router-link>
    </ul>
    <input type="button" class="btn btn-red" value="退出账号">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'account'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .accountlist
    background:$color-text
    margin-top: 10px
    display:flex
    flex-direction:column
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
    .btn
      margin: 20px 55px
      background:$color-theme
      color:$color-text
      font-size:$font-size-large
      height:44px
      border-radius:5px
    .btn-red
      background:$color-background-two
</style>
