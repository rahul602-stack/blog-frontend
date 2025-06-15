// Data models based on the Blog API documentation

export interface User {
  id: number;
  username: string;
  role: 'WRITER' | 'ADMIN';
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: string;
  updatedAt: string;
  author: User;
  comments: Comment[];
}

export interface Comment {
  id: number;
  content: string;
  postId: number;
  authorId?: number;
  userName?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface PaginationInfo {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface UsersResponse {
  users: User[];
  pagination: PaginationInfo;
}

export interface OrderItem {
  quantity: number;
  price: number;
  menuItem: {
    id: number;
    name: string;
    price: number;
  };
}

export interface Order {
  id: number;
  customerId?: number;
  type: string;
  total: number;
  status: string;
  createdAt?: string;
  updatedAt?: string;
  items: OrderItem[];
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
}

// TODO: Add more interfaces if needed for API errors or admin actions
