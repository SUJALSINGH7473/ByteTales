const express = require('express');
const { getAllBlogsController, createBlogController, updateBlogController, deleteBlogController, getBlogByIdController, userBlogControlller } = require('../controllers/blogController');

//router object
const router = express.Router();

//routes

//GET||all blogs
router.get('/all-blog', getAllBlogsController);

//POST || create a blog
router.post('/create-blog', createBlogController);

//PUT || Update
router.put('/update-blog/:id', updateBlogController);

//Delete || delele
router.delete('/delete-blog/:id', deleteBlogController);

//GET || Single Blog Details
router.get('/get-blog/:id', getBlogByIdController)

//GET || userblog get
router.get('/user-blog/:id', userBlogControlller)
module.exports = router;