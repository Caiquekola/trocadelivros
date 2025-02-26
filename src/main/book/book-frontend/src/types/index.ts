export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export interface Book {
  id?: number;
  title: string;
  author: string;
  edition: string;
  condition: string;
  userId: number;
  owner?: User;
}

export interface BookReview {
  id?: number;
  bookId: number;
  userId: number;
  rating: number;
  comment: string;
  createdAt?: string;
  user?: User;
}

export interface Trade {
  id?: number;
  requesterId: number;
  requesterBookId: number;
  ownerId: number;
  ownerBookId: number;
  status: 'PENDING' | 'CONFIRMED' | 'REJECTED';
  createdAt?: string;
  requesterBook?: Book;
  ownerBook?: Book;
}