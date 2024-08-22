import MessageCard from './message-card';

export default function MessageList({ messages }) {
  return (
    <ul>
      {messages.map((item) => (
        <li key={item.id} className="bg-slate-50 group my-2 flex justify-between p-3">
          <MessageCard message={item} />
        </li>
      ))}
    </ul>
  );
}
