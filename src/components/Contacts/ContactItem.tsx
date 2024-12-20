import { useClickedContactItemContext } from '@/contexts/useClickedContactItem';
import { useConfirmPopUpContext } from '@/contexts/useConfirmPopUp';
import { ContactItemProps } from '@/types/props';

const ContactItem = ({ label, value }: ContactItemProps) => {
  const { clickedContactItem, setClickedContactItem } =
    useClickedContactItemContext();
  const { setConfirmPopUp } = useConfirmPopUpContext();

  const handleClickContactItem = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setClickedContactItem(label);
    setConfirmPopUp(label);
  };

  return (
    <>
      <tr
        className={`${
          clickedContactItem === label
            ? 'bg-zinc-950 text-white'
            : 'bg-white text-zinc-950'
        }`}
        onClick={handleClickContactItem}
      >
        <td className='font-chicago'>{label}</td>
        <td className='font-monaco text-xl cursor-pointer'>{value}</td>
      </tr>
    </>
  );
};

export default ContactItem;
