import data from '../data.json'
import { API_CONFIG } from './config'

// Fonction utilitaire pour les appels API
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_CONFIG.baseUrl}${endpoint}`)
    if (!response.ok) throw new Error('Erreur de chargement')
    return response.json()
  } catch (error) {
    // En cas d'erreur, on utilise data.json comme fallback
    console.warn('Utilisation des données locales:', error)
    return null
  }
}

export const accommodationService = {
  async getAll() {
    // Si l'API n'est pas disponible, on utilise data.json
    const apiData = await fetchData(API_CONFIG.endpoints.accommodations)
    return apiData || data.accommodations
  },

  async getById(id) {
    // Si l'API n'est pas disponible, on utilise data.json
    const apiData = await fetchData(API_CONFIG.endpoints.accommodation(id))
    return apiData || data.accommodations.find(l => l.id === id)
  }
} 