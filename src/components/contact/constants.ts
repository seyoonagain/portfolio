import { ContactsMethod } from './types';

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
    value: 'https://github.com/seyoonagain',
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

export const CONTACT_CONFIRM_MESSAGES: Record<ContactsMethod, string> = {
  Email: '이메일을 전송하시겠습니까?',
  Mobile: '번호를 복사하시겠습니까?',
  GitHub: 'GitHub 프로필로 이동하시겠습니까?',
  LinkedIn: 'LinkedIn 프로필로 이동하시겠습니까?',
  Blog: '블로그로 이동하시겠습니까?',
} as const;
