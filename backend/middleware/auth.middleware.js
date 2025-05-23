import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env.js';
import User from '../models/user.js';

export const authorize = async (req, res, next) => {
    try {
       let token;

       if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
           token = req.headers.authorization.split(' ')[1];
       }

       if(!token){
           res.status(401).json({
               success: false,
               message: 'Not authorized to access this route'
           });
       }

        const decoded = jwt.verify(token, JWT_SECRET);

       const user = await User.findById(decoded.userId);

       if (!user) 
           return res.status(404).json({
               success: false,
               message: 'User not found'
           });

           req.user = user;
           next();

    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Not authorized to access this route'
        });
    }
}

export const guruOnly = (req, res, next) => {
    if (req.user.role !== 'guru') {
        return res.status(403).json({
            success: false,
            message: 'Access denied. Only guru can access this route.'
        });
    }
    next();
};
