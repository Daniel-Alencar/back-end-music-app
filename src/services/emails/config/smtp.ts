require("dotenv").config({
  path: '.env'
});

export const SMTP_CONFIG = {
  host: 'smtp.gmail.com',
  port: 587,
  user: process.env.EMAIL,
  pass: process.env.PASSWORD,
}
