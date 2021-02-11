import * as Mutations from "./mutationTypes"

export default {
  state: {
    AllBlogPosts: [],
    blogs: {},
    currentPost: {}
  },
  mutations: {
    [Mutations.FETCH_ALL_BLOG_POSTS](state, payload) {
      state.AllBlogPosts = payload
      for (let post of payload) {
        state.blogs[post._id] = post
      }
      
    },
    [Mutations.ADD_NEW_BLOG_POSTS](state, payload) {
      state.AllBlogPosts.push(payload)
      state.blogs[payload._id] = payload
      
    },
    [Mutations.FETCH_ONE_BLOG_POST](state, payload) {
      state.currentPost = payload;
      
    },
    [Mutations.EDIT_BLOG_POST](state, payload) {
      //Update AllBlogPosts, blogs and current post in state
      console.log(state, payload);
    }
  },
  actions: {
    async addBlogPost({commit}, payload) {
      const response = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      })
      const newPost = await response.json()
      commit(Mutations.ADD_NEW_BLOG_POSTS, newPost)

    },
    async fetchAllBlogPosts({commit}) {
      const response = await fetch('http://localhost:5000/api/posts')
      const data = await response.json()
      
      commit(Mutations.FETCH_ALL_BLOG_POSTS, data)
    },
    async fetchOneBlogPost({commit}, payload) {
      const response = await fetch(`http://localhost:5000/api/posts/${payload}`)
      const post = await response.json()
      commit(Mutations.FETCH_ONE_BLOG_POST, post)
    },
    async editBlogPost({commit}, payload) {
      let body = {
        title: payload.title, 
        content: payload.content
      }
      await fetch(`http://localhost:5000/api/posts/${payload.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      })
      //const updatedPost = await response.json();
      commit(Mutations.EDIT_BLOG_POST, payload.id)
    }
  },
  
}