exports.userSignupValidator = (req , res, next) => {
    req.check("name", "Name Is required").notEmpty();
    req.check("email","Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
    .isLength({
        min : 4,
        max : 32
    });
    req.check("password", "password is required").notEmpty();
    req.check("password")
    .isLength({min : 6})
    .withMessage("Passwrod must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("password must contain a number");
    const errors = req.validationErrors();
    if(errors){
        const firstError = error.map(error => error.message)[0];
        return res.status(400).json({ error : firstError});
    }
    next();
};
