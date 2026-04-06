// Export all types from a single entry point

export * from './auth';
export * from './layout';
export * from './api';

// Common utility types
export interface BaseEntity {
    id: number;
    createdAt: string;
    updatedAt?: string;
}

export interface SelectOption {
    value: string | number;
    label: string;
    disabled?: boolean;
}

export interface FormField {
    name: string;
    label: string;
    type: string;
    required?: boolean;
    placeholder?: string;
    options?: SelectOption[];
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
}