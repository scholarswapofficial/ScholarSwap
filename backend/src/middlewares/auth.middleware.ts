import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

 const authProtect = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = verifyToken(token);
    (req as any).user = decoded;
    // console.log("Authenticated user:", decoded);
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};
 export default authProtect;