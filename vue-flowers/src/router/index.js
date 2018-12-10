import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/login/login'
import Index from 'components/index/index'
import Friends from 'components/friends/friends'
import Article from 'components/article/article'
import Mine from 'components/mine/mine'
// import Question from 'components/question/question'
import Tab from 'components/tab/tab'
// mini
import MyInformation from 'components/mine/myInformation'
import Petname from 'components/mine/petname'
import MySign from 'components/mine/mySign'
// account
import Account from 'components/mine/account'
import Password from 'components/mine/password'
import Phone from 'components/mine/phone'
Vue.use(Router)

/* eslint-disable no-new */
export default new Router({
  routes: [
    {
      path: '/',
      redirect: Login
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/friends',
      component: Friends
    },
    {
      path: '/article',
      component: Article
    },
    {
      path: '/mine',
      component: Mine,
      children: [
        {
          path: '/myinformation',
          component: MyInformation,
          children: [
            {
              path: '/petname',
              component: Petname
            },
            {
              path: '/mySign',
              component: MySign
            }
          ]
        },
        {
          path: '/account',
          component: Account,
          children: [
            {
              path: '/Password',
              component: Password
            },
            {
              path: '/phone',
              component: Phone
            }
          ]
        }
      ]
    },
    // {
    //   path: '/question',
    //   component: Question
    // },
    {
      path: '/tab',
      component: Tab
    }
  ]
})
