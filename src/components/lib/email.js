import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function enviarEmailCadastro(email, nome) {
  await transporter.sendMail({
    from: `"DevRoad" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Bem-vindo ao DevRoad! 🚀",
    html: `
      <h1>Olá, ${nome}!</h1>
      <p>Sua conta no DevRoad foi criada com sucesso.</p>
      <p>Agora você já pode começar sua jornada.</p>
    `,
  });
}