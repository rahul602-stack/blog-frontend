import React, { useEffect, useState } from 'react';
import { getTickets, createTicket, updateTicketStatus, SupportTicket } from '../services/supportService';

const SupportPage: React.FC = () => {
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const fetchTickets = async () => {
    const data = await getTickets();
    setTickets(data);
  };

  useEffect(() => { fetchTickets(); }, []);

  const handleCreate = async () => {
    await createTicket(title, description);
    setTitle('');
    setDescription('');
    fetchTickets();
  };

  const handleUpdate = async (id: number, status: string) => {
    await updateTicketStatus(id, status);
    fetchTickets();
  };

  return (
    <div className="container">
      <h1>Support Tickets</h1>

      <div>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <button onClick={handleCreate}>Create Ticket</button>
      </div>

      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            {ticket.title} - {ticket.description} - {ticket.status}
            <div>
              {['OPEN', 'IN_PROGRESS', 'RESOLVED'].map(status => (
                <button key={status} onClick={() => handleUpdate(ticket.id, status)}>{status}</button>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupportPage;
