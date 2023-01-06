const Joi = require("joi");
const nameSchema = Joi.string()
.required()
.alphanum()
.min(3)
.max(40)
.messages({
    "string.base":"Name must be a string",
    "string.min":"Name should be vat least 3 chars",
    "string.max": "Invalid Name",
    "any.required":"Name is required",
})
.label("Name");
const phoneSchema = Joi.string().required.pattern(new RegExp("^[0-9{10}$]"));
const passwordSchema = Joi.string()
.required()
.pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"));

const SignUpSchema = Joi.object({
    name:nameSchema,
    phone: phoneSchema,
    password:passwordSchema,
});
const UserUpdateSchema = Joi.object({
    name:nameSchema,
    phone: phoneSchema,
});

module.exports={
    SignUpSchema,
    UserUpdateSchema,

}