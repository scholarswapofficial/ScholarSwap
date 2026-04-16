import nodemailer from "nodemailer";

const sendEmail = async (
  to: string,
  subject: string,
  html: string
) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // it can  change to SMTP later
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App password 
      },
    });

    const mailOptions = {
      from: `"Scholar Swap" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html, 
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.messageId);

  } catch (error) {
    console.error("Email error:", error);
    throw new Error("Failed to send email");
  }
};

export default sendEmail;