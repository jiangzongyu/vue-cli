import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import international from '@/components/international'
import society from '@/components/society'
import military from '@/components/military'
import culture from '@/components/culture'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Index
    },
    {
      path:'/international',
      component:international
    },
    {
      path:'/society',
      component:society
    },
    {
      path:'/military',
      component:military
    },
    {
      path:'/culture',
      component:culture
    }    
  ]
})
