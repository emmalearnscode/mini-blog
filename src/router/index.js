import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewPost from "@/components/NewPost.vue"
import BlogPost from "@/components/BlogPost.vue"
import EditPost from "@/components/EditPost.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newPost',
    name: 'NewPost',
    component: NewPost
  },
  {
    path: '/post/:id',
    name: 'BlogPost',
    component: BlogPost
  },
  {
    path: '/post/:id/edit',
    name: 'EditPost',
    component: EditPost
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
