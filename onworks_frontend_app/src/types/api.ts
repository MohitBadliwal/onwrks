/* eslint-disable @typescript-eslint/no-explicit-any */
// API related types

export interface ApiResponse<T = any> {
    success: boolean;
    data: T;
    message?: string;
    error?: string;
}

export interface PaginatedResponse<T = any> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface ApiError {
    message: string;
    code?: string;
    status?: number;
    details?: any;
}

export interface RequestConfig {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    url: string;
    data?: any;
    params?: Record<string, any>;
    headers?: Record<string, string>;
    timeout?: number;
}

export interface ApiClient {
    get: <T = any>(url: string, config?: Partial<RequestConfig>) => Promise<ApiResponse<T>>;
    post: <T = any>(url: string, data?: any, config?: Partial<RequestConfig>) => Promise<ApiResponse<T>>;
    put: <T = any>(url: string, data?: any, config?: Partial<RequestConfig>) => Promise<ApiResponse<T>>;
    delete: <T = any>(url: string, config?: Partial<RequestConfig>) => Promise<ApiResponse<T>>;
    patch: <T = any>(url: string, data?: any, config?: Partial<RequestConfig>) => Promise<ApiResponse<T>>;
}
