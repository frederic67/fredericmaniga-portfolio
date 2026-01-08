import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return new Response("Missing fields", { status: 400 });
    }

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
      subject: `Nouveau message – ${name}`,
      html: `
        <h2>Nouveau message depuis le site</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Société :</strong> ${company || "—"}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return new Response("Error sending email", { status: 500 });
  }
}
