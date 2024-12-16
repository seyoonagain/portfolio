import { Contacts } from '@/types/type';

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
] as const;

export const CONTACT_CONFIRM: Record<
  Contacts,
  { text: string; action: () => void }
> = {
  Email: { text: '이메일을 전송하시겠습니까?', action: () => {} },
  Mobile: {
    text: '번호를 복사하시겠습니까?',
    action: () => {
      navigator.clipboard.writeText('01075672005');
    },
  },
  GitHub: { text: 'GitHub 프로필로 이동하시겠습니까?', action: () => {} },
  LinkedIn: { text: 'LinkedIn 프로필로 이동하시겠습니까?', action: () => {} },
} as const;
