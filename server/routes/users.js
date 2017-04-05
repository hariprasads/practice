import express from 'express'
import commonValidations from '../shared/validations/signup'
import bcrypt from 'bcrypt'
import User from '../models/user'
// import Promise from 'bluebird'   --------> for the second approach of db query
import isEmpty from 'lodash/isEmpty'


let router = express.Router();

function validateInput(data, otherValidations) {

  let { errors, isValid } = otherValidations(data)

  return User.query({
    where: {email: data.email},
    orWhere: { username: data.username}
  }).fetch().then((user) => {
    if(user){
      if(user.get('username') === data.username){                                            //this method is provided by bookshelf
        errors.username = "Username already exists"
      }
      if(user.get('email') === data.email){
        errors.email = "Email already exists"
      }
    }
    return{
      errors: errors,
      isValid: isEmpty(errors)
    }
  })

  //  ---------------------->Alternative approach to check database query using two database calls
  //
  // return Promise.all([
  //   User.where({ email: data.email}).fetch().then(user => {
  //     if(user){
  //       errors.email = "Email already exists"
  //     }
  //   }),
  //   User.where({ username: data.username}).fetch().then(user => {
  //     if(user){
  //       errors.username = "Username already exists"
  //     }
  //   })
  // ]).then(()=> {
  //   return{
  //     errors: errors,
  //     isValid: isEmpty(errors)
  //   }
  // })
  //

}

router.post('/',(req, res) =>{
  validateInput(req.body, commonValidations).then(({errors, isValid})=> {
    if(isValid){
      const {username,password,email,timezone} = req.body;
      const password_digest = bcrypt.hashSync(password, 10);

      User.forge({
                    username, timezone, email, password_digest
                 }, {hasTimestamps: true}).save()
                 .then(
                    user => res.json({
                    success: true
                  })).catch((err) => {res.status(500).json({
                    error: err
                   })})
    }else{
      res.status(400).json(errors);
    }
  });

})

export default router;
