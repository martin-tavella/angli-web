import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, apellido, email, telefono, marca, mensaje } = body;

    const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap');
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f8f4eb; font-family: 'Manrope', sans-serif;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8f4eb; padding: 40px 0;">
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border: 2px solid #ee6226; border-radius: 20px; overflow: hidden;">
          
          <tr>
            <td align="center" style="padding: 30px 0; background-color: #4c80bf;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">Nuevo Contacto</h1>
              <p style="color: #f8f4eb; margin: 5px 0 0 0; font-size: 14px;">Angli Estudio - Formulario Web</p>
            </td>
          </tr>

          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #4c80bf; font-size: 16px; margin-bottom: 25px;">Has recibido una nueva consulta a través de la página web. Aquí están los detalles:</p>
              
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f1f1;">
                    <strong style="color: #ee6226; font-size: 14px;">Nombre completo:</strong>
                    <div style="color: #4c80bf; font-size: 16px; margin-top: 5px;">${nombre} ${apellido}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f1f1;">
                    <strong style="color: #ee6226; font-size: 14px;">Correo Electrónico:</strong>
                    <div style="color: #4c80bf; font-size: 16px; margin-top: 5px;">${email}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f1f1;">
                    <strong style="color: #ee6226; font-size: 14px;">Teléfono:</strong>
                    <div style="color: #4c80bf; font-size: 16px; margin-top: 5px;">${telefono || "No proporcionado"}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f1f1;">
                    <strong style="color: #ee6226; font-size: 14px;">Marca / Emprendimiento:</strong>
                    <div style="color: #4c80bf; font-size: 16px; margin-top: 5px;">${marca || "No proporcionado"}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px 0 0 0;">
                    <strong style="color: #ee6226; font-size: 14px;">Mensaje o Consulta:</strong>
                    <div style="color: #4c80bf; font-size: 16px; margin-top: 10px; line-height: 1.5; background-color: #f8f4eb; padding: 15px; border-radius: 10px;">
                      ${mensaje}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding: 20px; background-color: #fcfcfc; border-top: 1px solid #f1f1f1;">
              <p style="color: #4c80bf; font-size: 12px; margin: 0;">Este es un mensaje automático enviado desde el sitio de <strong>Angli Estudio</strong>.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${nombre} ${apellido}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Nueva consulta de marca: ${marca}`,
      text: mensaje,
      html: htmlTemplate,
    };
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email enviado" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error al enviar" }), {
      status: 500,
    });
  }
}
