const router = require("express").Router();
const userController = require("../controllers/users");
const verify = require('./verifyToken');


router.post("/register", userController.createUser);
router.post("/login", userController.logUser);


router.get('/user', verify, (req,res)=> {
    res.send('ruta privada')
})

module.exports = router;
