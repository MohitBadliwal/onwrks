/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback, useRef } from 'react'

// Export new custom hooks
export * from './useAuth';
export * from './useLayout';

// Custom hook for sessionStorage
export function useSessionStorage<T>(
    key: string,
    initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return initialValue
        }
        try {
            const item = window.sessionStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.error(`Error reading sessionStorage key "${key}":`, error)
            return initialValue
        }
    })

    const setValue = useCallback(
        (value: T | ((val: T) => T)) => {
            try {
                const valueToStore = value instanceof Function ? value(storedValue) : value
                setStoredValue(valueToStore)
                if (typeof window !== 'undefined') {
                    window.sessionStorage.setItem(key, JSON.stringify(valueToStore))
                }
            } catch (error) {
                console.error(`Error setting sessionStorage key "${key}":`, error)
            }
        },
        [key, storedValue]
    )

    return [storedValue, setValue]
}



// Custom hook for debounced value
export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}
 
// Custom hook for previous value
export function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T | undefined>(undefined)
    useEffect(() => {
        ref.current = value
    })
    return ref.current
}

// Custom hook for async operations
export function useAsync<T, E = string>(
    asyncFunction: () => Promise<T>,
    immediate = true
) {
    const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<E | null>(null)

    const execute = useCallback(() => {
        setStatus('pending')
        setData(null)
        setError(null)

        return asyncFunction()
            .then((response) => {
                setData(response)
                setStatus('success')
                return response
            })
            .catch((error) => {
                setError(error)
                setStatus('error')
                throw error
            })
    }, [asyncFunction])

    useEffect(() => {
        if (immediate) {
            execute()
        }
    }, [execute, immediate])

    return { execute, status, data, error }
}

// Custom hook for click outside
export function useClickOutside<T extends HTMLElement = HTMLElement>(
    handler: () => void
) {
    const ref = useRef<T>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [handler])

    return ref
}

// Custom hook for window size
export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}

// Custom hook for media queries
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        if (media.matches !== matches) {
            setMatches(media.matches)
        }
        const listener = () => setMatches(media.matches)
        window.addEventListener('resize', listener)
        return () => window.removeEventListener('resize', listener)
    }, [matches, query])

    return matches
}

// Custom hook for toggle state
export function useToggle(initialValue = false): [boolean, () => void, (value: boolean) => void] {
    const [value, setValue] = useState(initialValue)

    const toggle = useCallback(() => setValue(v => !v), [])
    const setToggle = useCallback((val: boolean) => setValue(val), [])

    return [value, toggle, setToggle]
}

// Custom hook for form state
export function useForm<T extends Record<string, any>>(
    initialValues: T
): {
    values: T
    errors: Partial<Record<keyof T, string>>
    setValue: (name: keyof T, value: any) => void
    setError: (name: keyof T, error: string) => void
    reset: () => void
    validate: () => boolean
} {
    const [values, setValues] = useState<T>(initialValues)
    const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})

    const setValue = useCallback((name: keyof T, value: any) => {
        setValues(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: undefined }))
        }
    }, [errors])

    const setError = useCallback((name: keyof T, error: string) => {
        setErrors(prev => ({ ...prev, [name]: error }))
    }, [])

    const reset = useCallback(() => {
        setValues(initialValues)
        setErrors({})
    }, [initialValues])

    const validate = useCallback(() => {
        const newErrors: Partial<Record<keyof T, string>> = {}
        let isValid = true

        Object.keys(values).forEach(key => {
            const value = values[key as keyof T]
            if (!value || (typeof value === 'string' && value.trim() === '')) {
                newErrors[key as keyof T] = 'This field is required'
                isValid = false
            }
        })

        setErrors(newErrors)
        return isValid
    }, [values])

    return {
        values,
        errors,
        setValue,
        setError,
        reset,
        validate,
    }
}
