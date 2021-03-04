const UserModel = require("../models/User");
const { registerValidation, loginValidation } = require("../validation");
const jwt = require("jsonwebtoken");

//comparacion de password
const bcrypt = require("bcryptjs");

const userController = {
    createUser(req, res) {
        const { error } = registerValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        UserModel.find({ email: req.body.email }).then((result) => {
            !result
                ? res.status(400).send("Email already exists")
                : UserModel.create(req.body)
                      .then((newUser) =>
                          res.status(201).send({ user: newUser._id })
                      )
                      .catch((e) =>
                          res.status(400).send("no se pudo crear usuario")
                      );
        });
    },
    logUser(req, res) {
        const { error } = loginValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        UserModel.findOne({ email: req.body.email }).then((user) => {
            if (!user) res.status(400).send("Invalid Email");
            bcrypt.compare(req.body.password, user.password).then((respo) => {
                if (!respo) res.status(400).send("Invalid Password");
            });
            //Create and assign a token
            const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
            res.header("auth-token", token).send(token);
        });
    },
};

module.exports = userController;
