export default function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          {name}: <span>{number}</span>
          <button onClick={() => onDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
