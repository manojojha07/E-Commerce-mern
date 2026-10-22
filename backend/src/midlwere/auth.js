
import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
    const token = req.headers.token;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Token missing. Please login again."
        });
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.body.userId = decoded.id;

        next();
    } catch (error) {
        console.log("JWT verification error:", error.message);

        return res.status(401).json({
            success: false,
            message: "Invalid token. Please login again."
        });
    }
};

export default authUser;
