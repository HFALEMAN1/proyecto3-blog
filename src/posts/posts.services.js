const postControllers = require('./posts.controllers')


const getAllPosts = async (req, res) => {
    postControllers.findAllPosts()
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const getPostsById = async (req, res) => {
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


const deletePost = async (req, res) => {
    const id = req.params.id
    postControllers.deletePost(id)
        .then(data => {
            if (data === 1) {
                res.status(204).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }

        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const patchPost = async (req, res) => {
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

// const putPost = (req, res) => {
//     const id = req.params.id
//     const postObj = req.body
//     if (!postObj.content || !postObj.userName || !postObj.isPublished) {
//         return res.status(400).json({
//             message: 'Missing Data',
//             example_fields: {
//                 content: 'string',
//                 userName: 'string',

//             }
//         })
//     }
//     postControllers.updatePost(id, postObj)
//         .then(data => {
//             if (data) {
//                 res.status(200).json({ message: `Post with id:${id} update succefuly` })
//             } else {
//                 res.status(404).json({ message: 'Pos not found' })

//             }
//         })
//         .catch(err => {
//             res.status(400).json(err)
//         })
// }




module.exports = {
    getAllPosts,
    getPostsById,
    postNewPost,
    deletePost,
    patchPost
}
















