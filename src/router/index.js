import Vue from 'vue'
import Router from 'vue-router'
import LeetCodeRank from '@/components/LeetCodeRank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LeetCodeRank',
      component: LeetCodeRank
    }
  ]
})
