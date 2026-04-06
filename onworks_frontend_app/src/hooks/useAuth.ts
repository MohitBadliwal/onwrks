// Custom hook for authentication

import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { User, LoginCredentials } from '@/types';

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};

export const useUser = (): User | null => {
    const { user } = useAuth();
    return user;
};

export const useIsAuthenticated = (): boolean => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated;
};

export const useLogin = () => {
    const { login } = useAuth();
    return login;
};

export const useLogout = () => {
    const { logout } = useAuth();
    return logout;
};

export const useUserRole = (): string | null => {
    const { user } = useAuth();
    return user?.role || null;
};

export const useHasRole = (requiredRole: string): boolean => {
    const userRole = useUserRole();
    return userRole === requiredRole;
};

export const useIsAdmin = (): boolean => {
    return useHasRole('admin');
};

export const useCanEdit = (): boolean => {
    const userRole = useUserRole();
    return userRole === 'admin' || userRole === 'user';
};
