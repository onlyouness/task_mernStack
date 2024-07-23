const jwt = require('jsonwebtoken')
const { createCustomError } = require('../errors/error-custom')
const User = require('../models/user')
const { jwtSecret } = require('../config/config')

const protect = async (req,res,next) =>{
    let token
    token = req.cookies.jwt

    if(token){
        jwt.verify(token, jwtSecret, async(err, decodedToken) => {
            if (err) {
              console.error("Token verification failed");
            } else {
              const user = await User.findById(decodedToken.id).select("-password")
              if (!user) {
                return res.status(404).json({ message: "User not found" });
              }
              req.user = user
              return next();
            }
          });
    }else{
        next(createCustomError("No Authorized, no token",401))
    }
}

module.exports = protect