import User from "../models/AuthModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const register = async (req, res,next) =>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })

        await newUser.save();
        res.status(200).json("User created");
    } catch (err) {
        next(err);
    }
}

export const login = async (req, res,next) =>{
    try {
        const user = await User.findOne({username: req.body.username})
        if (!user) {
            return res.send("User Not Found");
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect) {
            return res.json({success: false, message: "User or password not found", body: {}});
        }

        const token = jwt.sign({id:user._id}, process.env.JWT);

        const { password, ...otherDetails } = user._doc;

        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200)
        .json({success: true, message: "login successfully", body: { details: { ...otherDetails }}});
    } catch (err) {
        next(err);
    }
}
