const jwt=require("jsonwebtoken")
const User=require("./userSchema")
const Authentication= (req,resp,next)=>{
    const token = req.cookies.jwtoken;
    if(token){
        const result= jwt.verify(token,'hello world')
        req.userId= result._id
        console.log(999)
    }
    else{
        req.userId='false';
    }
    next();

}
module.exports=Authentication;