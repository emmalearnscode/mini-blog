import * as Mutations from "./mutationTypes"

export default {
  state: {
    AllBlogPosts: [],
    blogs: {},
    currentPost: {}
  },
  getters: {
    currentPostWithParas(state) {
      return state.currentPost.content.split("\n")
    },
    AllPostsWithParas(state) {
      const newArr = state.AllBlogPosts.map(post => {
        let editedPost = {...post}
        editedPost.editedContent = post.content.split("\n")
        return editedPost
      })
      return newArr
    }
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
    async editBlogPost({dispatch}, payload) {
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
      dispatch("fetchAllBlogPosts")
      dispatch("fetchOneBlogPost", payload.id)
    },
    async deleteOnePost({dispatch}, payload) {
      await fetch(`http://localhost:5000/api/posts/${payload}`, {
        method: 'DELETE'
      })
      dispatch("fetchAllBlogPosts")
    }
  },
  
}