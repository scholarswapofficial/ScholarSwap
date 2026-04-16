import dotenv from 'dotenv';
dotenv.config();

function getEnv(key: string, required = true): string {
  const value = process.env[key];
  if (!value && required) {
    throw new Error(`❌ Missing environment variable: ${key}`);
  }
  return value as string;
}


export const env = {
  PORT: parseInt(process.env.PORT || '5000'),

  MONGO_URI: getEnv('MONGO_URI'),

  JWT_SECRET: getEnv('JWT_SECRET'),
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',

  FRONTEND_URL: getEnv('FRONTEND_URL'),

  EMAIL_VERIFY_SECRET: getEnv('EMAIL_VERIFY_SECRET'),
  EMAIL_VERIFY_EXPIRES_IN: process.env.EMAIL_VERIFY_EXPIRES_IN || '10m',

  EMAIL_USER: getEnv('EMAIL_USER'),
  EMAIL_PASS: getEnv('EMAIL_PASS'),

  SMTP_HOST: getEnv('SMTP_HOST'),
  SMTP_PORT: parseInt(process.env.SMTP_PORT || '587'),
  SMTP_USER: getEnv('SMTP_USER'),
  SMTP_PASS: getEnv('SMTP_PASS'),
};