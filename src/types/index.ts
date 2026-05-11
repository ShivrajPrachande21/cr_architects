/**
 * TypeScript Types
 * Centralized type definitions for the application
 */

// Form Types
export interface FormData {
  name: string;
  email?: string;
  phone: string;
  countryCode: string;
  message?: string;
}

export interface FormErrors {
  [key: string]: string | null;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  category: string;
  createdAt: Date;
}

// Component Props Types
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

export interface InputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}
