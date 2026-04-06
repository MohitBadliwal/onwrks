// Form validation utilities

export interface ValidationRule {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: any) => string | null;
}

export interface ValidationResult {
    isValid: boolean;
    errors: Record<string, string>;
}

export const validateField = (value: any, rules: ValidationRule): string | null => {
    // Required validation
    if (rules.required && (!value || value.toString().trim() === '')) {
        return 'This field is required';
    }

    // Skip other validations if value is empty and not required
    if (!value || value.toString().trim() === '') {
        return null;
    }

    // Min length validation
    if (rules.minLength && value.toString().length < rules.minLength) {
        return `Minimum length is ${rules.minLength} characters`;
    }

    // Max length validation
    if (rules.maxLength && value.toString().length > rules.maxLength) {
        return `Maximum length is ${rules.maxLength} characters`;
    }

    // Pattern validation
    if (rules.pattern && !rules.pattern.test(value.toString())) {
        return 'Invalid format';
    }

    // Custom validation
    if (rules.custom) {
        return rules.custom(value);
    }

    return null;
};

export const validateForm = (data: Record<string, any>, rules: Record<string, ValidationRule>): ValidationResult => {
    const errors: Record<string, string> = {};

    Object.keys(rules).forEach(fieldName => {
        const fieldValue = data[fieldName];
        const fieldRules = rules[fieldName];
        const error = validateField(fieldValue, fieldRules);

        if (error) {
            errors[fieldName] = error;
        }
    });

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

// Common validation patterns
export const validationPatterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[\+]?[1-9][\d]{0,15}$/,
    url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
    alphanumeric: /^[a-zA-Z0-9]+$/,
    numeric: /^\d+$/,
    decimal: /^\d+(\.\d{1,2})?$/
};

// Common validation rules
export const commonRules = {
    required: { required: true },
    email: {
        required: true,
        pattern: validationPatterns.email
    },
    phone: {
        required: true,
        pattern: validationPatterns.phone
    },
    password: {
        required: true,
        minLength: 8,
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
    },
    username: {
        required: true,
        minLength: 3,
        maxLength: 20,
        pattern: validationPatterns.alphanumeric
    }
};
