import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Profile from '../pages/Profile.vue'
import Settings from '../pages/Settings.vue'
import Analytics from '../pages/Analytics.vue'
import Files from '../pages/Files.vue'
import Notifications from '../pages/Notifications.vue'
import Help from '../pages/Help.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: { icon: '🏠', label: 'Dashboard' }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { icon: '👤', label: 'Profile' }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { icon: '⚙️', label: 'Settings' }
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: Analytics,
    meta: { icon: '📊', label: 'Analytics' }
  },
  {
    path: '/files',
    name: 'Files',
    component: Files,
    meta: { icon: '📁', label: 'Files' }
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications,
    meta: { icon: '🔔', label: 'Notifications' }
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
    meta: { icon: '❓', label: 'Help' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
