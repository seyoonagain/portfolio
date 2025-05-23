export type ContactsMethod = 'Email' | 'Mobile' | 'GitHub' | 'LinkedIn';

export type ContactItemProps = {
  label: ContactsMethod;
  value: string;
};

export type ContactConfirmType = {
  text: string;
  action: { copy?: () => Promise<void>; link?: string };
};
