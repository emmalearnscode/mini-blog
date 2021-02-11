const DataStore = require("nedb-promise");
const posts = new DataStore({ filename: "./db/posts.db", autoload: true });

function validate(title, content){
  return title && content && (title.length > 0 || content.length > 0)
}

module.exports = {
  async getAll() {
    return await posts.find({});
  },

  async create(body) {
    const {title, content} = body
    console.log(title, content);
    if(validate(title, content)){
      return await posts.insert({
        title: body.title,
        content: body.content,      
      })    
    }else{ return false }
  },

  async getOne(postID) {
    return await posts.findOne({ _id: postID });
  },

  async update(body, postID) {
    const {title, content} = body
    if(validate(title, content)){
      let post = await posts.findOne({ _id: postID });
      if(!post){ return null }
      post = await posts.update(post, {
        $set: body,
      })
      return post
    }else{ 
      return false 
    }
  },

  async delete(postID) {
    return await posts.remove({ _id: postID });
  },
};
