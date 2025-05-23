import jwt from "jsonwebtoken"


const  authenticationJWT = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ message: 'Access Denied: No token provided' })
    }

    const token = authHeader.split(' ')[1]

    if (!token) {
        return res.status(400).json({ message: 'Invalid token format. Expected "Bearer <token>"' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expired. Please log in again.' })
        }
        return res.status(403).json({ message: 'Invalid token' })
    }
}

export default authenticationJWT;