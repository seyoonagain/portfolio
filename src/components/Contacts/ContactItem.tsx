import { ContactItemProps } from '@/types/props';
import useContactStore from '@/stores/contactStore';

const ContactItem = ({ label, value }: ContactItemProps) => {
  const { selectContactItem, selectedContactItem } = useContactStore();

  const handleClickContactItem = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>
  ) => {
    e.stopPropagation();
    selectContactItem(label);
  };

  return (
    <>
      <tr
        className={`${
          selectedContactItem === label
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
