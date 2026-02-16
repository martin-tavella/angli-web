import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, apellido, email, telefono, marca, mensaje } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, 
      subject: `Nuevo contacto de ${nombre} ${apellido} - ${marca}`,
      text: `
        Nombre: ${nombre} ${apellido}
        Email: ${email}
        Teléfono: ${telefono}
        Marca: ${marca}
        Mensaje: ${mensaje}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email enviado" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error al enviar" }), { status: 500 });
  }
}