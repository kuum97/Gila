'use server';

import nodemailer from 'nodemailer';

interface Props {
  email: string;
  type: 'auth' | 'send';
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
    pass: process.env.NEXT_PUBLIC_EMAIL_KEY,
  },
});

const sendEmail = async ({ email, type }: Props) => {
  const randomKey = `${Math.floor(100000 + Math.random() * 900000)}`;

  try {
    switch (type) {
      case 'auth':
        await transporter.sendMail({
          from: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
          to: email,
          subject: 'Gila 이메일 인증 번호 입니다.',
          html: `<h1>Gila 이메일 인증 번호입니다.</h1>
          <h2>인증번호 : ${randomKey}</h2>
          <p>본 메일은 보안을 위해 확인 후 삭제 하시기 바랍니다.</p>
          `,
        });
        break;

      case 'send':
        await transporter.sendMail({
          from: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
          to: email,
          subject: 'Gila 이메일 인증 번호 입니다.',
          html: `<p>${randomKey}</p>`,
        });
        break;

      default:
        throw new Error('입력값을 잘못 입력 하였습니다.');
    }
    return { message: '메일 전송에 성공했습니다.', key: randomKey };
  } catch (error) {
    throw new Error('메일 전송에 실패했습니다.');
  }
};

export default sendEmail;
