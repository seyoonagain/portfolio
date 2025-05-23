export type ContactsMethod = 'Email' | 'Mobile' | 'GitHub' | 'LinkedIn' | 'Blog';

export type ContactItemProps = {
  label: ContactsMethod;
  value: string;
};

export type ContactConfirmType = {
  text: string;
  action: { copy?: () => Promise<void>; link?: string; sendEmail?: () => void };
};
