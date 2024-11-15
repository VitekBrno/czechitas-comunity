import { createRouter, createWebHistory } from 'vue-router'
import Calendar from '../views/Calendar.vue'
import Registration from '../views/Registration.vue'
import Courses from '../views/Courses.vue'
import Account from '../views/Account.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/calendar'
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
})

export default router