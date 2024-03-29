export const getSettingsData = async () => {
  try {
    // Realiza a requisição para a API no WordPress
    const response = await fetch(`${process.env.WORDPRESS_URL}/wp-json/trinitykit/v1/settings/`);
  
    // Verifica se a requisição foi bem-sucedida
    if (!response.ok) {
      throw new Error('Failed to fetch settings data from API');
    }

    // Converte a resposta para JSON e retorna os dados
    return await response.json();
  } catch (error) {
    console.error('Error fetching settings data:', error);
    throw error;
  }
};

export type SettingsDataType = {
  title: string;
  description: string;
  whatsapp_url: string;
  frontend_app_url: string;
  google_analytics_id: string;
  favicon_url: string;
  og_image_url: string;
};