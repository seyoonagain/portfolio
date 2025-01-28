export type Contacts = 'Email' | 'Mobile' | 'GitHub' | 'LinkedIn';

export type ContactItemProps = {
  label: Contacts;
  value: string;
};

export type ContactConfirmType = {
  text: string;
  action: { copy?: () => Promise<void>; link?: string };
};
