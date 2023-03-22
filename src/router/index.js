import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main'
import Offline from '@/views/Offline'
import Online from '@/views/Online'
import WardrobeRevision from '@/views/WardrobeRevision'
import ShoppingAccompaniment from '@/views/ShoppingAccompaniment'
import ShootingStyling from '@/views/ShootingStyling'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/offline',
    name: 'Offline',
    component: Offline
  },
  {
    path: '/online',
    name: 'Online',
    component: Online
  },
  {
    path: '/wardrobe/revision',
    name: 'WardrobeRevision',
    component: WardrobeRevision
  },
  {
    path: '/shopping/accompaniment',
    name: 'ShoppingAccompaniment',
    component: ShoppingAccompaniment
  },
  {
    path: '/shooting/styling',
    name: 'ShootingStyling',
    component: ShootingStyling
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
