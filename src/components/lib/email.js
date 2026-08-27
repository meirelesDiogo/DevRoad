import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,

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

    html: `
      <div style="
        background-color: #0A0D14;
        padding: 40px 20px;
        font-family: Arial, sans-serif;
        color: #EDF0F5;
      ">
        <div style="
          max-width: 600px;
          margin: 0 auto;
          background-color: #10141D;
          border: 1px solid #1E2430;
          border-radius: 12px;
          padding: 35px;
        ">
          <h1>
            <span style="color: #2E8BFF;">Dev</span>Road
          </h1>

          <h2>Olá, ${nome}! 👋</h2>

          <p style="color: #8A93A6; line-height: 1.7;">
            Sua conta no DevRoad foi criada com sucesso!
          </p>

          <p style="color: #8A93A6; line-height: 1.7;">
            Agora você já pode começar sua jornada de aprendizado.
          </p>

          <p style="
            margin-top: 30px;
            color: #2E8BFF;
            font-weight: bold;
          ">
            Aprenda · Pratique · Evolua
          </p>
        </div>
      </div>
    `,
  });
}