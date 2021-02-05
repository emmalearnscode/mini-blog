const DataStore = require("nedb-promise");
const posts = new DataStore({ filename: "./db/posts.db", autoload: true });
module.exports = {
  async getAll() {
    return await posts.find({});
  },

  async create(body) {
    if (body.title == "" || body.content == "") return;
    const newPost = await posts.insert({
      title: body.title,
      content: body.content,      
    });
    return newPost
  },

  async getOne(postID) {
    return await posts.findOne({ _id: postID });
  },

  async update(body, postID) {
    if (body.title == "" || body.content == "") return;
    let post = await posts.findOne({ _id: postID });
    post = await posts.update(post, {
      $set: body,
    });
    return post;
  },

  async delete(postID) {
    return await posts.remove({ _id: postID });
  },
};
