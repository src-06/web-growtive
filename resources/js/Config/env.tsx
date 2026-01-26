
export const isProd = import.meta.env.VITE_APP_ENV === 'production'
export const basePath = isProd ? '/public' : ''
