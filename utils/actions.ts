'use server';
import { Resend } from 'resend';
import { ActionResult } from './types';
import { render } from '@react-email/render';
import { PortfolioContactEmail } from '@/emails/PortfolioContactEmail';
import React from 'react';
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailAction = async (
  prevState: any,
  formData: FormData
): Promise<ActionResult> => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;
  const receiverEmail = process.env.RECEIVER_EMAIL as string;

  // Render email template to html
  const emailHtml = await render(
    React.createElement(PortfolioContactEmail, { name, email, message })
  );

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: receiverEmail,
      subject: subject,
      html: emailHtml,
    });

    if (error) {
      console.log(error);
      return { message: 'Failed to send message' };
    }
    console.log(data);
    return { message: 'Message sent. We will get back to you shortly.' };
  } catch (error) {
    console.log(error);
    return { message: 'Error' };
  }
};
