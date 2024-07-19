import * as React from 'react'

interface EmailTemplateProps {
  fullName: string
  message: string
  email: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div>
    <h1>New message from {fullName}!</h1>
    <p>{message}</p>
    <p>{email}</p>
  </div>
)
