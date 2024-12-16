import { useConfirmPopUpContext } from '@/contexts/useConfirmPopUp';

const Button = ({ text, action }: { text: string; action?: () => void }) => {
  const { setConfirmPopUp } = useConfirmPopUpContext();

  const handleClick = () => {
    if (action) {
      action();
    }
    setConfirmPopUp(null);
  };

  return (
    <button
      onClick={handleClick}
      className='w-20 h-6 rounded-md border border-zinc-950 active:border-t-2 active:border-l-2 font-galmuri9 text-sm outline outline-offset-1 outline-zinc-950'
    >
      {text}
    </button>
  );
};

export default Button;
