



import { NextFunction, Request, Response } from 'express';
import {env} from "../config/env";

interface AuthenticatedRequest extends Request {
  user?: {
    role?: string;
  };
  user_code?: number;
}

const adminProtect = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  

  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    if(req.user.role !== 'admin' && req.user_code !== env.ADMIN_CODE) {
      return res.status(403).json({ message: 'Forbidden: Admins only' });
    }
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};
 export default adminProtect;