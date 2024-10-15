import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "Unauthorized, Login Again" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decodedToken.id;
        req.body.name = decodedToken.name;
        req.body.email = decodedToken.email;
        next();
    } catch (error) {
        console.error("Token verification error:", error);
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
};

export default authMiddleware;