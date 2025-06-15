import api from './api';

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  inventoryId?: number;
}

export const getMenuItems = async (): Promise<MenuItem[]> => {
  const res = await api.get('/api/menu');
  return res.data;
};

export const createMenuItem = async (item: Partial<MenuItem>) => {
  const res = await api.post('/api/menu', item);
  return res.data;
};

export const updateMenuItem = async (id: number, item: Partial<MenuItem>) => {
  const res = await api.put(`/api/menu/${id}`, item);
  return res.data;
};

export const deleteMenuItem = async (id: number) => {
  await api.delete(`/api/menu/${id}`);
};
