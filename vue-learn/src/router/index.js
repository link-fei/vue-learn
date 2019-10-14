import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import IndexPage from '@/pages/index'
import detailPage from '@/pages/detail'
import forecast from '@/pages/details/forecast'
import count from '@/pages/details/count'
import analysis from '@/pages/details/analysis'
import publish from '@/pages/details/publish'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
  	{
  		path:'/',
  		component:IndexPage
  	},{
  		path:'/detail',
  		component:detailPage,
      children:[
        {
          path:'forecast',
          component:forecast
        },
        {
          path:'count',
          component:count
        },
        {
          path:'analysis',
          component:analysis
        },
        {
          path:'publish',
          component:publish
        }
      ]
  	}
  ]
})
