const express = require('express');


const router = express.Router();

const { signup, signin, signout ,requireSignin } = require("../controllers/user.js");
const {userSignupValidator } = require("../Validator")

router.post("/signup", userSignupValidator,signup);
router.post("/signin", signin);

router.post("/signout", signout);


router.get("hello", requireSignin , (req, res)=> {
    res.send("hello there");
});



module.exports = router;