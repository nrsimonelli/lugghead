import { EmailTemplate } from '../../components/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: { json: () => any }) {
  const body = await req.json()
  try {
    const { data, error } = await resend.emails.send({
      from: "Lugghead's Lazer Lab <onboarding@resend.dev>",
      to: ['inkybyers1963@gmail.com'],
      subject: 'Contact form submission from your website',
      react: EmailTemplate({
        fullName: body.name,
        message: body.message,
        email: body.email,
      }),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
