// Authentication related types

export interface User {
    id: number;
    username: string;
    email: string;
    role: UserRole;
    businessUnitId?: number;
    createdAt: string;
    updatedAt: string;
}

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    VIEWER = 'viewer'
}

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (credentials: LoginCredentials) => Promise<void>;
    logout: () => void;
    updateUser: (user: Partial<User>) => void;
}
