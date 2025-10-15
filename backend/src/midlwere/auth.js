

// import jwt from 'jsonwebtoken';

// const authUser = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   // Check if Authorization header is missing or malformed
//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     return res.status(401).json({ success: false, message: 'User not authenticated' });
//   }

//   const token = authHeader.split(' ')[1]; // Extract token from "Bearer <token>"

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = { id: decoded.id }; // ✅ Attach user info here
//     next();
//   } catch (error) {
//     console.error('Token verification error:', error);
//     return res.status(403).json({ success: false, message: 'Invalid or expired token' });
//   }
// };

// export default authUser;


















































import jwt from 'jsonwebtoken'


//  check user authntivcted or not 

const authUser = async(req, res, next) => {
     const {token} = req.headers;
         if(!token){
            return res.json({success:false ,message : " User not Authnticted "})
         }
    try {
        const token_decode = jwt.verify(token , process.env.JWT_SECRET)
        req.body.userId = token_decode.id
        next()
    } catch (error) {
        console.log(error);
        res.json({success:false , message : error.message})
        
    }
}

export default authUser;