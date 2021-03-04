const router = require("express").Router();
const verify = require('./verifyToken');
router.get('/user', (req,res)=> {
    res.json({
        post: {
            title: 'test route',
            description: 'only work with the token'
        }
    })
})

module.exports = router;