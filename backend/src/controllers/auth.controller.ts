import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/auth.service.js';

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const data = await registerUser(name, email, password);
    res.json(data);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const data = await loginUser(email, password);
    res.json(data);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};