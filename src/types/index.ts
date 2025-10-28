export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Graffiti {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
  author: User;
  likes: number;
  userLiked: boolean;
  comments: Comment[];
  createdAt: string;
}

export interface Comment {
  id: string;
  text: string;
  author: User;
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

export interface Theme {
  name: string;
  background: string;
  primary: string;
  secondary: string;
  accent: string;
}