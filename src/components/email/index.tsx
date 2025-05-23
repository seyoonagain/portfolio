'use client';

import { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Button from '@/components/common/button';
import Input from '@/components/common/input';
import Textarea from '@/components/common/input/textarea';
import useToast from '@/hooks/useToast';
import usePopupStore from '@/stores/popupStore';

const Email = () => {
  const [isSending, setIsSending] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const { showPopup } = usePopupStore();

  const { toast } = useToast();

  const clearInputs = () => {
    if (emailRef.current) emailRef.current.value = '';
    if (titleRef.current) titleRef.current.value = '';
    if (nameRef.current) nameRef.current.value = '';
    if (messageRef.current) messageRef.current.value = '';
  };

  const sendEmail = () => {
    setIsSending(true);

    const email = emailRef.current?.value;
    const title = titleRef.current?.value;
    const name = nameRef.current?.value;
    const message = messageRef.current?.value;

    emailjs
      .send(
        'service_seyoonagain',
        'template_cnmmodw',
        {
          name,
          message,
          title,
          email,
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY },
      )
      .then(() => {
        toast({ message: '메일이 성공적으로 전송되었습니다!' });
        clearInputs();
      })
      .catch(() =>
        toast({
          type: 'fail',
          message: '메일 전송에 실패하였습니다.\n다시 시도해 주세요.',
        }),
      )
      .finally(() => setIsSending(false));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    showPopup({ text: '확인을 누르면 이메일이 전송됩니다.', confirm: sendEmail });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-2 w-full h-full px-4 py-2"
    >
      <Input label="Email" type="email" id="email" name="email" maxLength={30} ref={emailRef} />
      <Input label="Title" id="title" name="title" maxLength={30} ref={titleRef} />
      <Input label="Name" id="name" name="name" maxLength={20} ref={nameRef} />
      <Textarea label="Message" id="message" name="message" maxLength={1000} ref={messageRef} />

      <div className="flex items-center grow">
        <Button
          type="submit"
          text={isSending ? 'Sending...' : 'Send'}
          className="font-chicago text-base"
          disabled={isSending}
        />
      </div>
    </form>
  );
};

export default Email;
