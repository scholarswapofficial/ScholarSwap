// controllers/auth.controller.ts
import { Request, Response } from "express";
import {
  signupService,
  verifyEmailService,
  loginService,
} from "../services/auth.service";
import sendEmail from "../utils/sendEmail";
import {env} from "../config/env";

export const signup = async (req: Request, res: Response) => {
  try {
    console.log("Signup request body:", req.body); // Debug log

    const { user, token } = await signupService(req.body);

    const verifyLink = `${env.FRONTEND_URL}/verify-email?token=${token}`;

const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Email Verification</title>
</head>
<body style="margin:0; padding:0; font-family:Arial, sans-serif; background-color:#f4f4f4;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding:20px 0;">
    <tr>
      <td align="center">
        
        <!-- Container -->
        <table width="100%" max-width="500px" cellpadding="0" cellspacing="0" 
               style="background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td align="center" style="background:#ff6600; padding:20px;">
              <h1 style="color:#ffffff; margin:0;">ScholarSwap 🎓</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px; text-align:center;">
              
              <h2 style="margin-bottom:10px; color:#333;">
                Hello ${user.name} 👋
              </h2>

              <h3 style="margin-bottom:10px; color:#333;">
                Verify Your Email
              </h3>
              
              <p style="color:#555; font-size:16px; line-height:1.5;">
                Thanks for signing up! Please confirm your email address by clicking the button below.
              </p>

              <!-- Button -->
              <a href="${verifyLink}" 
                 style="
                  display:inline-block;
                  margin:20px 0;
                  padding:12px 25px;
                  background:#ff6600;
                  color:#ffffff;
                  text-decoration:none;
                  border-radius:6px;
                  font-size:16px;
                  font-weight:bold;
                 ">
                Verify Email
              </a>

              <p style="color:#777; font-size:14px;">
                This link will expire in <b>10 minutes</b>.
              </p>

              <!-- Fallback Section -->
              <p style="color:#555; font-size:14px; margin-top:20px;">
                If the button above doesn't work, copy and paste the following URL into your browser:
              </p>

              <p style="word-break:break-all; font-size:13px; color:#ff6600;">
                ${verifyLink}
              </p>

              <p style="color:#999; font-size:12px; margin-top:20px;">
                If you didn’t create an account, you can safely ignore this email.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#fafafa; padding:15px; text-align:center;">
              <p style="margin:0; font-size:12px; color:#aaa;">
                © ${new Date().getFullYear()} ScholarSwap. All rights reserved.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;
    await sendEmail(
      user.email,
      `Verify Your Email Address`,
      html
    );

    res.status(201).json({
      message: "Verification link sent to email",
    });

  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const verifyEmail = async (req: Request, res: Response) => {
  try {
    const { token } = req.params as { token: string };
    // console.log("Verifying email with token:", token); // Debug log

    await verifyEmailService(token);

    res.json({ message: "Email verified successfully" });

  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const { user, token } = await loginService(email, password);

    res.json({ user, token });

  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};


export { signupService };

