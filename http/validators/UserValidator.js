const Joi = require('joi');
module.exports = {
    register: (req)=> {
        const registerSchema = Joi.object({
            name: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            username: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),

            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),



        })
        return registerSchema.validate(req);
    },
    login: (req)=> {
        const loginSchema = Joi.object({
            username: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),

            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),



        })
        return loginSchema.validate(req);
    },
}
;

