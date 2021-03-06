const Controller = require('./Controller');
const validator = require('../validators/UserValidator');
const User = require('../../models/User')
const Joi = require('joi');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
class UserController extends Controller{
    async login(req,res){
        const {error} = validator.login(req.body);
        if (error) res.status(400).json(error.message)
        const user = await User.findOne({username:req.body.username});
        if (user){
            console.log(user);
            const isMatched = bcrypt.compareSync(req.body.password,user.password);
            const token = jwt.sign(_.pick(['username','name','_id']),'private_key');
            if (isMatched) res.status(200).json({
                token
            })
            else {
                res.status(400).json({
                    message:"کلمه عبور اشتباه است"
                })
            }
        }else {
            res.status(400).json({
                message:"چنین کاربری وجود ندارد"
            })
        }
    }
    async register(req,res){
        const {error} = validator.register(req.body)
        if (error) res.status(400).json({
            message : error.message
        });
        else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
            const user = await new User({
                name:req.body.name,
                username:req.body.username,
                password:hash
            }).save();
            if (user) {
                const data = jwt.sign(_.pick(user,['username','name','_id']),"private_key");
                res.status(201).json({
                    token:data
                });

            }

        }

    }
}
module.exports = new UserController;