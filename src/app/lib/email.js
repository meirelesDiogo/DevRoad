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

export async function enviarEmailCadastro({ email, nome }) {
  await transporter.sendMail({
    from: `"DevRoad" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Bem-vindo ao DevRoad! 🚀",
    text: `Olá, ${nome}!

Sua conta no DevRoad foi criada com sucesso.

Agora você pode começar a aprender, praticar e evoluir.

Abraços,
Equipe DevRoad`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
        <h1 style="color: #2E8BFF;">
          Bem-vindo ao DevRoad! 🚀
        </h1>

        <p>Olá, <strong>${nome}</strong>!</p>

        <p>
          Sua conta no <strong>DevRoad</strong> foi criada com sucesso.
        </p>

        <p>
          Agora você pode começar sua jornada de aprendizado,
          praticar e evoluir suas habilidades.
        </p>

        <p>
          Bons estudos! 💻
        </p>

        <hr />

        <p style="color: #888; font-size: 12px;">
          Este e-mail foi enviado automaticamente pelo DevRoad.
        </p>
      </div>
    `,
  });
}