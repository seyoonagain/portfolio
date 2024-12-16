import { useConfirmPopUpContext } from '@/contexts/useConfirmPopUp';
import { ButtonProps } from '@/types/props';

const Button = ({ text, action }: ButtonProps) => {
  const { setConfirmPopUp } = useConfirmPopUpContext();

  const handleClick = () => {
    if (action && action.copy) {
      action.copy();
    } else if (action && action.link) {
      window.open(action.link, '_blank');
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
