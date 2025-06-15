import axios from 'axios';
import { AuthResponse, Post, Comment, UsersResponse, Order } from '../types';


const API_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach token to every request if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Authentication
export const signup = async (username: string, password: string): Promise<AuthResponse> => {
  const response = await api.post('/auth/signup', { username, password });
  return response.data;
};

export const login = async (username: string, password: string): Promise<AuthResponse> => {
  const response = await api.post('/auth/login', { username, password });
  return response.data;
};

// Posts
export const getAllPosts = async (): Promise<Post[]> => {
  const response = await api.get('/api/posts');
  return response.data;
};

export const createPost = async (title: string, content: string): Promise<Post> => {
  const response = await api.post('/api/posts', { title, content });
  return response.data;
};

// Comments
export const createComment = async (
  content: string,
  postId: number,
  userName?: string
): Promise<Comment> => {
  const response = await api.post('/api/comments', { content, postId, userName });
  return response.data;
};

// Admin
export const getAllUsers = async (page = 1, limit = 10): Promise<UsersResponse> => {
  const response = await api.get(`/api/users?page=${page}&limit=${limit}`);
  return response.data;
};

// Orders

export const getAllOrders = async (): Promise<Order[]> => {
  const response = await api.get('/api/orders');
  return response.data;
};

export const createOrder = async (orderData: {
  customerId?: number;
  type: string;
  items: { menuItemId: number; quantity: number; price: number }[];
}) => {
  const response = await api.post('/api/orders', orderData);
  return response.data;
};

export const updateOrderStatus = async (orderId: number, status: string) => {
  const response = await api.patch(`/api/orders/${orderId}/status`, { status });
  return response.data;
};

// Inventory

export interface InventoryItem {
  id: number;
  itemName: string;
  quantity: number;
  threshold: number;
  updatedAt: string;
}

export const getAllInventory = async (): Promise<InventoryItem[]> => {
  const response = await api.get('/api/inventory');
  return response.data;
};

export const updateInventory = async (inventoryId: number, updatedQuantity: number): Promise<InventoryItem> => {
  const response = await api.patch(`/api/inventory/${inventoryId}`, {
    quantity: updatedQuantity,
  });
  return response.data;
};

export enum OrderStatus {
  PENDING = 'PENDING',
  PREPARING = 'PREPARING',
  READY = 'READY',
  SERVED = 'SERVED',
  CANCELLED = 'CANCELLED',
}

export const getMyOrders = async (customerId: number) => {
  const response = await api.get(`/api/orders/my?customerId=${customerId}`);
  return response.data;
};

export default api;
