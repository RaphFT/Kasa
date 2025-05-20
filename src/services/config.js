// Configuration pour la source des données
export const API_CONFIG = {
  // URL de base de l'API (à remplacer par votre URL d'API quand elle sera prête)
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  // Endpoints de l'API
  endpoints: {
    accommodations: '/accommodations',
    accommodation: (id) => `/accommodations/${id}`
  }
} 