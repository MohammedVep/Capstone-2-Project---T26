const mongoose = require('mongoose');
const Joi = require('joi');

const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    }
});

const blogPost = mongoose.model('blogPost', blogPostSchema);

const validateBlogPost = (blogPost) => {
    const schema = Joi.object({
        title: Joi.string().required().label("Title"),
        post: Joi.string().required().label("Post")
    });
    return schema.validate(blogPost);
}

module.exports = {blogPost, validateBlogPost};