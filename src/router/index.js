import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import i18n from '../plugins/i18n.js'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((error) => {
  });
};
const routes = [
  { path: '/'+i18n.locale, redirect: '/'+i18n.locale + '/gids' },
  {
    path: '/'+i18n.locale+'/404',
    name: '404',
    component: () => import ('../views/404'),
    meta: {layout: 'main', auth: true},
  },
  {
    path: '/'+i18n.locale+'/login',
    name: 'login',
    component: () => import ('../views/login'),
    meta: {layout: 'additional', auth: false},
  },
  {
    path: '/'+i18n.locale+'/login2',
    name: 'login2',
    component: () => import ('../views/login2'),
    meta: {layout: 'additional', auth: false},
  },
  {
    path: '/'+i18n.locale+'/gids',
    name: 'gids',
    component: () => import ('../views/gids'),
    meta: {layout: 'main', auth: true},
  },
  {
    path: '/'+i18n.locale+'/gids/single',
    name: 'gids_id',
    component: () => import ('../views/gids/_id'),
    meta: {layout: 'main', auth: true},
  },
  {
    path: '/'+i18n.locale+'/gids/add',
    name: 'gids_add',
    component: () => import ('../views/gids/add'),
    meta: {layout: 'main', auth: true},
  },
  {
    path: '/'+i18n.locale+'/statistics',
    name: 'statistics',
    component: () => import ('../views/statistics'),
    meta: {layout: 'main', auth: true},
  },
  {
    path: '/'+i18n.locale+'/catalog-regions',
    name: 'catalog-regions',
    component: () => import ('../views/catalog/catalog-regions.vue'),
    meta: {layout: 'main', auth: true},
  },
  {
    path: '/'+i18n.locale+'/catalog-langs',
    name: 'catalog-langs',
    component: () => import ('../views/catalog/catalog-langs.vue'),
    meta: {layout: 'main', auth: true},
  },
  {
    path: '/'+i18n.locale+'/catalog-category',
    name: 'catalog-category',
    component: () => import ('../views/catalog/catalog-category.vue'),
    meta: {layout: 'main', auth: true},
  },
  {
    path: '/'+i18n.locale+'/catalog-district',
    name: 'catalog-district',
    component: () => import ('../views/catalog/catalog-district.vue'),
    meta: {layout: 'main', auth: true},
  },
  {
    path: '/'+i18n.locale+'/applications',
    name: 'applications',
    component: () => import ('../views/applications'),
    meta: {layout: 'main', auth: true},
  },
  {
    path: '/'+i18n.locale+'/applications/:id',
    name: 'applications_id',
    component: () => import ('../views/applications/_id'),
    meta: {layout: 'main', auth: true},
  },
  {
    path: '/'+i18n.locale+'/settings',
    name: 'settings',
    component: () => import ('../views/settings'),
    meta: {layout: 'main', auth: true},
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  let routeLocale = to.fullPath.split('/')[1];
  if(routeLocale != i18n.locale){
    next({path:'/'+i18n.locale})
  }else{
    next();
  }
  next()
})

export default router
