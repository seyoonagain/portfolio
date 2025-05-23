export type ContactsMethod = 'Email' | 'Mobile' | 'GitHub' | 'LinkedIn' | 'Blog';

export type ContactItemProps = {
  label: ContactsMethod;
  value: string;
};
