import api from './api';

export interface DeliveryOrder {
  id: number;
  status: string;
  assignedAt: string;
  order: {
    id: number;
    type: string;
    total: number;
    customer?: { username?: string };
    items: {
      id: number;
      quantity: number;
      price: number;
      menuItem: { name: string };
    }[];
  };
}

export const getDeliveries = async (): Promise<DeliveryOrder[]> => {
  const res = await api.get('/deliveries');
  return res.data;
};

export const updateDelivery = async (deliveryId: number, status: string) => {
  await api.put(`/deliveries/${deliveryId}/status`, { status });
};
