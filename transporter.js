const nodemailer = require("nodemailer");

const SMTP_CONFIG = require("./smtp/smtp");

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function run() {
  const mailSent = await transporter.sendMail({
    text: "Txt E-mail",
    subject: "testando o script",
    from: "Deviego <deviego@gmail.com>",
    to: ["ModerDeviego@gmail.com"],
   
  });

  console.log(mailSent);
}

run();