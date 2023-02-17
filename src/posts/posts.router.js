const postServices = require('./posts.services')

const router = require('express').Router()

router.get('/posts', postServices.getAllPosts)

router.post('/posts', postServices.postNewPost)

router.get('/posts/:id', postServices.getPostsById)

router.patch('/posts/:id', postServices.patchPost)

router.delete('/post/:id', postServices.deletePost)

module.exports = router















