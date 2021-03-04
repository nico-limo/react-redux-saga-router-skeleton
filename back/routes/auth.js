const router = require("express").Router();
const userController = require("../controllers/users");

router.post("/register", userController.createUser);
router.post("/login", userController.logUser);


module.exports = router;
