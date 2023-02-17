const postControllers = require('./posts.controllers')


const getAllPosts = (req, res) => {
    postControllers.findAllPosts()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const getPostsById = (req, res) => {
    const id = (req.params.id)
    postControllers.findPostById(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: '404 not found id post' })
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const postNewPost = (req, res) => {
    const postObj = req.body
    postControllers.createPost(postObj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}


const deletePost = (req, res) => {
    const id = req.params.id
    postControllers.deletePost(id)
        .then(data => {
            if (data === 1) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }

        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const patchPost = (req, res) => {
    const id = req.params.id
    const postObj = req.body
    postControllers.updatePost(id, postObj)
        .then(data => {
            if (data[0] === 1) {
                res.status(200).json({ message: `Post with id:${id} update succefuly` })
            } else {
                res.status(404).json({ message: 'Post not found' })

            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

module.exports = {
    getAllPosts,
    getPostsById,
    postNewPost,
    deletePost,
    patchPost
}
















