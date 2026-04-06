// Export all utilities from a single entry point

export * from './validation';
export * from './helpers';

// Re-export commonly used utilities for convenience
export {
    formatDate,
    generateId,
    debounce,
    throttle,
    capitalize,
    camelToKebab,
    kebabToCamel,
    truncateText,
    deepClone,
    isEmpty,
    getNestedValue,
    setNestedValue
} from './helpers';

export {
    validateField,
    validateForm,
    validationPatterns,
    commonRules
} from './validation';