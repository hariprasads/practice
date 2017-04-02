import express from 'express'
import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

let router = express.Router();

function validateInput(data){
  let errors = {}

  if(Validator.isEmpty(data.username)){
    errors.username = "This field is required";
  }

  if(!Validator.isEmail(data.email)){
    errors.email = "Email is invalid";
  }

  if(Validator.isEmpty(data.email)){
    errors.email = "This field is required";
  }

  if(Validator.isEmpty(data.password)){
    errors.password = "This field is required";
  }

  if(Validator.isEmpty(data.passwordconfirmation)){
    errors.passwordconfirmation = "This field is required";
  }

  if(!Validator.equals(data.password, data.passwordconfirmation)){
    errors.passwordconfirmation = "Passwords do not match";
  }

  if(Validator.isEmpty(data.timezone)){
    errors.timezone = "This field is required";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  }
}

router.post('/',(req, res) =>{
  const { errors, isValid } = validateInput(req.body);

  if(!isValid){
    res.status(400).json(errors);
  }

})

export default router;
