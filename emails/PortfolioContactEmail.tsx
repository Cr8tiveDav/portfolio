import React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Text,
  Section,
  Hr,
  Link,
  Html,
  Preview,
  Tailwind,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const PortfolioContactEmail = ({
  name,
  email,
  message,
}: ContactEmailProps) => {
  const previewText = `New message from ${name} on your portfolio`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className='bg-slate-50 my-auto mx-auto font-sans'>
          <Container className='border border-solid  border-[#eaeaea] rounded my-10 mx-auto p-5 w-116.25 bg-white'>
            <Heading className='text-black text-[24px] font-normal text-center p-0 my-7.5 mx-0'>
              New Portfolio Inquiry
            </Heading>
            <Text className='text-black text-[14px] leading-6'>
              Hello, you received a new message from your portfolio contact
              form:
            </Text>
            <Section className='bg-slate-100 rounded-lg p-4 my-5'>
              <Text className='text-black text-[14px] leading-6 m-0 italic'>
                {message}
              </Text>
            </Section>
            <Hr className='border border-solid border-[#eaeaea] my-6.5 mx-0 w-full' />
            <Text className='text-[#666666] text-[12px] leading-6'>
              <strong>Sender Name:</strong> {name} <br />
              <strong>Sender Email:</strong>
              <Link
                href={`mailto:${email}`}
                className='text-blue-600 no-underline pl-1'
              >
                {email}
              </Link>
            </Text>
            <Section className='text-center mt-8 mb-8'>
              <Link
                className='bg-black rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3'
                href={`mailto:${email}`}
              >
                Reply to {name}
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
