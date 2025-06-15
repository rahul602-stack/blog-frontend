import api from './api';

export interface SupportTicket {
  id: number;
  title: string;
  description: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';
  createdAt: string;
}

export const getTickets = async (): Promise<SupportTicket[]> => {
  const response = await api.get('/api/support');
  return response.data;
};

export const createTicket = async (title: string, description: string): Promise<SupportTicket> => {
  const response = await api.post('/api/support', { title, description });
  return response.data;
};

export const updateTicketStatus = async (id: number, status: string): Promise<SupportTicket> => {
  const response = await api.patch(`/api/support/${id}`, { status });
  return response.data;
};
