import User from "../model/user.model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);

        const hashPassword = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: hashPassword,
        });

        await newUser.save();
        res.status(200).json({
            message: "User has been created.",
            data: newUser,
        });
    } catch (err) {
        console.error(err)
        next(err);
    }
};

export const Login = async (req, res, next) => {
    try {

        const user = await User.findOne({ email: req.body.email });
        if (!user) return next(createError(404, "User not found!"));

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect)
            return next(createError(400, "Wrong password or username!"));

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT_SECRET_KEY
        );

        const { password, role, ...otherDetails } = user._doc;
        console.log("Cookie", token);
        res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json({ details: { ...otherDetails }, isAdmin });
    } catch (err) {
        next(err);
    }
};