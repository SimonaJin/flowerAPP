<template>
  <div class="loginContent">
    <div class="loginTitle">Flower Friend</div>
    <div class="login-box">
      <div class="loginInput">
        <span class="icon"></span>
        <input type="text" placeholder="请输入用户名" v-model="uname">
        <span class="icon"></span>
      </div>
      <div class="loginInput">
        <span class="icon"></span>
        <input type="password" placeholder="请输入密码" v-model="upwd">
        <span class="icon"></span>
      </div>
      <p class="prompt" id="promptTitle"></p>
      <input type="button" value="登 录" class="btn" @click="loginUser">
    </div>
    <div class="login_question">
      <a href="" target="_blank">立即注册</a>
      <a href="" target="_blank">忘记密码</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      uname: '',
      upwd: ''
    }
  },
  methods: {
    loginUser () {
      console.log(123)
      let data = {'username': this.uname, 'age': this.upwd}
      console.log(data)
      this.$http.post('/api/login/login', data).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/minxin"
  .loginContent
    background-color:rgba(0,0,0,0.6)
    width: 100%
    height: 1334px
    display:inline-block
    .loginTitle
      color:$color-theme
      text-align: center
      margin: 50px auto 0
      padding: 40px 0
      line-height: 67px
      font-size: 54px
      width: 224px
    .login-box
      margin:0 30px
      .loginInput
        border-bottom:1px solid $color-text-d
        height:52px
        .icon
          width:26px
          height:52px
          display: inline-block
          vertical-align: middle
        input
          background:transparent
          color:$color-text
          height 52px
          width:80%;
          padding-left:8px
          outline:none
          font-size:$font-size-medium-x
          &::-webkit-input-placeholder
            color:$color-text-l;
      .prompt
        color:transparent
        line-height: 20px;
        font-size:$font-size-small-s
        padding-left:8px
        height:20px
      /*display:none*/
      .btn
        color:$color-text
        background:$color-theme
        height:42px
        width:100%
        border-radius:5px
    .login_question
      margin:0 30px
      padding-top: 10px;
      height: 42px;
      a
        line-height:42px
        font-size: $font-size-medium
        color:$color-text-l
        display:inline-block
        &:first-child
          float:left
        &:last-child
          float:right
</style>
