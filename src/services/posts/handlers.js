import PostModel from "../../models/post_schema.js";

const getPosts = async (req, res, next) => {
  try {
    const posts = await PostModel.find();
    res.status(200).send(posts);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const createPosts = async (req, res, next) => {
  try {
    const newPost = new PostModel(req.body); // here happens validation of req.body, if it is not ok Mongoose will throw a "ValidationError" (btw user is still not saved in db yet)
    const { _id } = await newPost.save(); // this is the line in which the interaction with the db happens

    res.status(201).send({ _id });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getpostsById = async (req, res, next) => {
  try {
    const id = req.params.postId;
    const post = await PostModel.findById(id);
    if (post) {
      res.send(post);
    } else {
      next(createHttpError(404, `Post with id ${id} not found`));
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updatePostsById = async (req, res, next) => {
  try {
    const id = req.params.postId;
    const updatePost = await PostModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (updatePost) {
      res.send(updatePost);
    } else {
      next(createHttpError(404, `Post with id ${id} not found`));
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deletePostsById = async (req, res, next) => {
  try {
    const id = req.params.postId;
    const deletePost = await PostModel.findByIdAndDelete(id);
    if (deletePost) {
      res.status(204).send();
    } else {
      next(createHttpError(404, `User with id ${id} not found!`));
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const postsHandler = {
  getPosts,
  createPosts,
  getpostsById,
  updatePostsById,
  deletePostsById,
};
export default postsHandler;
