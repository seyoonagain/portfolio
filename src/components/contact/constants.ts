import { ContactConfirmType, ContactsMethod } from './types';

export const CONTACT_INFO = [
  {
    label: 'Email',
    value: 'seyoonagain@gmail.com',
  },
  {
    label: 'Mobile',
    value: '+82 10-7567-2005',
  },
  {
    label: 'GitHub',
    value: 'seyoonagain',
  },
  {
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/seyoonagain',
  },
  {
    label: 'Blog',
    value: 'https://annyeonghaseyoon.vercel.app',
  },
] as const;

export const CONTACT_CONFIRM: Record<ContactsMethod, ContactConfirmType> = {
  Email: {
    text: '이메일을 전송하시겠습니까?',
    action: { sendEmail: () => {} },
  },
  Mobile: {
    text: '번호를 복사하시겠습니까?',
    action: {
      copy: () => {
        return new Promise((resolve, reject) => {
          try {
            navigator.clipboard.writeText('01075672005');
            resolve();
          } catch (error) {
            reject(error);
          }
        });
      },
    },
  },
  GitHub: {
    text: 'GitHub 프로필로 이동하시겠습니까?',
    action: { link: 'https://github.com/seyoonagain' },
  },
  LinkedIn: {
    text: 'LinkedIn 프로필로 이동하시겠습니까?',
    action: { link: 'https://www.linkedin.com/in/seyoonagain' },
  },
  Blog: {
    text: '블로그로 이동하시겠습니까?',
    action: { link: 'https://annyeonghaseyoon.vercel.app' },
  },
} as const;
