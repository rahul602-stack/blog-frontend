import api from './api'; // your axios base

export const getAllUsers = async () => {
  const token = localStorage.getItem('token');
  const res = await api.get('/api/users', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
};


export const updateUserRole = async (id: number, role: string) => {
  const token = localStorage.getItem('token');
  const res = await api.patch(`/api/users/${id}/role`, { role }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
};
