import Vue from 'vue'
import Router from 'vue-router'
import YearCalendar from '@/components/YearCalendar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'YearCalendar',
      component: YearCalendar
    }
  ]
})
