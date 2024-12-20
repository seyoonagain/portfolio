import { CONTACT_INFO } from '@/lib/constants/contacts';
import ContactItem from './ContactItem';
import { useClickedContactItemContext } from '@/contexts/useClickedContactItem';

const Contact = () => {
  const { setClickedContactItem } = useClickedContactItemContext();

  return (
    <section
      className='w-full h-full'
      onClick={() => setClickedContactItem(null)}
    >
      <table className='w-full'>
        <tbody>
          <tr className='font-chicago border-b-4 border-double border-zinc-950'>
            <td>Method</td>
            <td>Details</td>
          </tr>
          {CONTACT_INFO.map((contact) => (
            <ContactItem
              key={contact.value}
              label={contact.label}
              value={contact.value}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Contact;
